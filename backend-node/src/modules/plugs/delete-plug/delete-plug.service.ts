import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityRepository } from '@mikro-orm/core';
import { Plug } from '../../../entities/plugs.entity';

type DeleteParams = {
  userId: number;
  name: string;
};

@Injectable()
export class DeletePlugService {
  constructor(
    @InjectRepository(Plug)
    private readonly plugRepository: EntityRepository<Plug>,
  ) {}

  async execute(params: DeleteParams): Promise<void> {
    try {
      await this.plugRepository.findOneOrFail({
        user: params.userId,
        name: params.name,
      });
    } catch (error) {
      console.log(error);
      throw new NotFoundException('존재하지 않는 데이터입니다.');
    }

    await this.plugRepository.nativeDelete({
      name: params.name,
      user: params.userId,
    });
  }
}
