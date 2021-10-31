import { User } from './user.model';
import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userRepository: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async create(newUser: CreateUserDto) {
    await this.userRepository.create(newUser);
  }

  async find(id: number): Promise<User> {
    return await this.userRepository.findByPk(id);
  }

  async delete(id: number) {
    await this.userRepository.destroy({ where: { id: id } });
  }

  async update(user: UpdateUserDto, id: number) {
    return await this.userRepository.update(user, { where: { id: id }});
  }

}
