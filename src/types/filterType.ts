export type FilterState = {
  brands: string[];
  priceRange: [number, number] | null;
  inStock: boolean;
  sellers: string[];
  sortBy: string;
};
export type FilterAction =
  | { type: "TOGGLE_BRAND"; brand: string }
  | { type: "SET_PRICE_RANGE"; priceRange: [number, number] | null }
  | { type: "TOGGLE_IN_STOCK" }
  | { type: "TOGGLE_SELLER"; seller: string }
  | { type: "SET_SORT_BY"; sortBy: string };
