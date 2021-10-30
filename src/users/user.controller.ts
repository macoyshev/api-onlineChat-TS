import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll() {
    return {
      users: await this.userService.findAll(),
    };
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    await this.userService.create(createUserDto);
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return {
      user: await this.userService.find(id),
    };
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.userService.delete(id);
  }

  @Put(':id')
  async edit( @Body() updateUserDto: UpdateUserDto, @Param('id', ParseIntPipe) id: number,) {
    return await this.userService.update(updateUserDto, id);
  }

  @Get('edit/:id')
  async getEditForm(@Param('id', ParseIntPipe) id: number) {
    return {
      user: await this.userService.find(id),
    };
  }
}
