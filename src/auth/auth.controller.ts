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

  @Get('test')
  async getData(@Query('name') name: string) {
    try {
      console.log(name);
      const data = await this.authService.fetchData(name);
      return { data };
    } catch (error) {
      console.log(error);
      return { res: error, status: false, msg: 'error' };
    }
  }
}
