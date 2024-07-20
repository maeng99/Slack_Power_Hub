import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { UpdatePlugService } from './update-plug.service';
import { PlugDto } from './plug.dto';
import { PlugStatus } from 'src/entities/plugs.entity';

@Controller()
export class UpdatePlugController {
  constructor(private readonly updatePlugService: UpdatePlugService) {}

  @Put('slack-users/:slackUserId/plugs/:name')
  async updatePlug(
    @Param('slackUserId') slackUserId: string,
    @Param('name') name: string,
    @Body('status') status: PlugStatus,
  ): Promise<PlugDto> {
    return await this.updatePlugService.updatePlugStatus(
      slackUserId,
      name,
      status,
    );
  }
}
