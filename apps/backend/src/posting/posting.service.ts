import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePosting, FindPostings, PostingOut } from '@repo/db-types';
import { decode } from '@aashari/nodejs-geocoding';

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
    const postings = await this.prisma.posting.findMany({
      select: {
        id: true,
        user: { select: { id: true, name: true } },
        title: true,
        description: true,
        location: true,
        createdAt: true,
      },
    });

    if (!postings) {
      throw new NotFoundException("Requested resource doesn't exist");
    }

    const filteredPostings = postings.filter(
      (p) =>
        this.calcDistance(p.location, findPostingsDto.location) <=
        findPostingsDto.range,
    );

    if (!filteredPostings) {
      throw new NotFoundException('No postings in range!');
    }

    return await Promise.all(
      filteredPostings.map(async (p) => ({
        ...p,
        createdAt: p.createdAt.toISOString(),
        location:
          (await decode(p.location[0], p.location[1]).then(
            (l) => l?.formatted_address,
          )) ?? '',
      })),
    );
  }

  async createPosting(createPostingDto: CreatePosting): Promise<PostingOut> {
    const newPosting = await this.prisma.posting.create({
      data: createPostingDto,
      select: {
        id: true,
        user: { select: { id: true, name: true } },
        title: true,
        description: true,
        location: true,
        createdAt: true,
      },
    });

    return {
      ...newPosting,
      createdAt: newPosting.createdAt.toISOString(),
      location:
        (await decode(newPosting.location[0], newPosting.location[1]).then(
          (l) => l?.formatted_address,
        )) ?? '',
    };
  }
}
