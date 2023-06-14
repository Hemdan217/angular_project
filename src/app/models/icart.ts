export interface ICartProduct {
  name: string;
  url: string;
  price: number;
  quantity: number;
}
export interface ICart {
  email: string;
  id?: number;
  cartProducts: ICartProduct[];
}
