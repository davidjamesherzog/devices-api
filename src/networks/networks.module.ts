import { Module } from '@nestjs/common';
import { NetworksController } from './networks.controller';
import { NetworksService } from './networks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NetworksRepository } from './networks.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([NetworksRepository]),
  ],
  controllers: [NetworksController],
  providers: [NetworksService]
})
export class NetworksModule {}
