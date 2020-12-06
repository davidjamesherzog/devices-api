import { Injectable, NotFoundException } from '@nestjs/common';
import {Networks} from './models/networks.model';
import {AddUpdateNetworksDto} from './dtos/add-update-networks.dto';

@Injectable()
export class NetworksService {
  private networks: Array<Networks> = [];
  private id: number = 0;

  list(): Array<Networks> {
    return this.networks;
  }

  add(addNetworksDTO: AddUpdateNetworksDto) : Networks {
    const {name, type} = addNetworksDTO;
    this.id++;
    const network: Networks = {
      id: this.id,
      name,
      type
    };

    this.networks.push(network);

    return network;
  }

  findById(id: number) : Networks {
    const network = this.networks.find((network: Networks) => network.id === id);

    if (!network) {
      throw new NotFoundException(`Network with ID "${id}" not found`);
    }

    return network;
  }

  update(id: number, updateNetworksDTO: AddUpdateNetworksDto) : Networks {
    const network = this.findById(id);
    network.name = updateNetworksDTO.name;
    network.type = updateNetworksDTO.type;
    return network;
  }

  delete(id: number): void {
    this.findById(id); // checks if already exists and if not, throws 404
    this.networks = this.networks.filter((network: Networks) => network.id !== id);
  }
}
