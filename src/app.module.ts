import { Module } from '@nestjs/common';

import { LoadConfig } from './config/index';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TerminusModule } from '@nestjs/terminus';
import { ConfigModule, ConfigService } from '@nestjs/config';
 
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [LoadConfig] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([]), //mapeamento de entity
    TerminusModule,
  ],
  controllers: [],//controllers
  
  providers: [],//serviços
})
export class AppModule {}
