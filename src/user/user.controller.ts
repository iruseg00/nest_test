import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { UserModel } from './user.model/user.model';

@Controller('user')
export class UserController {
  @Post()
  async create(@Body() dto: Omit<UserModel, 'id' | 'tokens'>) {}

  @Get()
  async get(@Body() id: string) {}

  @Delete()
  async markAsDelete(@Body() id: string) {}

  @Patch()
  async patch(
    @Body() id: string,
    @Body() dto: Omit<UserModel, 'id' | 'login'>,
  ) {}
}
