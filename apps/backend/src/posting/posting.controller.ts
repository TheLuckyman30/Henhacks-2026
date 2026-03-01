import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PostingService } from './posting.service';
import {
  CreatePosting,
  MyPostingOut,
  PostingOut,
  SinglePostingOut,
} from '@repo/db-types';

@Controller('posting')
export class PostingController {
  constructor(private postingService: PostingService) {}

  @Get()
  findPostingsInRange(
    @Query('zipcode') zipcode: string,
  ): Promise<PostingOut[]> {
    return this.postingService.findPostingsInRange({
      zipcode,
    });
  }

  @Get(':id')
  findPosting(
    @Param('id') id: string,
    @Query('zipcode') zipcode: string,
  ): Promise<SinglePostingOut> {
    return this.postingService.findPosting(id, zipcode);
  }

  @Post()
  createPosting(
    @Body() createPostingDto: CreatePosting,
  ): Promise<MyPostingOut> {
    return this.postingService.createPosting(createPostingDto);
  }
}
