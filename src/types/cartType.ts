export type Cart = {
  cartId: string;
  productId: string;
  title: string;
  image: string;
  seller: string;
  oldPrice: number;
  discount: number;
  quantity: number;
  Renk?: string;
  Hafıza?: string;
  Kapasite?: string;
};
export type User = {
  id: string;
  email: string;
  cart: Cart[];
};
