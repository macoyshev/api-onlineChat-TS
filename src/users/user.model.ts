import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table
} from 'sequelize-typescript';
import { UserCreationAttrsInterface } from './interfaces/userCreationAttrs.interface';
import { Role } from '../roles/roles.model';
import { UserRoles } from './user-roles.model';

@Table({
  tableName: 'persons',
  timestamps: false
})
export class User extends Model<User, UserCreationAttrsInterface> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;

  @Column({ type: DataType.STRING, allowNull: false })
  banReason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
