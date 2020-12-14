import { Module } from '@nestjs/common';
import { NetworksModule } from './networks/networks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    NetworksModule
  ]
})
export class AppModule {}
