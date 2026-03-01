import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePosting, PostingOut } from '@repo/db-types';

@Injectable()
export class PostingService {
  constructor(private prisma: PrismaService) {}

  async findPosting(postingId: string): Promise<PostingOut> {
    const posting = await this.prisma.posting.findUnique({
      where: { id: postingId },
      select: {
        id: true,
        user: true,
        title: true,
        description: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!posting) throw new NotFoundException("Request resource doesn't exist");

    return {
      ...posting,
      createdAt: posting.createdAt.toISOString(),
      updatedAt: posting.updatedAt.toISOString(),
    };
  }

  async createPosting(createPostingDto: CreatePosting): Promise<PostingOut> {
    const newPosting = await this.prisma.posting.create({
      data: createPostingDto,
      select: {
        id: true,
        user: true,
        title: true,
        description: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return {
      ...newPosting,
      createdAt: newPosting.createdAt.toISOString(),
      updatedAt: newPosting.updatedAt.toISOString(),
    };
  }
}
