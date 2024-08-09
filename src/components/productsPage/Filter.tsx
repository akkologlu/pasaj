import React from "react";
import { useFormContext, Controller, Control } from "react-hook-form";
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
  data: Product[];
  control: Control<FilterState, any>;
}
const Filter: React.FC<FilterProps> = ({ data }) => {
  const { control, getValues, setValue } = useFormContext<FilterState>();
  const brands = data.map((item: Product) => item.brand);
  const uniqueBrands = Array.from(new Set(brands));
  const sellers = data.flatMap((item: Product) =>
    item.otherSellers.map((seller) => seller.seller)
  );
  const uniqueSellers = Array.from(new Set(sellers));
  const handlePriceRangeChange = (range: [number, number] | null) => {
    if (
      getValues("priceRange")?.[0] === range?.[0] &&
      getValues("priceRange")?.[1] === range?.[1]
    ) {
      setValue("priceRange", null);
    } else {
      setValue("priceRange", range);
    }
  };
  return (
    <div>
      <FilterSection title="Markalar" isOpen={true}>
        {uniqueBrands.map((brand) => (
          <StyledLabel as="label" key={brand}>
            <Controller
              name="brands"
              control={control}
              render={({ field }) => (
                <input
                  type="checkbox"
                  checked={field.value.includes(brand)}
                  onChange={() => {
                    if (field.value.includes(brand)) {
                      field.onChange(
                        field.value.filter((b: string) => b !== brand)
                      );
                    } else {
                      field.onChange([...field.value, brand]);
                    }
                  }}
                />
              )}
            />
            {brand}
          </StyledLabel>
        ))}
      </FilterSection>
      <FilterSection title="Sırala">
        {sortOptions.map(({ label, value }) => (
          <StyledRadioLabel as="label" key={value}>
            <Controller
              name="sortBy"
              control={control}
              render={({ field }) => (
                <input
                  type="radio"
                  name="sortBy"
                  checked={field.value === value}
                  onChange={() => field.onChange(value)}
                />
              )}
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
                getValues("priceRange")?.[0] === range[0] &&
                getValues("priceRange")?.[1] === range[1]
              }
              onChange={() => handlePriceRangeChange(range)}
            />
            {label}
          </StyledLabel>
        ))}
      </FilterSection>
      <StyledSwitchLabel>
        <Controller
          name="inStock"
          control={control}
          render={({ field }) => (
            <input
              type="checkbox"
              checked={field.value}
              onChange={() => field.onChange(!field.value)}
            />
          )}
        />
        Sadece stoktakiler
        <div className="switch"></div>
      </StyledSwitchLabel>
      <FilterSection title="Satıcılar" isOpen={true}>
        {uniqueSellers.map((seller) => (
          <StyledLabel as="label" key={seller}>
            <Controller
              name="sellers"
              control={control}
              render={({ field }) => (
                <input
                  type="checkbox"
                  checked={field.value.includes(seller)}
                  onChange={() => {
                    if (field.value.includes(seller)) {
                      field.onChange(
                        field.value.filter((s: string) => s !== seller)
                      );
                    } else {
                      field.onChange([...field.value, seller]);
                    }
                  }}
                />
              )}
            />
            {seller}
          </StyledLabel>
        ))}
      </FilterSection>
    </div>
  );
};

export default Filter;
