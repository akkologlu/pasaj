import { useState } from "react";
import {
  StyledContainer,
  StyledLogoSwiper,
  BackgroundImage,
  StyledRelativeDiv,
} from "@/styles/styled";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import CustomImage from "../common/CustomImage";

const Landing: React.FC = () => {
  const logos = [
    "/landing1.jpeg",
    "/landing2.jpeg",
    "/landing3.jpeg",
    "/landing4.jpeg",
    "/landing5.jpeg",
    "/landing6.jpeg",
    "/landing7.jpeg",
    "/landing8.jpeg",
    "/landing9.jpeg",
    "/landing10.jpeg",
    "/landing11.jpeg",
    "/landing12.jpeg",
    "/landing13.jpeg",
  ];

  const [activeSlide, setActiveSlide] = useState(logos[0]);

  const handleSlideChange = (swiper: any) => {
    setActiveSlide(logos[swiper.activeIndex]);
  };

  return (
    <StyledRelativeDiv>
      <StyledContainer>
        <BackgroundImage $src={activeSlide} />
        <StyledLogoSwiper
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
          {logos.map((logo, index) => (
            <SwiperSlide style={{ padding: "1rem 2rem" }} key={index}>
              <CustomImage src={logo} height={500} alt={logo} />
            </SwiperSlide>
          ))}
        </StyledLogoSwiper>
      </StyledContainer>
    </StyledRelativeDiv>
  );
};

export default Landing;
