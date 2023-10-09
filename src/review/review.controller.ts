import { Controller, Get, Param, Query } from '@nestjs/common';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get('get/location/name')
  async getData(@Param() name: string) {
    try {
      console.log(name);
      const data = await this.reviewService.getLocation(name);
      return { data };
    } catch (error) {
      console.log(error);
      return { res: error, status: false, msg: 'error' };
    }
  }

  @Get('get/location/reviews')
  async getLocationReview(@Query('name') name: string) {
    try {
      console.log(name);
      const data = await this.reviewService.getLocationReview(name);
      return { data };
    } catch (error) {
      console.log(error);
      return { res: error, status: false, msg: 'error' };
    }
  }

  @Get('get/location/owner/reviews')
  async getLocationReviewOwner(@Query('name') name: string) {
    try {
      console.log(name);
      const data = await this.reviewService.getLocationReviewOwner(name);
      return { data };
    } catch (error) {
      console.log(error);
      return { res: error, status: false, msg: 'error' };
    }
  }
}
