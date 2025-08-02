import { UUID } from "crypto";
import{ IsNotEmpty, IsString, minLength }from 'class-validator';

export class BookDto{
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsString()

    title: string;

    @IsNotEmpty()
    @IsString()
    author: string;

    @IsNotEmpty()
    price: number;

}