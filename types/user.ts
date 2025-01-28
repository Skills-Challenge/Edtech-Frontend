export type Tuser = {
    image?:string;
    name:string;
    email:string;
    password?:string;
    role:"admin"|"talent"
}