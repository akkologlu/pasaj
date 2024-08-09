import React, { useState } from "react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/api";
import { Product } from "@/types/productType";
import ProductCard from "@/components/common/card/ProductCard";
import {
  StyledCol,
  StyledContainer,
  StyledSwiper,
  StyledRow,
  StyledText,
  SpaceBetween,
} from "@/styles/styled";
import Filter from "@/components/productsPage/Filter";
import { Navigation, Pagination } from "swiper/modules";
import { landing } from "@/lib/mockData";
import { SwiperSlide } from "swiper/react";
import CustomImage from "@/components/common/CustomImage";
import Breadcrumb from "@/components/common/Breadcrumb";
import { FilterState } from "@/types/filterType";
import { useFetchProducts } from "@/hooks/useDataFetching";
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params as { slug: string[] };
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["products", slug],
    queryFn: () => fetchProducts(slug),
  });
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      slug,
    },
  };
};
const CategoryPage = ({ slug }: { slug: string[] }) => {
  const { data, isLoading } = useFetchProducts(slug);
  const [filters, setFilters] = useState<FilterState>({
    brands: [],
    priceRange: null,
    inStock: false,
    sellers: [],
    sortBy: "initial",
  });
  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };
  const popularProducts = data.sort(
    (a: Product, b: Product) => b.nofSales - a.nofSales
  );
  const filteredData = data.filter((product: Product) => {
    const matchesBrand =
      !filters.brands.length || filters.brands.includes(product.brand);
    const matchesPriceRange =
      !filters.priceRange ||
      (product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]);
    const matchesStock = !filters.inStock || product.stock > 0;
    const matchesSellers =
      !filters.sellers.length ||
      filters.sellers.some((seller) =>
        product.otherSellers.some(
          (otherSeller) => otherSeller.seller === seller
        )
      );
    return matchesBrand && matchesPriceRange && matchesStock && matchesSellers;
  });
  const sortedData: Product[] = filteredData.sort((a: Product, b: Product) => {
    switch (filters.sortBy) {
      case "lowest_price":
        return a.price - b.price;
      case "highest_price":
        return b.price - a.price;
      case "highest_rating":
        return b.rating - a.rating;
      case "lowest_rating":
        return a.rating - b.rating;
      default:
        return 0;
    }
  });
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Breadcrumb
        links={[
          {
            name: data[0].category,
            url: `/products/${data[0].categoryUrl}`,
          },
          ...(slug.length > 1
            ? [
                {
                  name: data[0].subcategory,
                  url: `/products/${data[0].categoryUrl}/${data[0].subcategoryUrl}`,
                },
              ]
            : []),
        ]}
      />
      <StyledContainer>
        <StyledText as="h2" $center="center">
          {slug.length > 1 ? data[0].subcategory : data[0].category}
        </StyledText>
        <StyledText as="h2" $center="center" $margin="1rem 0">
          Kategorinin En Sevilenleri
        </StyledText>
        <div>
          <StyledSwiper
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            modules={[Navigation]}
            slidesPerView={4}
            navigation
            spaceBetween={10}
          >
            <StyledRow>
              {popularProducts.map((product: Product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} size={12} details={false} />
                </SwiperSlide>
              ))}
            </StyledRow>
          </StyledSwiper>
        </div>
        <SpaceBetween $wrap={true}>
          <StyledCol $sizemd={2.75}>
            <Filter onFilterChange={handleFilterChange} data={data} />
          </StyledCol>
          <StyledCol $sizemd={9}>
            <StyledSwiper
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet custom-bullet",
                bulletActiveClass:
                  "swiper-pagination-bullet-active custom-bullet-active",
              }}
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              navigation
            >
              {landing.map((logo, index) => (
                <SwiperSlide style={{ padding: "1rem 2rem" }} key={index}>
                  <CustomImage src={logo} height={350} alt={logo} />
                </SwiperSlide>
              ))}
            </StyledSwiper>
            <StyledRow>
              {sortedData.map((product: Product) => (
                <ProductCard key={product.id} product={product} size={3.75} />
              ))}
            </StyledRow>
          </StyledCol>
        </SpaceBetween>
      </StyledContainer>
    </>
  );
};

export default CategoryPage;
