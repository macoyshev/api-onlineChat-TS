import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @PrimaryKey
  id: number;

  @Column
  name: string;

  @Column
  email: string;
}
