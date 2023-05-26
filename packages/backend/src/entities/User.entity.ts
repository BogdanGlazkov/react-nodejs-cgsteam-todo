import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BeforeInsert,
  OneToMany
} from 'typeorm';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';
// eslint-disable-next-line import/no-cycle
import { Todo } from './Todo.entity';
import { hashPassword } from '../libs/hashpassword';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false, unique: true })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'varchar', nullable: true, default: null })
  token: string;

  @Column({ type: 'boolean', default: false })
  verify: boolean;

  @Column({ type: 'varchar', nullable: false, default: uuidv4().toString() })
  verificationToken: string;

  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];

  @BeforeInsert()
  async beforeInsert() {
    this.password = await hashPassword(this.password);
  }
}
