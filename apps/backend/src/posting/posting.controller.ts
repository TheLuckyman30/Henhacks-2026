import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PostingService } from './posting.service';
import { CreatePosting, MyPostingOut, PostingOut } from '@repo/db-types';

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

  @Post()
  createPosting(
    @Body() createPostingDto: CreatePosting,
  ): Promise<MyPostingOut> {
    return this.postingService.createPosting(createPostingDto);
  }
}
