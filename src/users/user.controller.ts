import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Redirect,
  Render,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { UserInterface } from './interfaces/user.interface';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @Render('users/index')
  async getAll() {
    return {
      users: this.userService.findAll(),
    };
  }

  // @Get()
  // @Render('users/index')
  // async getAll() {
  //   return {
  //     users: this.userService.findAll(),
  //   };
  // }
  //
  // @Get('create')
  // @Render('users/create-user')
  // getForm() {
  //   return;
  // }
  //
  // @Get(':id')
  // @Render('users/user')
  // async getById(@Param('id', ParseIntPipe) id) {
  //   return {
  //     user: await this.userService.findById(id),
  //   };
  // }
  //
  // @Post()
  // @Redirect('/users', 301)
  // async create(@Body() createUserDto: CreateUserDto) {
  //   await this.userService.create(createUserDto);
  // }
}
