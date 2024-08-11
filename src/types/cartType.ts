export type Cart = {
  cartId: string | number;
  productId: string | number;
  title: string;
  image: string;
  seller: string;
  oldPrice: number;
  discount: number;
  quantity: number;
  limit: number;
  [key: string]: string | number;
};
export type User = {
  id: string;
  email: string;
  cart: Cart[];
  fav: string[];
};
export type Fav = {
  id: string | number;
  title: string;
  price: number;
  discountPrice: number;
  images: string[];
};
