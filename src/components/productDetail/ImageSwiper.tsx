import { StyledSwiper } from "@/styles/styled";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import CustomImage from "../common/CustomImage";
type ImageSwiperProps = {
  images: string[];
};
const ImageSwiper: React.FC<ImageSwiperProps> = ({ images }) => {
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
    >
      {images.map((image: string, index: number) => (
        <SwiperSlide style={{ padding: "1rem 2rem" }} key={index}>
          <CustomImage src={image} height={400} alt="image" />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};

export default ImageSwiper;
