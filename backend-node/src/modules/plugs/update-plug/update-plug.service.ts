import axios from 'axios';

import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityRepository } from '@mikro-orm/core';
import { Plug, PlugStatus } from '../../../entities/plugs.entity';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UpdatePlugService {
  constructor(
    @InjectRepository(Plug)
    private readonly plugRepository: EntityRepository<Plug>,
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
  ) {}

  async updatePlugStatus(
    slackUserId: string,
    name: string,
    status: PlugStatus,
  ): Promise<Plug> {
    try {
      const user = await this.userRepository.findOne({
        slackUserId,
      });

      const plug = await this.plugRepository.findOneOrFail({
        user,
        name,
      });

      // await axios({
      //   method: 'post',
      //   url: process.env.LAMBDA_URL,
      //   data: {
      //     plugId: 1,
      //     status,
      //   },
      // });

      await this.plugRepository.getEntityManager().flush();

      return plug;
    } catch (error) {
      console.log(error);
      throw new NotFoundException('존재하지 않는 데이터입니다.');
    }
  }
}
