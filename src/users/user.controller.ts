import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
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
  getAll() {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return  this.userService.create(createUserDto);
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.find(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }

  @Put(':id')
  edit( @Body() updateUserDto: UpdateUserDto, @Param('id', ParseIntPipe) id: number,) {
    return this.userService.update(updateUserDto, id);
  }

  //is it controller needed ???? #TODO: refactor edit form function
  // @Get('edit/:id')
  // getEditForm(@Param('id', ParseIntPipe) id: number) {
  //   return this.userService.find(id);
  // }
}
