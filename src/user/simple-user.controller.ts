import { Body, Controller, Get, Param, Post, Patch, Delete } from '@nestjs/common';

@Controller('simple-user')
export class SimpleUserController {
  private users: any[] = [];
  private nextId = 1;

  @Post()
  create(@Body() userData: any) {
    const user = {
      id: this.nextId++,
      ...userData,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.push(user);
    return user;
  }

  @Get()
  findAll() {
    return this.users;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const userId = +id;
    const user = this.users.find(u => u.id === userId);
    
    if (!user) {
      return { message: `User with id ${userId} not found!` };
    }
    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData: any) {
    const userId = +id;
    const userIndex = this.users.findIndex(u => u.id === userId);
    
    if (userIndex === -1) {
      return { message: `User with id ${userId} not found!` };
    }
    
    this.users[userIndex] = {
      ...this.users[userIndex],
      ...updateData,
      updatedAt: new Date(),
    };
    
    return this.users[userIndex];
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const userId = +id;
    const userIndex = this.users.findIndex(u => u.id === userId);
    
    if (userIndex === -1) {
      return { message: `User with id ${userId} not found!` };
    }
    
    this.users.splice(userIndex, 1);
    return { message: 'User deleted successfully' };
  }
}
