import { Controller, Get, Post, Patch, Body, Param, ParseIntPipe, UsePipes, ValidationPipe, Delete } from '@nestjs/common';
import {NetworksService} from './networks.service';
import {Networks} from './models/networks.model';
import {AddUpdateNetworksDto} from './dtos/add-update-networks.dto';

@Controller('networks')
export class NetworksController {
  constructor(private readonly networksService: NetworksService) {}

  @Get()
  list(): Array<Networks> {
    return this.networksService.list();
  }

  @Post()
  @UsePipes(ValidationPipe)
  add(@Body() addNetworksDTO: AddUpdateNetworksDto): Networks {
    return this.networksService.add(addNetworksDTO);
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.networksService.findById(id);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateNetworksDTO: AddUpdateNetworksDto
  ): Networks {
    return this.networksService.update(id, updateNetworksDTO);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): void {
    this.networksService.delete(id);
  }
}
