import { Body, Controller, Get, Param, Post, Patch, Delete  } from '@nestjs/common';
import { MiduService } from './midu.service';

@Controller('midu')
export class MiduController {
    constructor(private readonly miduservice: MiduService){}

    @Get('details')
    addmidu(){
        return this.miduservice.addmidu();
    }

    @Post('create')
    createSimpleUser(@Body() user: { id: number; name: string; email: string }) {
        return this.miduservice.getSimpleUser(user.id);
    }

    @Get(':id')
    getmidubyid(@Param('id') id: string){
        const miduId = +id; // Convert string to number
        return this.miduservice.getmidubyid(miduId);
    }

}
