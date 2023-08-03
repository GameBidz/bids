import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Bid {
  @PrimaryColumn()
  id: string;

  @Column({
    length: 50,
  })
  name: string;

  @Column('text')
  description: string;

  @Column()
  initialCost: number;

  @Column()
  finalCost: number;

  @Column('text')
  images: string;
}
