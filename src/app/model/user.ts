export class User {
    userName: string;
    email: string;
    course: string;
    gender: string;
  }

  export class Ragistration {
    constructor(
        public firstName:string,
        public lastName:string,
        public age:number,
        public email:string,
        public phone:number,
        public city:string,
        public gender:string,
        public password:string,
        public cpassword:string,
    ){}
}