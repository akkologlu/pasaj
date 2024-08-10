export type Option = {
  title: string;
  options: string[];
};
type Seller = {
  seller: string;
  price: number;
  rating: number;
  endOfDiscount?: string;
  stock: number;
};

export type Specification = {
  title: string;
  value: string;
};

export type Comments = {
  id: number | string;
  name: string;
  rating: number;
  comment: string;
  date: string;
};

export type QA = {
  id: number | string;
  question: {
    content: string;
    date: string;
  };
  answer: {
    content: string;
    date: string;
    seller: string;
  };
};
export type Images = {
  image: string;
};

export type Product = {
  id: number | string;
  title: string;
  rating: number;
  stock: number;
  nofSales: number;
  brand: string;
  configration: Option[];
  price: number;
  creditCard: boolean;
  installmentCount: number;
  installmentPrice: number;
  limit: number;
  endOfDiscount: string;
  discountPrice: number;
  category: string;
  categoryUrl: string;
  subcategory: string;
  subcategoryUrl: string;
  images: string[];
  freeShipping: boolean;
  guarantee: boolean;
  colors: string[];
  otherSellers: Seller[];
  description: string;
  specifications: Specification[];
  comments: Comments[];
  qa: QA[];
  badges: string[];
  fibabanka: boolean;
  specialForYou: boolean;
  newProduct: boolean;
  bestOffers: boolean;
  image: string;
  seller: string;
};
