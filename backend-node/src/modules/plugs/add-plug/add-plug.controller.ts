import { Body, Controller, Param, Post } from '@nestjs/common';
import { AddPlugService } from './add-plug.service';
import { PlugDto } from './plug.dto';

@Controller()
export class AddPlugController {
  constructor(private readonly addPlugService: AddPlugService) {}

  @Post('users/:userId/plugs')
  async addPlug(
    @Param('userId') userId: number,
    @Body('name') name: string,
  ): Promise<PlugDto> {
    return await this.addPlugService.execute({
      userId,
      name,
    });
  }
}
