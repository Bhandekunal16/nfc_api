import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { getAccount } from './dto/get-account.dto';
import { createAccount } from './dto/create-account.dto';
import { authorization } from 'src/routes/routes';

@Controller(authorization.Controller)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get(authorization.GetAccount)
  async getAccount(@Query('name') name: getAccount) {
    try {
      return await this.authService.getAccount(name);
    } catch (error) {
      return { res: error, status: false, msg: 'error' };
    }
  }

  @Post(authorization.CreateBusinessAccount)
  async createAccount(@Body() body: createAccount) {
    try {
      return await this.authService.createBusiness(body);
    } catch (error) {
      return { res: error, status: false, msg: 'error' };
    }
  }
}
