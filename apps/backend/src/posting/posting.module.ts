import { Module } from '@nestjs/common';
import { PostingService } from './posting.service';
import { PostingController } from './posting.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PostingService, PrismaService],
  controllers: [PostingController],
})
export class PostingModule {}
