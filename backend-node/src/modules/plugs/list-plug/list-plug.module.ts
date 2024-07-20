import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Plug } from '../../../entities/plugs.entity';
import { User } from 'src/entities/user.entity';
import { ListPlugController } from './list-plug.controller';
import { ListPlugService } from './list-plug.service';

@Module({
  imports: [MikroOrmModule.forFeature([Plug, User])],
  controllers: [ListPlugController],
  providers: [ListPlugService],
})
export class ListPlugModule {}
