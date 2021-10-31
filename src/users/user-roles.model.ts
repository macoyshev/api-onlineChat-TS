import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from './user.model';
import { Role } from '../roles/roles.model';

@Table({ tableName: 'user_roles', timestamps: false })
export class UserRoles extends Model<UserRoles>{
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ForeignKey(() => Role)
  @Column({type: DataType.INTEGER})
  roleId: number;

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userID: number;
}