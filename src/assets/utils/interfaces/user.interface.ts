import {Pet} from "./pet.interface";
import {Order} from "./order.interface";
import {CommentInterface} from "./comment.interface";
import {Addresses} from "./addresses.interface";

export interface User {
  id: string;
  email: string;
  name: string;
  created_at: string;
  profile_picture: string;
  phone: string;
  roles: string;
  pets: Pet[];
  comments: CommentInterface[];
  addresses: Addresses[];
  orders: Order[];
}
