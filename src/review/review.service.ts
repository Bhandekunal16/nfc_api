import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { url } from 'src/constants/url';
import { getLocation } from './dto/get-location.dto';
import { getLocationReview } from './dto/get-location-review.dto';
import { getLocationReviewOwner } from './dto/get-location-review-owner.dto';
@Injectable()
export class ReviewService {
  async getLocation(name: getLocation) {
    console.log(name);
    const apiUrl = url(name).location;
    console.log(apiUrl);
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getLocationReview(name: getLocationReview) {
    console.log(name);
    const apiUrl = url(name).getAllReview;
    console.log(apiUrl);

    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getLocationReviewOwner(name: getLocationReviewOwner) {
    console.log(name);
    const apiUrl = url(name).getAllReviewOwner;
    console.log(apiUrl);

    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
