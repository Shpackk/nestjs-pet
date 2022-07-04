import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('requests')
export class RequestEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  location: string;

  @Column({ array: true })
  summary: object[];

  @Column()
  totalPrice: number;
}
