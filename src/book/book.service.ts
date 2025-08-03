import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from './book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {

    constructor(
        @InjectRepository(BookEntity)
        private bookRepository: Repository<BookEntity>,
    ) {}

    async findAll(): Promise<BookEntity[]> {
        return this.bookRepository.find();
    }

    async create(book : BookEntity): Promise<BookEntity> {
        return this.bookRepository.save(book);

    }

    async findOne(id: number): Promise<BookEntity | null> {
        const bookEntity = await this.bookRepository.findOneBy({ id });

        if(!bookEntity){
            throw new Error('Book is not found');
        }
        return bookEntity;
    }

    async update(id: number, book: BookEntity): Promise<BookEntity | null>{
        await this.bookRepository.update(id, book);
        return this.findOne(id);
    }
    

    async getbyId(id: number):Promise<BookEntity | null> {
        const bookEntity = await this.bookRepository.findOneBy({ id});
        if (!bookEntity){
            throw new Error(`Book with id ${id} not found`);
        }
        return bookEntity;
    }

    async remove(id: number): Promise<void> {
        const result = await this.bookRepository.delete(id);
        if (result.affected === 0) {
            throw new Error(`Book with id ${id} not found`);
        }
    }


}


    

