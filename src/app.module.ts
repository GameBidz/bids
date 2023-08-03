import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bid } from './entities/bids';
import { BidsModule } from './bids/bids.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'gamebidz',
      synchronize: true,
      logging: false,
      entities: [Bid],
    }),
    BidsModule,
  ],
})
export class AppModule {}
