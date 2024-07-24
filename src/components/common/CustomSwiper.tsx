import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CustomImage from "./CustomImage";
import styled from "styled-components";

type ImageType = {
  color: string;
  url: string;
};

type CustomSwiperProps = {
  image: ImageType[];
};
const StyledSwiper = styled(Swiper)`
  .swiper-pagination-bullets {
    background-color: #ecf0f2;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    padding: 2px 5px;
    border-radius: 1rem;
  }
  .swiper-pagination-bullet.custom-bullet {
    background-color: #8e9091;
    width: 9px;
    height: 9px;
    opacity: 1;
  }
  .swiper-pagination-bullet.custom-bullet-active {
    background-color: #253342;
    width: 16px;
  }
`;

const CustomSwiper: React.FC<CustomSwiperProps> = ({ image }) => {
  return (
    <div>
      <StyledSwiper
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet custom-bullet",
          bulletActiveClass:
            "swiper-pagination-bullet-active custom-bullet-active",
        }}
        modules={[Pagination]}
        style={{ height: "200px", width: "100%" }}
      >
        {image.map((img) => (
          <SwiperSlide key={img.color}>
            <CustomImage src={img.url} height="200px" alt={img.url} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </div>
  );
};

export default CustomSwiper;
