import { StyledRow, StyledSwiper } from "@/styles/styled";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import ProductCard from "../common/card/ProductCard";
import { Product } from "@/types/productType";
type TakenTogetherProps = {
  data: Product;
};
const TakenTogether: React.FC<TakenTogetherProps> = ({ data }) => {
  return (
    <>
      <h2>Birlikte Alınanlar</h2>
      <StyledSwiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Navigation]}
        slidesPerView={4}
        navigation
        spaceBetween={10}
      >
        <StyledRow>
          <SwiperSlide>
            <ProductCard product={data} size={12} details={false} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard product={data} size={12} details={false} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard product={data} size={12} details={false} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard product={data} size={12} details={false} />
          </SwiperSlide>
        </StyledRow>
      </StyledSwiper>
    </>
  );
};

export default TakenTogether;
