
export interface Order {
  id: string;
  date: Date;
  starts_at: Date;
  finish_at: Date;
  price: number;
  services: string[];
}
