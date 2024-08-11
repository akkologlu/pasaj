export type FilterState = {
  brands: string[];
  priceRange: [number, number] | null;
  inStock: boolean;
  sellers: string[];
  sortBy: string;
};
