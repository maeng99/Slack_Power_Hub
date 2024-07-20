import { Controller, Get, Param } from '@nestjs/common';
import { ListPlugService } from './list-plug.service';
import { PlugDto } from './plug.dto';

@Controller()
export class ListPlugController {
  constructor(private readonly listPlugService: ListPlugService) {}

  @Get('users/:userId/plugs')
  async listPlugByUser(@Param('userId') userId: number): Promise<PlugDto[]> {
    return await this.listPlugService.findByUser(userId);
  }
}
