import { fetchAllProducts, fetchBestSellersCategories } from "@/lib/api";
import {
  StyledCol,
  StyledDiv,
  StyledSwiper,
  StyledRow,
  StyledText,
} from "@/styles/styled";
import { useQuery } from "@tanstack/react-query";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import CustomImage from "../common/CustomImage";
import { useState } from "react";
import ProductCard from "../common/card/ProductCard";
import { Product } from "@/types/productType";

const BestSellers = () => {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
  });

  const { data: bestSellers } = useQuery({
    queryKey: ["bestSellersCategories"],
    queryFn: fetchBestSellersCategories,
  });
  const [activeTab, setActiveTab] = useState(bestSellers[0].productUrl);
  return (
    <StyledDiv $padding="5rem 0">
      <StyledText as="h2" $fs="2rem" $fw="700">
        Çok Satanlar
      </StyledText>
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
              <StyledDiv
                $display="flex"
                $justify="center"
                $align="center"
                $direction="column"
                $textAlign="center"
                $gap="1rem"
              >
                <CustomImage src={cat.image} alt={cat.title} height={30} />
                <StyledText $center={true}>{cat.title}</StyledText>
              </StyledDiv>
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
