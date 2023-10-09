import { Controller, Get, Param, Query } from '@nestjs/common';
import { ReviewService } from './review.service';
import { getLocation } from './dto/get-location.dto';
import { getLocationReview } from './dto/get-location-review.dto';
import { getLocationReviewOwner } from './dto/get-location-review-owner.dto';
import { Review } from 'src/routes/routes';

@Controller(Review.Controller)
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get(Review.GetLocationName)
  async getData(@Param() name: getLocation) {
    try {
      console.log(name);
      const data = await this.reviewService.getLocation(name);
      return { data };
    } catch (error) {
      console.log(error);
      return { res: error, status: false, msg: 'error' };
    }
  }

  @Get(Review.GetLocationReview)
  async getLocationReview(@Query('name') name: getLocationReview) {
    try {
      console.log(name);
      const data = await this.reviewService.getLocationReview(name);
      return { data };
    } catch (error) {
      console.log(error);
      return { res: error, status: false, msg: 'error' };
    }
  }

  @Get(Review.GetLocationOwnerReview)
  async getLocationReviewOwner(@Query('name') name: getLocationReviewOwner) {
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
