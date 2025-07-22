import { Body, Controller, Get, Param, Post, Patch, Delete } from '@nestjs/common';
import {SellerService } from './seller.service';

@Controller('seller')
export class SellerController {
constructor(private readonly sellerService: SellerService){}

@Post()
create(@Body() seller: any) {
    const newSeller = this.sellerService.create(seller);
    return newSeller;
}

@Get()
findAll(){
    return this.sellerService.findAll();
}

@Get(':id')
findOne(@Param('id') id: string){
    const sellerId = +id; // Convert string to number
    
    // Check if conversion resulted in valid number
    if(isNaN(sellerId) || sellerId <= 0) {
        return { message: `Invalid seller ID: ${id}` };
    }
    
    const seller = this.sellerService.findOne(sellerId);
    
    if(!seller){
        return { message: `Seller with id ${sellerId} not found!` };  
    }
    return seller;
}

@Patch(':id')
update(@Param('id') id: string, @Body() updateData: any) {
    const sellerId = +id;
    
    // Check if conversion resulted in valid number
    if(isNaN(sellerId) || sellerId <= 0) {
        return { message: `Invalid seller ID: ${id}` };
    }
    
    const updatedSeller = this.sellerService.update(sellerId, updateData);
    
    if(!updatedSeller){
        return { message: `Seller with id ${sellerId} not found!` };  
    }
    return updatedSeller;
}

@Delete(':id')
remove(@Param('id') id: string) {
    const sellerId = +id;
    
    // Check if conversion resulted in valid number
    if(isNaN(sellerId) || sellerId <= 0) {
        return { message: `Invalid seller ID: ${id}` };
    }
    
    const success = this.sellerService.remove(sellerId);
    
    if(!success){
        return { message: `Seller with id ${sellerId} not found!` };  
    }
    return { message: `Seller with id ${sellerId} deleted successfully!` };
}

}
