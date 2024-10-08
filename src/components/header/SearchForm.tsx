import {
  StyledBackdrop,
  StyledCol,
  StyledDiv,
  StyledSwiper,
  StyledSearchBadge,
  StyledSearchForm,
  StyledShowArea,
  StyledText,
  SpaceBetween,
  Flex,
} from "@/styles/styled";
import CustomImage from "../common/CustomImage";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { Product } from "@/types/productType";
import Link from "next/link";
import { useState } from "react";
import { popularSearches, searchBadges } from "@/lib/mockData";
import { useFetchAllProducts } from "@/hooks/useDataFetching";
import { CiSearch } from "react-icons/ci";

const SearchForm = () => {
  const [showSearchArea, setShowSearchArea] = useState(false);
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([]);
  const { data: products } = useFetchAllProducts();

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
        $bgcolor="form"
        $padding="0 1rem"
        $gap="1rem"
        $radius="0.5rem"
        $pos="relative"
      >
        <CiSearch />
        <input
          type="text"
          placeholder="Ürün, marka veya kategori ara"
          onFocus={() => setShowSearchArea(true)}
          onChange={handleSearchChange}
        />
        {showSearchArea && (
          <StyledShowArea $pos="absolute">
            <StyledDiv $bgcolor="form" $padding="1rem">
              <small>Sana Özel Kategoriler</small>
              <SpaceBetween $wrap={true}>
                {searchBadges.map((badge, index) => (
                  <StyledSearchBadge $fs="14px" $margin="1rem 0" key={index}>
                    {badge}
                  </StyledSearchBadge>
                ))}
              </SpaceBetween>
            </StyledDiv>
            <StyledDiv $bgcolor="white" $padding="1rem">
              <small>Popüler Aramalar</small>
              <StyledSwiper
                modules={[Navigation]}
                slidesPerView={5}
                navigation
                spaceBetween={10}
                breakpoints={{
                  0: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  1024: {
                    slidesPerView: 5,
                  },
                }}
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
                    <Link href={`/product/${product.id}`} key={product.id}>
                      <SpaceBetween>
                        <StyledCol $sizemd={9} $sizesm={7}>
                          <Flex>
                            <CustomImage
                              src={product.images[0]}
                              alt={product.title}
                              height={70}
                              width="70px"
                            />
                            <p>{product.title}</p>
                          </Flex>
                        </StyledCol>
                        <StyledCol $sizemd={3} $sizesm={5}>
                          <h3>
                            {product.price - product.discountPrice}{" "}
                            <sup>TL</sup>
                          </h3>
                          {product.discountPrice ? (
                            <StyledText as="h5" $color="grey">
                              <del>{product.price} TL</del>{" "}
                              <StyledText as="small" $color="cyan">
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
