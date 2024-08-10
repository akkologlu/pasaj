import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CustomImage from "./CustomImage";
import { StyledCardSwiper } from "@/styles/styled";

type CardSwiperProps = {
  image: string[];
};

const CardSwiper: React.FC<CardSwiperProps> = ({ image }) => {
  return (
    <div>
      <StyledCardSwiper
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet custom-bullet",
          bulletActiveClass:
            "swiper-pagination-bullet-active custom-bullet-active",
        }}
        modules={[Pagination]}
        style={{ height: "200px", width: "100%" }}
        spaceBetween={10}
      >
        {image.map((img, index) => (
          <SwiperSlide key={index}>
            <CustomImage src={img} height={200} alt={"cart image"} />
          </SwiperSlide>
        ))}
      </StyledCardSwiper>
    </div>
  );
};

export default CardSwiper;
