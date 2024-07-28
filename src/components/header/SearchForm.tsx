import {
  StyledBackdrop,
  StyledCol,
  StyledFlexBetween,
  StyledLogoSwiper,
  StyledRow,
  StyledSearchBadge,
  StyledSearchForm,
  StyledShowArea,
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

      <StyledSearchForm>
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
          <StyledShowArea>
            <div className="sanaOzel">
              <small>Sana Özel Kategoriler</small>
              <StyledFlexBetween>
                <StyledSearchBadge>6 Taksit + 0 Faiz</StyledSearchBadge>
                <StyledSearchBadge>Hediye Çeklerim</StyledSearchBadge>
                <StyledSearchBadge>Faizsiz 25.000 TL</StyledSearchBadge>
                <StyledSearchBadge>Faturaya Ek Telefonlar</StyledSearchBadge>
              </StyledFlexBetween>
            </div>
            <div className="searches">
              <small>Popüler Aramalar</small>
              <StyledLogoSwiper
                modules={[Navigation]}
                slidesPerView={5}
                navigation
              >
                {popularSearches.map((cat: { id: number; title: string }) => (
                  <SwiperSlide style={{ padding: "1rem 2rem" }} key={cat.id}>
                    <StyledSearchBadge>
                      <p>{cat.title}</p>
                    </StyledSearchBadge>
                  </SwiperSlide>
                ))}
              </StyledLogoSwiper>
              <div>
                {searchedProducts.length > 0 &&
                  searchedProducts.slice(0, 5).map((product: Product) => (
                    <Link href="#" key={product.id}>
                      <StyledFlexBetween>
                        <StyledRow>
                          <CustomImage
                            src={product.images[0].url}
                            alt={product.title}
                            height={70}
                            width="70px"
                          />
                          <p>{product.title}</p>
                        </StyledRow>
                        <StyledCol $sizemd={3}>
                          <h3>
                            {product.price - product.discountPrice}{" "}
                            <sup>TL</sup>
                          </h3>
                          {product.discountPrice ? (
                            <small>
                              <del>{product.price} TL</del>{" "}
                              <small>{product.discountPrice} TL İndirim</small>
                            </small>
                          ) : null}
                        </StyledCol>
                      </StyledFlexBetween>
                    </Link>
                  ))}
              </div>
            </div>
          </StyledShowArea>
        )}
      </StyledSearchForm>
    </StyledCol>
  );
};

export default SearchForm;
