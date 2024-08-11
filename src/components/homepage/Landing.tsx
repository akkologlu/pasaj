import { useState } from "react";
import { StyledContainer, BackgroundImage, StyledDiv } from "@/styles/styled";
import { landing } from "@/lib/mockData";
import { Swiper } from "swiper";
import LandingSwiper from "../common/LandingSwiper";
const Landing: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(landing[0]);
  const handleSlideChange = (swiper: Swiper) => {
    setActiveSlide(landing[swiper.activeIndex]);
  };
  return (
    <StyledDiv $pos="relative">
      <StyledContainer>
        <BackgroundImage $src={activeSlide} />
        <LandingSwiper
          landing={landing}
          height={500}
          smheight={200}
          onSlideChange={handleSlideChange}
        />
      </StyledContainer>
    </StyledDiv>
  );
};

export default Landing;
