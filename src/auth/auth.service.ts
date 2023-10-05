import { Injectable } from '@nestjs/common';

import axios from 'axios';
import { url } from 'src/constants/url';

@Injectable()
export class AuthService {
  async fetchData(name) {
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
}
