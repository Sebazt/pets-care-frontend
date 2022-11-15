import {Pet} from "./pet.interface";
import {Order} from "./order.interface";

export interface User {
  profile_picture: string;
  name: string;
  email: string;
  phone: string;
  pets: Pet[];
  orders: Order[];
}
