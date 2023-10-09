import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { url } from 'src/constants/url';

@Injectable()
export class AuthService {
  async getAccount(name: string) {
    const apiUrl = url(name).getInfo;
    console.log(apiUrl);
    const response = await axios.get(apiUrl);
    return new Promise<any>((resolve, reject) => {
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
}
