import { Module } from '@nestjs/common';
import { MiduService } from './midu.service';
import { MiduController } from './midu.controller';

@Module({
  providers: [MiduService],
  controllers: [MiduController]
})
export class MiduModule {}
