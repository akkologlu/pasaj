import { StyledDiv, StyledSwiper, StyledText } from "@/styles/styled";
import CustomImage from "../common/CustomImage";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { useFetchPopularCategories } from "@/hooks/useDataFetching";

type PopularCategoriesProps = {
  title: string;
  image: string;
  url: string;
};
const PopularCategories = () => {
  const { data } = useFetchPopularCategories();
  return (
    <StyledDiv $padding="5rem 0 0 0">
      <StyledText as="h2" $fs="24px" $fw="700">
        Popüler Kategoriler
      </StyledText>
      <div>
        <StyledSwiper
          modules={[Navigation]}
          slidesPerView={10}
          breakpoints={{
            0: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 10,
            },
          }}
          navigation
        >
          {data.map((category: PopularCategoriesProps, index: number) => (
            <SwiperSlide key={index} style={{ padding: "1rem " }}>
              <Link href="#">
                <CustomImage
                  src={category.image}
                  alt={category.title}
                  height={88}
                  style={{
                    borderRadius: "50%",
                    boxShadow: "0 0 10px 0 #0000001a",
                  }}
                  imageStyle={{ borderRadius: "50%" }}
                />
                <StyledText $center="center">{category.title}</StyledText>
              </Link>
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </div>
    </StyledDiv>
  );
};

export default PopularCategories;
