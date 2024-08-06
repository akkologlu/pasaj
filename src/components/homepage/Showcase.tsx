import {
  StyledSwiper,
  StyledRow,
  StyledShowcase,
  StyledText,
} from "@/styles/styled";
import ProductCard from "../common/card/ProductCard";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { Product } from "@/types/productType";
import CustomImage from "../common/CustomImage";

type ShowcaseProps = {
  title: string;
  details?: boolean;
  data: Product[];
  isProductsCard?: boolean;
};
const Showcase: React.FC<ShowcaseProps> = ({
  title,
  data,
  details = true,
  isProductsCard = true,
}) => {
  return (
    <StyledShowcase $padding="5rem 0">
      <h3>{title}</h3>
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
          {data.map((product) => (
            <SwiperSlide key={product.id}>
              {isProductsCard ? (
                <ProductCard product={product} size={12} details={details} />
              ) : (
                <CustomImage
                  src={product.image}
                  alt={product.title}
                  height={420}
                />
              )}
            </SwiperSlide>
          ))}
        </StyledRow>
      </StyledSwiper>
    </StyledShowcase>
  );
};

export default Showcase;
