import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { EntityRepository } from '@mikro-orm/core';
import { Plug } from '../../../entities/plugs.entity';

type CreateParams = {
  userId: number;
  name: string;
};

@Injectable()
export class AddPlugService {
  constructor(
    @InjectRepository(Plug)
    private readonly plugRepository: EntityRepository<Plug>,
  ) {}

  async execute(params: CreateParams): Promise<Plug> {
    const plug = this.plugRepository.create({
      name: params.name,
      user: params.userId,
    });

    await this.plugRepository.getEntityManager().flush();

    return plug;
  }
}
