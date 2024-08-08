import { StyledSwiper } from "@/styles/styled";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import CustomImage from "../common/CustomImage";
import { Image } from "@/types/productType";
type ImageSwiperProps = {
  images: Image[];
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
      {images.map((image: Image, index: number) => (
        <SwiperSlide style={{ padding: "1rem 2rem" }} key={index}>
          <CustomImage src={image.url} height={400} alt={image.color} />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};

export default ImageSwiper;
