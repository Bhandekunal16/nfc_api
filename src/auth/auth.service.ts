import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { url } from 'src/constants/url';

@Injectable()
export class AuthService {
  async getAccount(name: string) {
    const apiUrl = url(name).getInfo;
    const response = await axios.get(apiUrl);
    return new Promise<any>((resolve, reject) => {
      //todo: code to fetch account
      resolve({ status: true, data: response.data });
    });
  }

  async createBusiness(body: any) {
    try {
      const apiUrl = url('').createBusiness;
      const response = await axios.post(apiUrl, body);
      return response.data;
    } catch (error) {
      return { res: error, status: false, msg: 'error' };
    }
  }

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
