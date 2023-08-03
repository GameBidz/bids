import { Injectable } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { Bid } from 'src/entities/bids';

import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BidsService {
  constructor(
    @InjectRepository(Bid)
    private bidsRepository: Repository<Bid>,
  ) {}

  create(bid: Bid): Promise<Bid> {
    const newBid = new Bid();
    const uuid = uuidv4();
    newBid.id = uuid;
    newBid.name = bid.name;
    newBid.description = bid.description;
    newBid.initialCost = bid.initialCost;
    newBid.finalCost = bid.finalCost;
    newBid.images = bid.images;

    return this.bidsRepository.save(newBid);
  }

  findAll(): Promise<Bid[]> {
    return this.bidsRepository.find();
  }

  findOne(id: string): Promise<Bid | null> {
    return this.bidsRepository.findOneBy({ id });
  }
}
