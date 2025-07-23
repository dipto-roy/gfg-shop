import { Injectable } from '@nestjs/common';

@Injectable()
export class MiduService {
    addmidu()
    {
        return {
            id: 1,
            name: 'Rabbni',
            email: 'rabbni@example.com'
        }
    }

    getmidubyid(id : number)
    {
        return 'midu is the best'+id;
    }

    getSimpleUser(user: { id: number; name: string; email: string }) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            message: 'User created successfully',
            createdAt: new Date()
        }
    }
}
