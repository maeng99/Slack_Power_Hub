import {
  BaseEntity,
  Entity,
  ManyToOne,
  PrimaryKey,
  Property,
  Unique,
} from '@mikro-orm/core';
import { User } from './user.entity';

export enum PlugStatus {
  ON = 'ON',
  OFF = 'OFF',
}

@Entity({ tableName: 'plugs' })
export class Plug extends BaseEntity<Plug, 'id'> {
  @PrimaryKey()
  id!: number;

  @Property()
  @Unique()
  name: string;

  @ManyToOne(() => User)
  user: User;

  @Property({ default: PlugStatus.OFF })
  status: PlugStatus;

  @Property({ default: false })
  mode: boolean;

  @Property({ nullable: true })
  time?: number;
}
