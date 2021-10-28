import { Controller, Get, Render } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { UserInterface } from './interfaces/user.interface';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  //
  // @Get()
  // // @Render('users/index')
  // async getAll() {
  //   return this.userService.findAll();
  // }

  @Get()
  @Render('users/index')
  async getAll() {
    return {
      users: this.userService.findAll(),
    };
  }
}
