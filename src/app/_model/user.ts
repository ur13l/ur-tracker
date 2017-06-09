import { Travel } from './travel';

export class User {
    id: number;
    email: string;
    password: string;
    name: string;
    api_token:string;
    travels: Array<Travel>;
    
}