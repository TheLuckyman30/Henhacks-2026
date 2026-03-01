import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import {
  CreatePosting,
  FindPostings,
  MyPostingOut,
  PostingOut,
} from '@repo/db-types';
import { encode } from '@aashari/nodejs-geocoding';

@Injectable()
export class PostingService {
  constructor(private prisma: PrismaService) {}

  calcDistance(coords1: number[], coords2: number[]) {
    let lat1 = coords1[0];
    const long1 = coords1[1];
    let lat2 = coords2[0];
    const long2 = coords2[1];
    let dLat = ((lat2 - lat1) * Math.PI) / 180.0;
    let dLon = ((long2 - long1) * Math.PI) / 180.0;

    lat1 = (lat1 * Math.PI) / 180.0;
    lat2 = (lat2 * Math.PI) / 180.0;

    const a =
      Math.pow(Math.sin(dLat / 2), 2) +
      Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
    const rad = 3958.8;
    const c = 2 * Math.asin(Math.sqrt(a));
    return rad * c;
  }

  async findPostingsInRange(
    findPostingsDto: FindPostings,
  ): Promise<PostingOut[]> {
    const locationObj = await encode(findPostingsDto.zipcode);
    const givenLocation = [
      locationObj[0].latitude ?? 0,
      locationObj[0].longitude ?? 0,
    ];
    const postings = await this.prisma.posting.findMany({
      select: {
        id: true,
        user: { select: { id: true, name: true, email: true } },
        title: true,
        description: true,
        status: true,
        location: true,
        address: true,
        category: true,
        tags: true,
        createdAt: true,
      },
    });

    if (!postings) {
      throw new NotFoundException("Requested resource doesn't exist");
    }

    const filteredPostings = postings.filter(
      (p) =>
        this.calcDistance(p.location, givenLocation) <= 100 &&
        p.status !== 'Completed',
    );

    if (!filteredPostings) {
      throw new NotFoundException('No postings in range!');
    }

    return filteredPostings.map((p) => {
      const { location, ...newPosting } = p;
      return {
        ...newPosting,
        createdAt: p.createdAt.toISOString(),
        distance: Math.ceil(this.calcDistance(location, givenLocation)),
      };
    });
  }

  async createPosting(createPostingDto: CreatePosting): Promise<MyPostingOut> {
    const locationObj = await encode(createPostingDto.address);
    const location = [
      locationObj[0].latitude ?? 0,
      locationObj[0].longitude ?? 0,
    ];
    const newPosting = await this.prisma.posting.create({
      data: { ...createPostingDto, location },
      select: {
        id: true,
        title: true,
        description: true,
        status: true,
        category: true,
        tags: true,
        createdAt: true,
      },
    });

    return {
      ...newPosting,
      createdAt: newPosting.createdAt.toISOString(),
    };
  }
}
