import { PlugStatus } from '../../../entities/plugs.entity';

export class PlugDto {
  id: number;
  name: string;
  status: PlugStatus;
}
