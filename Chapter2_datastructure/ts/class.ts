import moment = require('moment');
import { plainToClass, Expose } from "class-transformer";

const obj = {
  idea: 1,
  name: "joonho Lee",
  // nickname: "Chris",
  createAt: moment("2019-08-17").toDate(),
  updatedAt: moment("2019-08-17").toDate(),
};

interface objInterface {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

class UserModel {
    // id: number = 12;
    // getID(): number{
    //   return this.id;
    // }
    name: string;
    createdAt: Date;
    updatedAt: Date;
    nickname: string;
}

const UserInstance = new UserModel;

// console.log(typeof obj);
console.log(typeof plainToClass(UserModel, {...obj}));
// console.log(UserInstance.getID());
// console.log(plainToClass(UserModel, new Promise<objInterface>));
console.log(plainToClass(UserModel, {...obj}));