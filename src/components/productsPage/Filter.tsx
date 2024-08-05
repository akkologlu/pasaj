import React, { useReducer, useEffect } from "react";
import { filterReducer, initialFilterState } from "./FilterReducer";
import { Product } from "@/types/productType";
import FilterSection from "./FilterSection";
import {
  StyledLabel,
  StyledRadioLabel,
  StyledSwitchLabel,
} from "@/styles/styled";
import { priceRanges, sortOptions } from "@/lib/mockData";
import { FilterState } from "@/types/filterType";
interface FilterProps {
  onFilterChange: (filters: FilterState) => void;
  data: Product[];
}
const Filter: React.FC<FilterProps> = ({ onFilterChange, data }) => {
  const [state, dispatch] = useReducer(filterReducer, initialFilterState);
  useEffect(() => {
    onFilterChange(state);
  }, [state]);
  const brands = data.map((item: Product) => item.brand);
  const uniqueBrands = Array.from(new Set(brands));
  const sellers = data.flatMap((item: Product) =>
    item.otherSellers.map((seller) => seller.seller)
  );
  const uniqueSellers = Array.from(new Set(sellers));
  const handlePriceRangeChange = (range: [number, number] | null) => {
    if (
      state.priceRange &&
      range &&
      state.priceRange[0] === range[0] &&
      state.priceRange[1] === range[1]
    ) {
      dispatch({ type: "SET_PRICE_RANGE", priceRange: null });
    } else {
      dispatch({ type: "SET_PRICE_RANGE", priceRange: range });
    }
  };
  return (
    <div>
      <FilterSection title="Markalar" isOpen={true}>
        {uniqueBrands.map((brand) => (
          <StyledLabel as="label" key={brand}>
            <input
              type="checkbox"
              checked={state.brands.includes(brand)}
              onChange={() => dispatch({ type: "TOGGLE_BRAND", brand: brand })}
            />
            {brand}
          </StyledLabel>
        ))}
      </FilterSection>
      <FilterSection title="Sırala">
        {sortOptions.map(({ label, value }) => (
          <StyledRadioLabel as="label" key={value}>
            <input
              type="radio"
              name="sortBy"
              checked={state.sortBy === value}
              onChange={() => dispatch({ type: "SET_SORT_BY", sortBy: value })}
            />
            {label}
          </StyledRadioLabel>
        ))}
      </FilterSection>
      <FilterSection title="Peşin Fiyat" isOpen={true}>
        {priceRanges.map(({ label, range }) => (
          <StyledLabel as="label" key={label}>
            <input
              type="checkbox"
              checked={
                state.priceRange &&
                range &&
                state.priceRange[0] === range[0] &&
                state.priceRange[1] === range[1]
                  ? true
                  : false
              }
              onChange={() => handlePriceRangeChange(range)}
            />
            {label}
          </StyledLabel>
        ))}
      </FilterSection>
      <StyledSwitchLabel>
        <input
          type="checkbox"
          checked={state.inStock}
          onChange={() => dispatch({ type: "TOGGLE_IN_STOCK" })}
        />
        Sadece stoktakiler
        <div className="switch"></div>
      </StyledSwitchLabel>
      <FilterSection title="Satıcılar" isOpen={true}>
        {uniqueSellers.map((seller) => (
          <StyledLabel as="label" key={seller}>
            <input
              type="checkbox"
              checked={state.sellers.includes(seller)}
              onChange={() =>
                dispatch({ type: "TOGGLE_SELLER", seller: seller })
              }
            />
            {seller}
          </StyledLabel>
        ))}
      </FilterSection>
    </div>
  );
};
export default Filter;
