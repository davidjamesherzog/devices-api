import { Module } from '@nestjs/common';
import { DevicesController } from './devices.controller';
import { DevicesService } from './devices.service';
import { NetworksService } from '../networks/networks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {DevicesRepository} from './devices.respository';
import {NetworksRepository} from '../networks/networks.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([DevicesRepository]),
    TypeOrmModule.forFeature([NetworksRepository])
  ],
  controllers: [DevicesController],
  providers: [
    DevicesService,
    NetworksService
  ]
})
export class DevicesModule {}
