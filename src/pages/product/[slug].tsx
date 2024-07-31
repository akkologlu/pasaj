import Breadcrumb from "@/components/common/Breadcrumb";
import ProductCard from "@/components/common/card/ProductCard";
import CustomButton from "@/components/common/CustomButton";
import CustomImage from "@/components/common/CustomImage";
import DetailTabs from "@/components/productDetail/DetailTabs";
import OtherSellers from "@/components/productDetail/OtherSellers";
import { addToCart, fetchProduct, fetchUserCart } from "@/lib/api";
import {
  Label,
  OptionWrapper,
  PriceSection,
  StyledBluePrice,
  StyledCol,
  StyledConfigurator,
  StyledContainer,
  StyledCountDown,
  StyledDiv,
  StyledLimitBadge,
  StyledSwiper,
  StyledRow,
  StyledSelect,
  StyledText,
} from "@/styles/styled";
import type { Product } from "@/types/productType";
import { Rating } from "@smastrom/react-rating";
import {
  dehydrate,
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const session = await getSession(context);
  const { slug } = context.params as { slug: string };
  await queryClient.prefetchQuery({
    queryKey: ["product"],
    queryFn: () => fetchProduct(slug),
  });
  // session &&
  //   (await queryClient.prefetchQuery({
  //     queryKey: ["userCart"],
  //     queryFn: () => fetchUserCart(session.user.id),
  //   }));
  return {
    props: { dehydratedState: dehydrate(queryClient), slug, session },
  };
};

const Product = ({ slug, session }: { slug: string; session: any }) => {
  // const queryClient = useQueryClient();
  // const { mutate } = useMutation({
  //   mutationFn: addToCart,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["userCart"] });
  //   },
  // });
  // const { data: cartData } = useQuery({
  //   queryKey: ["userCart"],
  //   queryFn: () => fetchUserCart(session.user.id),
  // });
  // const handleAddCart = (data: Product) => {
  //   if (!session) {
  //     alert("Ürünü sepete eklemek için giriş yapmalısınız");
  //     return;
  //   }
  //   mutate({
  //     userId: session.user.id,
  //     cartData: { ...session.user, cart: [...cartData, data] },
  //   });
  // };
  const { data, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: () => fetchProduct(slug),
  });
  const [selectedOption, setSelectedOption] = useState(2);
  const options = [
    {
      id: 1,
      label: "Alışveriş Kredisi",
      price: data.installmentPrice,
      installmentCount: `TL x ${data.installmentCount} AY`,
      delivery:
        "Kredi sorgulama sonucunuza göre tutarlar değişiklik gösterebilir.",
    },
    {
      id: 2,
      label: "Turkcell Satış A.Ş.",
      price: "66.399 TL",
      oldPrice: data.price,
      discount: "75.499 TL %12 İndirim",
      delivery: "1 iş gününde kargoda",
    },
  ];

  return (
    <>
      <Breadcrumb
        links={[
          {
            name: data.category,
            url: `/products/${data.categoryUrl}`,
          },
          {
            name: data.subcategory,
            url: `/products/${data.subcategoryUrl}`,
          },
          {
            name: data.title,
            url: `/product/${slug}`,
          },
        ]}
      />
      <StyledDiv $padding="5rem 0">
        <StyledContainer>
          <StyledDiv $display="flex" $justify="space-between">
            <StyledCol $sizemd={6}>
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
                {data.images.map((image, index) => (
                  <SwiperSlide style={{ padding: "1rem 2rem" }} key={index}>
                    <CustomImage
                      src={image.url}
                      height={400}
                      alt={image.color}
                    />
                  </SwiperSlide>
                ))}
              </StyledSwiper>
              <StyledLimitBadge
                $padding="0.75rem 2rem"
                $radius="0.5rem"
                $bgcolor="#44b1e5"
                $margin="1rem auto 3rem auto"
              >
                <StyledText $fw="700" $color="#fff" $fs="16px">
                  Ürün alımları {data.limit} adet ile sınırlıdır.
                </StyledText>
              </StyledLimitBadge>
              <StyledText as="h2" $fs="2rem" $fw="700">
                Birlikte Alınanlar
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
                    slidesPerView: 3,
                  },
                }}
                modules={[Navigation]}
                slidesPerView={4}
                navigation
                spaceBetween={10}
              >
                <StyledRow>
                  <SwiperSlide>
                    <ProductCard product={data} size={12} details={false} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductCard product={data} size={12} details={false} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductCard product={data} size={12} details={false} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductCard product={data} size={12} details={false} />
                  </SwiperSlide>
                </StyledRow>
              </StyledSwiper>
            </StyledCol>
            <StyledCol $sizemd={5.75}>
              <StyledConfigurator
                $display="flex"
                $direction="column"
                $gap="1.5rem"
              >
                <StyledText as="h1" $fs="42px" $fw="700">
                  {data.title}
                </StyledText>
                <StyledDiv $display="flex" $align="center" $gap="0.5rem">
                  <Rating
                    style={{ maxWidth: 80 }}
                    value={data.rating}
                    readOnly
                  />
                  <small>{data.rating}</small>
                </StyledDiv>
                <StyledDiv $display="flex" $justify="space-between">
                  <StyledText $fw="700">
                    İndirim bitmesine{" "}
                    <StyledCountDown as="span" $color="#5f6b76" $fs="12px">
                      <span>1</span> Gn <span>10</span> Sa <span>16</span> Dk
                    </StyledCountDown>{" "}
                    kaldı.
                  </StyledText>{" "}
                  <StyledText $fw="700" $color="#eeb116">
                    {data.stock}&apos;dan az ürün kalmıştır.
                  </StyledText>
                </StyledDiv>
                <StyledDiv $display="flex" $justify="space-between" $gap="1rem">
                  {data.configration.map((config, index) => (
                    <StyledSelect $sizemd={5.75} key={index}>
                      <label htmlFor={config.title}>{config.title}</label>
                      <select name={config.title} id={config.title}>
                        {config.options.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </StyledSelect>
                  ))}
                </StyledDiv>
                {options.map((option) => (
                  <OptionWrapper
                    $radius="5px"
                    $display="flex"
                    $justify="space-between"
                    $align="center"
                    $padding="0 0.5rem"
                    $textAlign="center"
                    key={option.id}
                    $selected={selectedOption === option.id}
                    onClick={() => setSelectedOption(option.id)}
                  >
                    <Label $selected={selectedOption === option.id}>
                      <div className="selectRound"></div> {option.label}
                    </Label>
                    <PriceSection $padding="1rem" $textAlign="right">
                      <StyledBluePrice $fs="24px" $color="#2855ac" $fw="700">
                        {option.price.toLocaleString("tr-TR")}{" "}
                        <StyledText as="sup" $fs="0.75rem">
                          {option.installmentCount}
                        </StyledText>
                      </StyledBluePrice>
                      <small>{option.delivery}</small>
                    </PriceSection>
                  </OptionWrapper>
                ))}
                <button>Sepete Ekle</button>
              </StyledConfigurator>
            </StyledCol>
          </StyledDiv>
        </StyledContainer>
        <OtherSellers data={data.otherSellers} />
        <DetailTabs data={data} />
      </StyledDiv>
    </>
  );
};

export default Product;
