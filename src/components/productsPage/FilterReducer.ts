import { FilterAction, FilterState } from "@/types/filterType";
export const initialFilterState: FilterState = {
  brands: [],
  priceRange: null,
  inStock: false,
  sellers: [],
  sortBy: "initial",
};

export const filterReducer = (
  state: FilterState,
  action: FilterAction
): FilterState => {
  switch (action.type) {
    case "TOGGLE_BRAND":
      return {
        ...state,
        brands: state.brands.includes(action.brand)
          ? state.brands.filter((brand) => brand !== action.brand)
          : [...state.brands, action.brand],
      };
    case "SET_PRICE_RANGE":
      return { ...state, priceRange: action.priceRange };
    case "TOGGLE_IN_STOCK":
      return { ...state, inStock: !state.inStock };
    case "TOGGLE_SELLER":
      return {
        ...state,
        sellers: state.sellers.includes(action.seller)
          ? state.sellers.filter((seller) => seller !== action.seller)
          : [...state.sellers, action.seller],
      };
    case "SET_SORT_BY":
      return { ...state, sortBy: action.sortBy };
    default:
      return state;
  }
};
