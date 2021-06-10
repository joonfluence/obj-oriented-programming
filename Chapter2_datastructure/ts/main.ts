const moment from "moment";
import { plainToClass, Expose } from "class-transformer";

const obj = {
  id: 1,
  name: "joonho Lee",
  createAt: moment("2019-08-17").toDate(),
  updatedAt: moment("2019-08-17").toDate(),
};

class UserModel {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

console.log(obj);
console.log(UserModel);