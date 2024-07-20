import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Plug } from '../../../entities/plugs.entity';
import { GetPlugService } from './get-plug.service';
import { GetPlugController } from './get-plug.controller';
import { User } from 'src/entities/user.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Plug, User])],
  controllers: [GetPlugController],
  providers: [GetPlugService],
})
export class GetPlugModule {}
