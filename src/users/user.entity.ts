import {
  AllowNull,
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { UserInterface } from './interfaces/user.interface';

@Table({
  tableName: 'persons',
  timestamps: false,
})
export class User extends Model<User, UserInterface> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  age: number;

  @Unique
  @AllowNull
  @Column
  email: string;
}
