import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class GetUsers {
  @Get()
  getUsers(): string {
    return 'Get all users';
  }
}
