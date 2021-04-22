export class User {
    name:string;
    email:string;
    role:'admin'|'user'|'seller';
    isValid:boolean = false;
}
