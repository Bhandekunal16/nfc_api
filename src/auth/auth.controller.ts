import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('get/location')
  async getData(@Query('name') name: string) {
    try {
      console.log(name);
      const data = await this.authService.getLocation(name);
      return { data };
    } catch (error) {
      console.log(error);
      return { res: error, status: false, msg: 'error' };
    }
  }

  @Get('/account')
  async getAccount(@Param('name') name: string) {
    try {
      return await this.authService.getAccount(name);
    } catch (error) {
      return { res: error, status: false, msg: 'error' };
    }
  }

  @Get('get/location/reviews')
  async getLocationReview(@Query('name') name: string) {
    try {
      console.log(name);
      const data = await this.authService.getLocationReview(name);
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
      const data = await this.authService.getLocationReviewOwner(name);
      return { data };
    } catch (error) {
      console.log(error);
      return { res: error, status: false, msg: 'error' };
    }
  }

  @Post('create/businessAccount')
  async createAccount(@Body() body: any) {
    try {
      return await this.authService.createBusiness(body);
    } catch (error) {
      return { res: error, status: false, msg: 'error' };
    }
  }
}
