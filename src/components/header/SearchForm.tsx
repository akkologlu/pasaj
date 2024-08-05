import {
  StyledBackdrop,
  StyledCol,
  StyledDiv,
  StyledSwiper,
  StyledRow,
  StyledSearchBadge,
  StyledSearchForm,
  StyledShowArea,
  StyledText,
  SpaceBetween,
} from "@/styles/styled";
import CustomImage from "../common/CustomImage";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { Product } from "@/types/productType";
import Link from "next/link";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts } from "@/lib/api";
import { popularSearches } from "@/lib/mockData";

const SearchForm = () => {
  const [showSearchArea, setShowSearchArea] = useState(false);
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([]);
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    if (searchValue.length < 3) {
      setSearchedProducts([]);
      return;
    }
    const res = products.filter((product: Product) =>
      product.title.toLowerCase().includes(searchValue)
    );
    setSearchedProducts(res);
  };

  return (
    <StyledCol $sizemd={7}>
      {showSearchArea && (
        <StyledBackdrop onClick={() => setShowSearchArea(false)} />
      )}

      <StyledSearchForm
        as="form"
        $bgcolor="#eff2f5"
        $padding="0 1rem"
        $gap="1rem"
        $radius="0.5rem"
        $pos="relative"
      >
        <CustomImage
          src={"https://cdn.hugeicons.com/icons/search-01-stroke-rounded.svg"}
          alt="search"
          height={20}
          width="20px"
        />
        <input
          type="text"
          placeholder="Ürün, marka veya kategori ara"
          onFocus={() => setShowSearchArea(true)}
          onChange={handleSearchChange}
        />
        {showSearchArea && (
          <StyledShowArea $pos="absolute">
            <StyledDiv $bgcolor="#eff2f5" $padding="1rem">
              <small>Sana Özel Kategoriler</small>
              <SpaceBetween>
                <StyledSearchBadge $fs="14px" $margin="1rem 0">
                  6 Taksit + 0 Faiz
                </StyledSearchBadge>
                <StyledSearchBadge $fs="14px" $margin="1rem 0">
                  Hediye Çeklerim
                </StyledSearchBadge>
                <StyledSearchBadge $fs="14px" $margin="1rem 0">
                  Faizsiz 25.000 TL
                </StyledSearchBadge>
                <StyledSearchBadge $fs="14px" $margin="1rem 0">
                  Faturaya Ek Telefonlar
                </StyledSearchBadge>
              </SpaceBetween>
            </StyledDiv>
            <StyledDiv $bgcolor="#fff" $padding="1rem">
              <small>Popüler Aramalar</small>
              <StyledSwiper
                modules={[Navigation]}
                slidesPerView={5}
                navigation
                spaceBetween={10}
              >
                {popularSearches.map((cat: { id: number; title: string }) => (
                  <SwiperSlide style={{ padding: "1rem 2rem" }} key={cat.id}>
                    <StyledSearchBadge $fs="14px" $margin="1rem 0">
                      {cat.title}
                    </StyledSearchBadge>
                  </SwiperSlide>
                ))}
              </StyledSwiper>
              <div>
                {searchedProducts.length > 0 &&
                  searchedProducts.slice(0, 5).map((product: Product) => (
                    <Link href="#" key={product.id}>
                      <SpaceBetween>
                        <StyledCol $sizemd={9}>
                          <StyledRow>
                            <CustomImage
                              src={product.images[0].url}
                              alt={product.title}
                              height={70}
                              width="70px"
                            />
                            <StyledText $fs="16px">{product.title}</StyledText>
                          </StyledRow>
                        </StyledCol>
                        <StyledCol $sizemd={3}>
                          <h3>
                            {product.price - product.discountPrice}{" "}
                            <sup>TL</sup>
                          </h3>
                          {product.discountPrice ? (
                            <StyledText as="small" $fs="14px" $color="#5f6b76">
                              <del>{product.price} TL</del>{" "}
                              <StyledText
                                as="small"
                                $color="#00bafc"
                                $fs="11px"
                              >
                                {product.discountPrice} TL İndirim
                              </StyledText>
                            </StyledText>
                          ) : null}
                        </StyledCol>
                      </SpaceBetween>
                    </Link>
                  ))}
              </div>
            </StyledDiv>
          </StyledShowArea>
        )}
      </StyledSearchForm>
    </StyledCol>
  );
};

export default SearchForm;
