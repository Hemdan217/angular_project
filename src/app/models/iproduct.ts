export interface IProduct {
  id: number;
  name: string;
  about: string;
  url: string;
  price: number;
  quantity?: number;
  added?: boolean;
  description?: any;
}
