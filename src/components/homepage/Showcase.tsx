import {
  StyledHeader,
  StyledLogoSwiper,
  StyledRow,
  StyledShowcase,
} from "@/styles/styled";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../common/card/ProductCard";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { Product } from "@/types/productType";
import CustomImage from "../common/CustomImage";

type ShowcaseProps = {
  title: string;
  // queryKey: string;
  // queryFn: () => void;
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
  // const { data } = useQuery({
  //   queryKey: [queryKey],
  //   queryFn: queryFn,
  // });
  return (
    <StyledShowcase>
      <StyledHeader as="h1">{title}</StyledHeader>
      <StyledLogoSwiper modules={[Navigation]} slidesPerView={4} navigation>
        <StyledRow>
          {data.map((product) => (
            <SwiperSlide key={product.id}>
              {isProductsCard ? (
                <ProductCard product={product} size={12} details={details} />
              ) : (
                <CustomImage
                  src={product.image}
                  alt={product.title}
                  height="420px"
                />
              )}
            </SwiperSlide>
          ))}
        </StyledRow>
      </StyledLogoSwiper>
    </StyledShowcase>
  );
};

export default Showcase;
