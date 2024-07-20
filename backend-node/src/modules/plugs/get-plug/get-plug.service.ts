import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityRepository } from '@mikro-orm/core';
import { Plug } from '../../../entities/plugs.entity';
import { User } from 'src/entities/user.entity';

type CreateParams = {
  name: string;
  userId: string;
};

@Injectable()
export class GetPlugService {
  constructor(
    @InjectRepository(Plug)
    private readonly plugRepository: EntityRepository<Plug>,
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
  ) {}

  async findByUserAndPlugName(userId: number, name: string): Promise<Plug> {
    try {
      return await this.plugRepository.findOneOrFail({ user: userId, name });
    } catch (error) {
      throw new NotFoundException('존재하지 않는 멀티탭입니다.');
    }
  }

  async findBySlackUserAndPlugName(
    slackUserId: string,
    name: string,
  ): Promise<Plug> {
    try {
      const user = await this.userRepository.findOneOrFail({ slackUserId });

      return await this.plugRepository.findOneOrFail({ user, name });
    } catch (error) {
      throw new NotFoundException('존재하지 않는 멀티탭입니다.');
    }
  }

  async create(params: CreateParams): Promise<Plug> {
    const plug = this.plugRepository.create(params);

    await this.plugRepository.getEntityManager().flush();

    return plug;
  }
}
