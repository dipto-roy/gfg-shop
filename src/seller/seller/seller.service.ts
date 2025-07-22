import { Injectable } from '@nestjs/common';

@Injectable()
export class SellerService {
    private sellers: any[] = [];
    private nextId = 1;
    
    create(seller: any) {
        const newSeller = {
            id: this.nextId++,
            ...seller
        };
        this.sellers.push(newSeller);
        return newSeller;
    }

    findAll(): any{
        return this.sellers;
    }

    findOne(id: number): any {
        return this.sellers.find(seller => seller.id === id);
    }

    update(id: number, updateData: any): any {
        const sellerIndex = this.sellers.findIndex(seller => seller.id === id);
        if (sellerIndex === -1) {
            return undefined;
        }
        
        this.sellers[sellerIndex] = {
            ...this.sellers[sellerIndex],
            ...updateData,
            updatedAt: new Date(),
        };
        
        return this.sellers[sellerIndex];
    }

    remove(id: number): boolean {
        const sellerIndex = this.sellers.findIndex(seller => seller.id === id);
        if (sellerIndex === -1) {
            return false;
        }
        
        this.sellers.splice(sellerIndex, 1);
        return true;
    }
}
