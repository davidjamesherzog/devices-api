import { IsIn, IsNotEmpty } from 'class-validator';
import {NetworkTypes} from '../models/networks.model';

export class AddUpdateNetworksDto {
  @IsNotEmpty()
  name: string;

  @IsIn([NetworkTypes.WIFI, NetworkTypes.WIRED])
  type: NetworkTypes;
}
