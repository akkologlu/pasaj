import {
  StyledCol,
  StyledDiv,
  StyledSwiper,
  StyledRow,
  StyledText,
  FullCenterCol,
} from "@/styles/styled";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import CustomImage from "../common/CustomImage";
import { useState } from "react";
import ProductCard from "../common/card/ProductCard";
import { Product } from "@/types/productType";
import {
  useFetchAllProducts,
  useFetchBestSellersCategories,
} from "@/hooks/useDataFetching";

const BestSellers = () => {
  const { data: products } = useFetchAllProducts();
  const { data: bestSellers } = useFetchBestSellersCategories();
  const [activeTab, setActiveTab] = useState(bestSellers[0].productUrl);
  return (
    <StyledDiv $padding="5rem 0">
      <h2>Çok Satanlar</h2>
      <StyledSwiper
        modules={[Navigation]}
        slidesPerView={7}
        navigation
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 7,
          },
        }}
      >
        {bestSellers.map(
          (cat: {
            id: number;
            title: string;
            productUrl: string;
            image: string;
          }) => (
            <SwiperSlide
              onClick={() => setActiveTab(cat.productUrl)}
              style={{ padding: "1rem 2rem" }}
              key={cat.id}
            >
              <FullCenterCol $textAlign="center" $gap="1rem">
                <CustomImage src={cat.image} alt={cat.title} height={30} />
                <StyledText $center="center">{cat.title}</StyledText>
              </FullCenterCol>
            </SwiperSlide>
          )
        )}
      </StyledSwiper>
      <StyledRow>
        {products
          .filter((product: Product) => product.categoryUrl === activeTab)
          .slice(0, 8)
          .map((product: Product) => (
            <StyledCol key={product.id} $sizemd={3}>
              <ProductCard product={product} size={12} />
            </StyledCol>
          ))}
      </StyledRow>
    </StyledDiv>
  );
};

export default BestSellers;
