import { FullCenterCol, StyledContainer, StyledSwiper } from "@/styles/styled";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import Description from "./tabs/Description";
import { Product } from "@/types/productType";
import { tabOptions } from "@/lib/mockData";
import Reviews from "./tabs/Reviews";
import { useSession } from "next-auth/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct } from "@/lib/api";
import Questions from "./tabs/Questions";
import Specifications from "./tabs/Specifications";
type DetailTabsProps = {
  data: Product;
};
const DetailTabs: React.FC<DetailTabsProps> = ({ data }) => {
  const queryClient = useQueryClient();
  const session = useSession();
  const [activeTab, setActiveTab] = useState(tabOptions[0].url);

  const { mutate } = useMutation({
    mutationFn: ({ id, data }: { id: string | number; data: Product }) =>
      updateProduct({ id, data }),
    onSuccess: () => {
      queryClient.invalidateQueries(["product"]);
    },
  });
  const handleAddNewComment = (newComment: {
    rating: number;
    comment: string;
  }) => {
    const newComments = [
      ...data.comments,
      {
        id: crypto.randomUUID(),
        name: session?.data?.user?.email,
        date: new Date().toISOString(),
        ...newComment,
      },
    ];
    const updatedProduct = { ...data, comments: newComments };
    mutate({ id: data.id, data: updatedProduct });
  };
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
            handleAddNewComment={handleAddNewComment}
          />
        )}
        {activeTab === "sorular" && <Questions qas={data.qa} />}
        {activeTab === "urun-ozellikleri" && (
          <Specifications specs={data.specifications} />
        )}
      </div>
    </StyledContainer>
  );
};

export default DetailTabs;
