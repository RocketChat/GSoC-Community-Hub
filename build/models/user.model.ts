import { QueryValueObject } from "fauna";

export interface User extends QueryValueObject {

  name: string;
  email: string;
  password:string;
}
