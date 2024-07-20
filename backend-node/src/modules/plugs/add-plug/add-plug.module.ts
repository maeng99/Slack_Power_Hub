import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Plug } from '../../../entities/plugs.entity';
import { User } from 'src/entities/user.entity';
import { AddPlugController } from './add-plug.controller';
import { AddPlugService } from './add-plug.service';

@Module({
  imports: [MikroOrmModule.forFeature([Plug, User])],
  controllers: [AddPlugController],
  providers: [AddPlugService],
})
export class AddPlugModule {}
