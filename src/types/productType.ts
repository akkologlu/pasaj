type Option = {
  title: string;
  options: string[];
};

type Image = {
  color: string;
  url: string;
};

type Seller = {
  seller: string;
  price: number;
  rating: number;
  endOfDiscount?: string;
  stock: number;
};

type Specification = {
  title: string;
  value: string;
};

type Comments = {
  id: number;
  name: string;
  rating: number;
  comment: string;
};

type QA = {
  id: number;
  question: string;
  answer: string;
};

export type Product = {
  id: number;
  title: string;
  rating: number;
  stock: number;
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
  images: Image[];
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
};
