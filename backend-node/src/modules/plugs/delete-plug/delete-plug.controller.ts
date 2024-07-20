import { Controller, Delete, Param } from '@nestjs/common';

import { DeletePlugService } from './delete-plug.service';

@Controller()
export class DeletePlugController {
  constructor(private readonly deletePlugService: DeletePlugService) {}

  @Delete('users/:userId/plugs/:plugName')
  async deletePlug(
    @Param('userId') userId: number,
    @Param('plugName') name: string,
  ): Promise<void> {
    await this.deletePlugService.execute({
      userId,
      name,
    });
  }
}
