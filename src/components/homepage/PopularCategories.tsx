import { fetchPopularCategories } from "@/lib/api";
import {
  StyledCenterText,
  StyledCol,
  StyledHeader,
  StyledList,
  StyledLogoSwiper,
  StyledSection,
} from "@/styles/styled";
import { useQuery } from "@tanstack/react-query";
import CustomImage from "../common/CustomImage";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

type PopularCategoriesProps = {
  title: string;
  image: string;
  url: string;
};
const PopularCategories = () => {
  const { data } = useQuery({
    queryKey: ["popularCategories"],
    queryFn: fetchPopularCategories,
  });
  return (
    <StyledSection>
      <StyledHeader as="h1">Popüler Kategoriler</StyledHeader>
      <div>
        <StyledLogoSwiper
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
                <StyledCenterText as="p">{category.title}</StyledCenterText>
              </Link>
            </SwiperSlide>
          ))}
        </StyledLogoSwiper>
      </div>
    </StyledSection>
  );
};

export default PopularCategories;
