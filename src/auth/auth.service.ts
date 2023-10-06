import { Injectable } from '@nestjs/common';

import axios from 'axios';
import { url } from 'src/constants/url';

@Injectable()
export class AuthService {
  async getLocation(name) {
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

  async getLocationReview(name) {
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

  async getLocationReviewOwner(name) {
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
