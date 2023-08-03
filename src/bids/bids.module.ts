import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Bid } from 'src/entities/bids';
import { BidsService } from './bids.service';
import { BidsController } from './bids.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Bid])],
  providers: [BidsService],
  controllers: [BidsController],
})
export class BidsModule {}
