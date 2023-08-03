import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { Bid } from 'src/entities/bids';
import { BidsService } from './bids.service';

@Controller('bids')
export class BidsController {
  constructor(private readonly bidsService: BidsService) {}

  @Post()
  create(@Body() bid: Bid): Promise<Bid> {
    return this.bidsService.create(bid);
  }

  @Get()
  findAll(): Promise<Bid[]> {
    return this.bidsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Bid> {
    return this.bidsService.findOne(id);
  }
}
