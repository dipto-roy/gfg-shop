import { Injectable } from '@nestjs/common';

@Injectable()
export class SimpleUserService {
  private users: any[] = [];
  private nextId = 1;

  create(userData: any): any {
    const user = {
      id: this.nextId++,
      ...userData,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.push(user);
    return user;
  }

  findAll(): any[] {
    return this.users;
  }

  findOne(id: number): any {
    return this.users.find(user => user.id === id);
  }

  update(id: number, updateData: any): any {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      return undefined;
    }
    
    this.users[userIndex] = {
      ...this.users[userIndex],
      ...updateData,
      updatedAt: new Date(),
    };
    
    return this.users[userIndex];
  }

  remove(id: number): boolean {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      return false;
    }
    
    this.users.splice(userIndex, 1);
    return true;
  }
}
