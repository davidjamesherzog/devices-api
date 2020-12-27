import { Module } from '@nestjs/common';
import { NetworksModule } from './networks/networks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { DevicesModule } from './devices/devices.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    NetworksModule,
    DevicesModule
  ]
})
export class AppModule {}
