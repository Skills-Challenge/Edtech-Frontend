export type Tuser = {
    image?:string;
    fullname:string;
    email:string;
    password?:string;
    role:"admin"|"talent"
}