import { Body, Controller, Get, Redirect, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Redirect('/users', 301)
  getUsersPage(): void {
    return;
  }
}
