import React, { useState } from "react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/api";
import { Product } from "@/types/productType";
import ProductCard from "@/components/common/card/ProductCard";
import {
  StyledCol,
  StyledContainer,
  StyledDiv,
  StyledSwiper,
  StyledRow,
  StyledText,
} from "@/styles/styled";
import Filter from "@/components/productsPage/Filter";
import { FilterState } from "@/components/productsPage/FilterReducer";
import { Navigation, Pagination } from "swiper/modules";
import { landing } from "@/lib/mockData";
import { SwiperSlide } from "swiper/react";
import CustomImage from "@/components/common/CustomImage";
import Breadcrumb from "@/components/common/Breadcrumb";
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
  const { data, isLoading } = useQuery({
    queryKey: ["products", slug],
    queryFn: () => fetchProducts(slug),
  });
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
            name: sortedData[0].category,
            url: `/products/${sortedData[0].categoryUrl}`,
          },
          ...(slug.length > 1
            ? [
                {
                  name: sortedData[0].subcategory,
                  url: `/products/${sortedData[0].categoryUrl}/${sortedData[0].subcategoryUrl}`,
                },
              ]
            : []),
        ]}
      />
      <StyledContainer>
        <StyledText as="h2" $fs="32px" $fw="700" $center={true}>
          {slug.length > 1 ? data[0].subcategory : data[0].category}
        </StyledText>
        <StyledText
          as="h2"
          $fs="32px"
          $fw="700"
          $center={true}
          $margin="1rem 0"
        >
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
              <SwiperSlide>
                <ProductCard product={data[0]} size={12} details={false} />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard product={data[0]} size={12} details={false} />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard product={data[0]} size={12} details={false} />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard product={data[0]} size={12} details={false} />
              </SwiperSlide>
            </StyledRow>
          </StyledSwiper>
        </div>
        <StyledDiv $display="flex" $justify="space-between">
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
        </StyledDiv>
      </StyledContainer>
    </>
  );
};

export default CategoryPage;
