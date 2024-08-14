import { FullCenterCol, StyledContainer, StyledSwiper } from "@/styles/styled";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import Description from "./tabs/Description";
import { Product, Seller } from "@/types/productType";
import { tabOptions } from "@/lib/mockData";
import Reviews from "./tabs/Reviews";
import Questions from "./tabs/Questions";
import Specifications from "./tabs/Specifications";
type DetailTabsProps = {
  data: Product;
  otherSellers: Seller[];
  seller: string;
};
const DetailTabs: React.FC<DetailTabsProps> = ({
  data,
  seller,
  otherSellers,
}) => {
  const [activeTab, setActiveTab] = useState(tabOptions[0].url);
  return (
    <StyledContainer>
      <StyledSwiper
        modules={[Navigation]}
        style={{
          borderTop: "1px solid #e0e0e0",
          borderBottom: "1px solid #e0e0e0",
        }}
        slidesPerView={7}
        navigation
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {tabOptions.map((tab: { id: number; title: string; url: string }) => (
          <SwiperSlide
            onClick={() => setActiveTab(tab.url)}
            style={{
              color: activeTab === tab.url ? "blue" : "inherit",
              borderBottom: activeTab === tab.url ? "1px solid blue" : "none",
              padding: "1rem",
              cursor: "pointer",
            }}
            key={tab.id}
          >
            <FullCenterCol $textAlign="center" $gap="1rem">
              {tab.title}
            </FullCenterCol>
          </SwiperSlide>
        ))}
      </StyledSwiper>
      <div>
        {activeTab === "aciklamalar" && <Description desc={data.description} />}
        {activeTab === "degerlendirmeler" && (
          <Reviews
            reviews={data.comments}
            onRating={data.rating}
            onId={data.id}
          />
        )}
        {activeTab === "sorular" && (
          <Questions
            qas={data.qa}
            seller={seller}
            otherSellers={otherSellers}
            id={data.id}
          />
        )}
        {activeTab === "urun-ozellikleri" && (
          <Specifications specs={data.specifications} />
        )}
      </div>
    </StyledContainer>
  );
};

export default DetailTabs;
