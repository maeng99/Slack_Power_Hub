import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Plug } from '../../../entities/plugs.entity';
import { User } from 'src/entities/user.entity';
import { DeletePlugController } from './delete-plug.controller';
import { DeletePlugService } from './delete-plug.service';

@Module({
  imports: [MikroOrmModule.forFeature([Plug, User])],
  controllers: [DeletePlugController],
  providers: [DeletePlugService],
})
export class DeletePlugModule {}
