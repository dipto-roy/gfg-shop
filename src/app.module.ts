import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MiduModule } from './midu/midu.module';
import { SellerModule }  from './seller/seller/seller.module';

@Module({
  imports: [UserModule, SellerModule, MiduModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
