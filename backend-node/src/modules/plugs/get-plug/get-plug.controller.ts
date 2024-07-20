import { Controller, Get, Param } from '@nestjs/common';
import { GetPlugService } from './get-plug.service';
import { PlugDto } from './plug.dto';

@Controller()
export class GetPlugController {
  constructor(private readonly getPlugService: GetPlugService) {}

  @Get('users/:userId/plugs/:name')
  async getPlugByUser(
    @Param('userId') userId: number,
    @Param('name') name: string,
  ): Promise<PlugDto> {
    return await this.getPlugService.findByUserAndPlugName(userId, name);
  }

  @Get('slack-users/:slackUserId/plugs/:name')
  async getPlugBySlackUser(
    @Param('slackUserId') userId: string,
    @Param('name') name: string,
  ): Promise<PlugDto> {
    return await this.getPlugService.findBySlackUserAndPlugName(userId, name);
  }
}
