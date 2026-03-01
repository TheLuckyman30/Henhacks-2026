import { Body, Controller, Get, Post, Query } from '@nestjs/common';
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
    @Query('zipcode') zipcode: string,
    @Query('range') range: number,
  ): Promise<PostingOut[]> {
    return this.postingService.findPostingsInRange({
      zipcode,
      range: range,
    });
  }

  @Post()
  createPosting(
    @Body() createPostingDto: CreatePosting,
  ): Promise<MyPostingOut> {
    return this.postingService.createPosting(createPostingDto);
  }
}
