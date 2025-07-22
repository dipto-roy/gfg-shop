import { Body, Controller, Get, Param, Post, Patch, Delete  } from '@nestjs/common';
import { MiduService } from './midu.service';

@Controller('midu')
export class MiduController {
    constructor(private readonly miduservice: MiduService){}

    @Get('details')
    addmidu(){
        return this.miduservice.addmidu();
    }

    @Get(':id')
    getmidubyid(@Param('id') id: number){
        return this.miduservice.getmidubyid(id);
    }

}
