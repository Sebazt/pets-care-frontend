import {User} from "./user.interface";

export interface Addresses {
  id?: string,
  state: string,
  address: string,
  city: string,
  remark?: string,
  longitude?: string,
  latitude?: string,
  postal_code?: string,
  created_at?: Date,
}
