import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Plug } from '../../../entities/plugs.entity';
import { UpdatePlugService } from './update-plug.service';
import { User } from 'src/entities/user.entity';
import { UpdatePlugController } from './update-plug.controller';

@Module({
  imports: [MikroOrmModule.forFeature([Plug, User])],
  controllers: [UpdatePlugController],
  providers: [UpdatePlugService],
})
export class UpdatePlugModule {}
