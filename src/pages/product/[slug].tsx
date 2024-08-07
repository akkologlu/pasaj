import Breadcrumb from "@/components/common/Breadcrumb";
import ProductCard from "@/components/common/card/ProductCard";
import CustomImage from "@/components/common/CustomImage";
import DetailTabs from "@/components/productDetail/DetailTabs";
import OtherSellers from "@/components/productDetail/OtherSellers";
import useCart from "@/hooks/useCart";
import { useFetchProduct, useFetchUserCart } from "@/hooks/useDataFetching";
import useFavorite from "@/hooks/useFavorite";
import { fetchProduct } from "@/lib/api";
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
  SpaceBetween,
  AlignCenter,
  JustifyBetweenAlignCenter,
  StyledHeartDetail,
} from "@/styles/styled";
import type { Image, Product } from "@/types/productType";
import { Rating } from "@smastrom/react-rating";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
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
  return {
    props: { dehydratedState: dehydrate(queryClient), slug, session },
  };
};

const Product = ({ slug, session }: { slug: string; session: Session }) => {
  const { data } = useFetchProduct(slug);
  const { data: cart } = useFetchUserCart(session.user.id);
  console.log("cart:", data);
  const { handleAddToCart } = useCart(session.user.id, cart);
  const { isFav, handleFav } = useFavorite(data);
  const [selectedOption, setSelectedOption] = useState(2);

  const options = [
    {
      id: 1,
      label: "Alışveriş Kredisi",
      price: data.installmentPrice,
      fullPrice: data.installmentPrice * data.installmentCount,
      installmentCount: `TL x ${data.installmentCount} AY`,
      delivery:
        "Kredi sorgulama sonucunuza göre tutarlar değişiklik gösterebilir.",
    },
    {
      id: 2,
      label: "Turkcell Satış A.Ş.",
      price: data.price - data.discountPrice,
      fullPrice: data.price - data.discountPrice,
      oldPrice: data.price,
      discount: "75.499 TL %12 İndirim",
      delivery: "1 iş gününde kargoda",
    },
  ];
  const defaultOption = options.find((option) => option.id === selectedOption);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      price: defaultOption ? defaultOption.fullPrice : 0,
    },
  });

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
            url: `/products/${data.categoryUrl}/${data.subcategoryUrl}`,
          },
          {
            name: data.title,
            url: `/product/${slug}`,
          },
        ]}
      />
      <StyledDiv $padding="5rem 0">
        <StyledContainer>
          <SpaceBetween>
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
                {data.images.map((image: Image, index: number) => (
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
                $bgcolor="cyan"
                $margin="1rem auto 3rem auto"
              >
                <StyledText $fw="700" $color="white">
                  Ürün alımları {data.limit} adet ile sınırlıdır.
                </StyledText>
              </StyledLimitBadge>
              <h2>Birlikte Alınanlar</h2>
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
                $gap="1.5rem"
                as="form"
                onSubmit={handleSubmit((formData) => {
                  if (!session) {
                    return console.log("Please login first");
                  }
                  handleAddToCart(data, formData);
                })}
              >
                <JustifyBetweenAlignCenter>
                  <h1>{data.title}</h1>{" "}
                  <StyledHeartDetail onClick={handleFav}>
                    {isFav ? (
                      <FaHeart size={30} color="#ffc900" />
                    ) : (
                      <CiHeart size={36} color="#ffc900" />
                    )}
                  </StyledHeartDetail>
                </JustifyBetweenAlignCenter>

                <AlignCenter $gap="0.5rem">
                  <Rating
                    style={{ maxWidth: 80 }}
                    value={data.rating}
                    readOnly
                  />
                  <small>{data.rating}</small>
                </AlignCenter>
                <SpaceBetween>
                  <StyledText $fw="700">
                    İndirim bitmesine{" "}
                    <StyledCountDown as="span" $color="grey" $fs=".85rem">
                      <span>1</span> Gn <span>10</span> Sa <span>16</span> Dk
                    </StyledCountDown>{" "}
                    kaldı.
                  </StyledText>{" "}
                  <StyledText $fw="700" $color="yellow">
                    {data.stock}&apos;dan az ürün kalmıştır.
                  </StyledText>
                </SpaceBetween>
                <SpaceBetween $gap="1rem">
                  {data.configration.map((config: any, index: number) => (
                    <StyledSelect $sizemd={5.75} key={index}>
                      <label htmlFor={config.title}>{config.title}</label>
                      <select
                        {...register(config.title)}
                        name={config.title}
                        id={config.title}
                      >
                        {config.options.map((option: any, index: number) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </StyledSelect>
                  ))}
                </SpaceBetween>
                {options.map((option) => (
                  <OptionWrapper
                    $radius="5px"
                    $padding="0 0.5rem"
                    $textAlign="center"
                    key={option.id}
                    $selected={selectedOption === option.id}
                    onClick={() => {
                      setSelectedOption(option.id);
                      setValue("price", option.fullPrice);
                    }}
                  >
                    <Label $selected={selectedOption === option.id}>
                      <div className="selectRound"></div> {option.label}
                    </Label>
                    <PriceSection $padding="1rem" $textAlign="right">
                      <StyledBluePrice as="h3" $color="blue">
                        {option.price.toLocaleString("tr-TR")}{" "}
                        <StyledText as="sup" $fs="0.75rem">
                          {option.installmentCount}
                        </StyledText>
                      </StyledBluePrice>
                      <small>{option.delivery}</small>
                    </PriceSection>
                  </OptionWrapper>
                ))}
                <button type="submit">Sepete Ekle</button>
              </StyledConfigurator>
            </StyledCol>
          </SpaceBetween>
        </StyledContainer>
        <OtherSellers data={data.otherSellers} />
        <DetailTabs data={data} />
      </StyledDiv>
    </>
  );
};

export default Product;
