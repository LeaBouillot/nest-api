import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  Home() {
    return 'Welcome to my movie Api';
  }
}
