import {
  StyledContainer,
  StyledDiv,
  StyledSwiper,
  StyledRow,
  StyledText,
} from "@/styles/styled";
import OtherSellerCard from "./OtherSellerCard";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
type OtherSellerProps = {
  data: [
    {
      seller: string;
      price: number;
      rating: number;
    }
  ];
};
const OtherSellers: React.FC<OtherSellerProps> = ({ data }) => {
  return (
    <>
      {data?.length > 0 && (
        <StyledDiv $bgcolor="modal" $padding="5rem 0" $margin="3rem 0">
          <StyledContainer>
            <StyledText as="h3" $center="center" $margin="1rem 0">
              Diğer Satıcılar
            </StyledText>
            <StyledSwiper
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              modules={[Navigation]}
              slidesPerView={4}
              navigation
              spaceBetween={10}
            >
              <StyledRow>
                {data?.map((otherSeller, index) => (
                  <SwiperSlide key={index}>
                    <OtherSellerCard
                      rating={otherSeller.rating}
                      storeName={otherSeller.seller}
                      price={otherSeller.price}
                      deliveryTime="1 İş Gününde Kargoda"
                    />
                  </SwiperSlide>
                ))}
              </StyledRow>
            </StyledSwiper>
          </StyledContainer>
        </StyledDiv>
      )}
    </>
  );
};

export default OtherSellers;
