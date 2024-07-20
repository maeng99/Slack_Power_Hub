import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { EntityRepository } from '@mikro-orm/core';
import { User } from '../../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
  ) {}

  // async findOne(email: string): Promise<User> {
  //   try {
  //     return await this.userRepository.findOneOrFail({ email });
  //   } catch (error) {
  //     throw new NotFoundException('존재하지 않는 계정입니다.');
  //   }
  // }

  // async create(email: string, password: string, name: string): Promise<User> {
  //   const isExisting = await this.userRepository.findOne({ email });

  //   if (isExisting) {
  //     throw new ConflictException('이미 존재하는 계정입니다.');
  //   }

  //   const user = this.userRepository.create({
  //     email,
  //     password,
  //     name,
  //   });

  //   await this.userRepository.getEntityManager().flush();

  //   return user;
  // }
}
