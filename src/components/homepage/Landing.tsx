import { useState } from "react";
import {
  StyledContainer,
  StyledSwiper,
  BackgroundImage,
  StyledDiv,
} from "@/styles/styled";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import CustomImage from "../common/CustomImage";
import { landing } from "@/lib/mockData";
import { Swiper } from "swiper";
const Landing: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(landing[0]);
  const handleSlideChange = (swiper: Swiper) => {
    setActiveSlide(landing[swiper.activeIndex]);
  };
  return (
    <StyledDiv $pos="relative">
      <StyledContainer>
        <BackgroundImage $src={activeSlide} />
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
          onSlideChange={handleSlideChange}
        >
          {landing.map((logo, index) => (
            <SwiperSlide style={{ padding: "1rem 2rem" }} key={index}>
              <CustomImage src={logo} height={500} alt={logo} />
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </StyledContainer>
    </StyledDiv>
  );
};

export default Landing;
