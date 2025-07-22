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

    getSimpleUser(id: number) {
        return {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com'
        }
    }
}
