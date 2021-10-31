import { Body, Controller, Get, Redirect, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getUsersPage(): void {
    return;
  }
}
