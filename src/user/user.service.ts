import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getHello(): string {
        return 'Hola Mundo';
    }  
}
