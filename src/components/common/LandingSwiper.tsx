import { StyledSwiper } from "@/styles/styled";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import CustomImage from "./CustomImage";
import Swiper from "swiper";
type LandingSwiperProps = {
  landing: string[];
  height: number;
  onSlideChange?: (swiper: Swiper) => void;
};
const LandingSwiper: React.FC<LandingSwiperProps> = ({
  landing,
  height,
  onSlideChange,
}) => {
  return (
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
      onSlideChange={onSlideChange}
    >
      {landing.map((logo, index) => (
        <SwiperSlide style={{ padding: "1rem 2rem" }} key={index}>
          <CustomImage src={logo} height={height} alt={logo} />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};

export default LandingSwiper;
