import { BaseEntity, Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'users' })
export class User extends BaseEntity<User, 'id'> {
  @PrimaryKey()
  id!: number;

  @Property()
  name: string;

  @Property()
  slackUserId: string;
}
