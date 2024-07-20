import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityRepository } from '@mikro-orm/core';
import { Plug } from '../../../entities/plugs.entity';

@Injectable()
export class ListPlugService {
  constructor(
    @InjectRepository(Plug)
    private readonly plugRepository: EntityRepository<Plug>,
  ) {}

  async findByUser(userId: number): Promise<Plug[]> {
    try {
      return await this.plugRepository.find({ user: userId });
    } catch (error) {
      throw new NotFoundException('존재하지 않는 데이터입니다.');
    }
  }
}
