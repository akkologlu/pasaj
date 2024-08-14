import React from "react";
import {
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { Product } from "@/types/productType";
import FilterSection from "./FilterSection";
import {
  StyledLabel,
  StyledRadioLabel,
  StyledSwitchLabel,
} from "@/styles/styled";
import { priceRanges, sortOptions } from "@/lib/mockData";
import { FilterState } from "@/types/filterType";
import Link from "next/link";

type FilterProps = {
  data: Product[];
  register: UseFormRegister<FilterState>;
  setValue: UseFormSetValue<FilterState>;
  getValues: UseFormGetValues<FilterState>;
  watch: UseFormWatch<FilterState>;
};

const Filter: React.FC<FilterProps> = ({
  data,
  register,
  watch,
  getValues,
  setValue,
}) => {
  const brands = data.map((item: Product) => item.brand);
  const uniqueBrands = Array.from(new Set(brands));
  const subcategories = data.map((item: Product) => item.subcategory);
  const uniqueSubcategories = Array.from(new Set(subcategories));
  const subCategoryUrl = data.map((item: Product) => item.subcategoryUrl);
  const uniqueSubCategoryUrl = Array.from(new Set(subCategoryUrl));
  const sellers = data.flatMap((item: Product) =>
    item.otherSellers
      ? item.otherSellers
          .map((seller) => seller.seller)
          .filter((seller) => seller !== undefined && seller !== null)
      : []
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

  const selectedBrands = watch("brands");
  const selectedSortBy = watch("sortBy");
  const selectedInStock = watch("inStock");
  const selectedSellers = watch("sellers");

  return (
    <div>
      <FilterSection title={data[0].category} isOpen={true}>
        {uniqueSubcategories.map((subcategory, index) => (
          <Link
            key={subcategory}
            href={`/products/${data[0].categoryUrl}/${uniqueSubCategoryUrl[index]}`}
          >
            {subcategory} &gt;
          </Link>
        ))}
      </FilterSection>
      <FilterSection title="Markalar" isOpen={true}>
        {uniqueBrands.map((brand) => (
          <StyledLabel as="label" key={brand}>
            <input
              type="checkbox"
              value={brand}
              {...register("brands")}
              checked={selectedBrands.includes(brand)}
              onChange={() => {
                const valueArray = selectedBrands.includes(brand)
                  ? selectedBrands.filter((b) => b !== brand)
                  : [...selectedBrands, brand];
                setValue("brands", valueArray);
              }}
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
              value={value}
              {...register("sortBy")}
              checked={selectedSortBy === value}
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
        <input
          type="checkbox"
          {...register("inStock")}
          checked={selectedInStock}
          onChange={() => setValue("inStock", !selectedInStock)}
        />
        Sadece stoktakiler
        <div className="switch"></div>
      </StyledSwitchLabel>

      <FilterSection title="Satıcılar" isOpen={true}>
        {uniqueSellers.map((seller) => (
          <StyledLabel as="label" key={seller}>
            <input
              type="checkbox"
              value={seller}
              {...register("sellers")}
              checked={selectedSellers.includes(seller)}
              onChange={() => {
                const valueArray = selectedSellers.includes(seller)
                  ? selectedSellers.filter((s) => s !== seller)
                  : [...selectedSellers, seller];
                setValue("sellers", valueArray);
              }}
            />
            {seller}
          </StyledLabel>
        ))}
      </FilterSection>
    </div>
  );
};

export default Filter;
