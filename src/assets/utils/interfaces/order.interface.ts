
export interface Order {
  id?: string;
  date?: string;
  start_time?: string;
  end_time?: string;
  total_price: number;
  services_id: string[];
  services?: string[];
  created_at?: Date;
}
