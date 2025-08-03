import { Controller , Get , Post , Body, Param, NotFoundException, Delete, Patch} from '@nestjs/common';
import { BookService } from './book.service';
import { BookEntity } from './book.entity';
import { BookDto } from './dto/book.dto';


@Controller('books')
export class BookController {
    constructor(private readonly bookService: BookService) {}
    
    @Get()
    async findAll(){
        return this.bookService.findAll();
    }

    @Post('')
    async create(@Body() bookdto:BookDto){
        return this.bookService.create(bookdto);
    }

    @Get(':id')
    async findOne(@Param('id')id : number) {
        const bookEntity = await this.bookService.findOne(id);
        if (!bookEntity) {
            throw new NotFoundException(`Book with ID ${id} not found`);
        }
        return bookEntity;
    }
    @Patch(':id')
    async update(@Param('id') id : number, @Body() book : BookEntity) {
        const updatedBook = await this.bookService.update(id, book);
        if (!updatedBook) {
            throw new NotFoundException(`Book with ID ${id} not found`);
        }
        return updatedBook;
    }

    @Delete(':id')
    async remove(@Param('id') id : number) {
        try {
            await this.bookService.remove(id);
            return { message: `Book with ID ${id} deleted successfully` };
        } catch (error) {
            throw new NotFoundException(`Book with ID ${id} not found`);
        }
    }

}
