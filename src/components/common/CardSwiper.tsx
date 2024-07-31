import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CustomImage from "./CustomImage";
import { StyledCardSwiper } from "@/styles/styled";

type ImageType = {
  color: string;
  url: string;
};

type CardSwiperProps = {
  image: ImageType[];
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
        {image.map((img) => (
          <SwiperSlide key={img.color}>
            <CustomImage src={img.url} height={200} alt={img.url} />
          </SwiperSlide>
        ))}
      </StyledCardSwiper>
    </div>
  );
};

export default CardSwiper;
