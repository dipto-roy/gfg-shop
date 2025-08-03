import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { UserModule } from './user/user.module';

//import { SellerModule } from './seller/seller/seller.module';
//import { TypeOrmModule } from '@nestjs/typeorm';

import { BookModule } from './book/book.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'gfgshop-restApi',
    autoLoadEntities: true,
    synchronize: true,
  })
  
  ,BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
