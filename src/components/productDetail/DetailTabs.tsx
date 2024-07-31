import { StyledContainer, StyledDiv, StyledSwiper } from "@/styles/styled";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import Description from "./tabs/Description";
import { Product } from "@/types/productType";
import { tabOptions } from "@/lib/mockData";
type DetailTabsProps = {
  data: Product;
};
const DetailTabs: React.FC<DetailTabsProps> = ({ data }) => {
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
            <StyledDiv
              $display="flex"
              $justify="center"
              $align="center"
              $direction="column"
              $textAlign="center"
              $gap="1rem"
            >
              {tab.title}
            </StyledDiv>
          </SwiperSlide>
        ))}
      </StyledSwiper>
      <div>
        {activeTab === "aciklamalar" && <Description desc={data.description} />}
        {activeTab === "degerlendirmeler" && <p>Yorumlar</p>}
        {activeTab === "sorular" && <p>Sorular</p>}
        {activeTab === "kredi-karti-kampanyalari" && (
          <p>Kredi Kartı Kampanyaları</p>
        )}
      </div>
    </StyledContainer>
  );
};

export default DetailTabs;
