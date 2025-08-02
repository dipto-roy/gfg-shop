import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("book")
export class BookEntity
{
   
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   title: string;

   @Column()
   author: string;

   @Column('decimal', { precision: 10, scale: 2 })
   price: number;
}