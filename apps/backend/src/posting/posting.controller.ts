import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostingService } from './posting.service';
import { CreatePosting, PostingOut } from '@repo/db-types';

@Controller('posting')
export class PostingController {
  constructor(private postingService: PostingService) {}

  @Post()
  createPosting(@Body() createPostingDto: CreatePosting): Promise<PostingOut> {
    return this.postingService.createPosting(createPostingDto);
  }
}
