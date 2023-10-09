import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/account')
  async getAccount(@Query('name') name: string) {
    try {
      console.log(name);
      return await this.authService.getAccount(name);
    } catch (error) {
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
