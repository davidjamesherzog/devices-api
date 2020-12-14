import { IsIn, IsNotEmpty } from 'class-validator';
import {NetworkTypes} from '../network-types.enum';

export class AddUpdateNetworksDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsIn([NetworkTypes.WIFI, NetworkTypes.WIRED])
  type: NetworkTypes;
}
