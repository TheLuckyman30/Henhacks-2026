import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostingService } from './posting.service';
import {
  CreatePosting,
  FindPostings,
  MyPostingOut,
  PostingOut,
} from '@repo/db-types';

@Controller('posting')
export class PostingController {
  constructor(private postingService: PostingService) {}

  @Get()
  findPostingsInRange(
    @Body() findPostingsDto: FindPostings,
  ): Promise<PostingOut[]> {
    return this.postingService.findPostingsInRange(findPostingsDto);
  }

  @Post()
  createPosting(
    @Body() createPostingDto: CreatePosting,
  ): Promise<MyPostingOut> {
    return this.postingService.createPosting(createPostingDto);
  }
}
