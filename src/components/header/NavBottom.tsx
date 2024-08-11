import {
  FlexCol,
  SpaceBetween,
  StyledCategoryModal,
  StyledCol,
  StyledContainer,
  StyledDiv,
  StyledNavBottom,
  StyledNavBottomMobile,
  StyledRow,
  StyledText,
} from "@/styles/styled";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductCard from "../common/card/ProductCard";
import { Product } from "@/types/productType";
import { Category } from "@/types/categoryType";
import {
  useFetchAllProducts,
  useFetchNavBottomCategories,
} from "@/hooks/useDataFetching";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBottom: React.FC = () => {
  const { data: categories = [] } = useFetchNavBottomCategories();
  const { data: products = [] } = useFetchAllProducts();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<Category | null>(null);
  const [showProduct, setShowProduct] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (categories.length > 0) {
      setModalContent(categories[0]);
      setShowProduct(categories[0].url);
    }
  }, [categories]);

  useEffect(() => {
    if (showProduct && products.length > 0) {
      const filtered = products
        .filter(
          (product: Product) =>
            product.categoryUrl === showProduct ||
            product.subcategoryUrl === showProduct
        )
        .slice(0, 2);
      setFilteredProducts(filtered);
    }
  }, [showProduct, products]);

  const handleMouseEnter = (option: Category) => {
    setModalContent(option);
    setShowProduct(option.url);
    setShowModal(true);
  };
  const [showMobile, setShowMobile] = useState(false);
  return (
    <>
      <StyledNavBottom onMouseLeave={() => setShowModal(false)}>
        {categories.map((cat: Category) => (
          <StyledCol
            $sizemd={1}
            $sizesm={3}
            key={cat.title}
            onMouseEnter={() => handleMouseEnter(cat)}
          >
            <Link href={`/products/${cat.url}`}>{cat.title}</Link>
          </StyledCol>
        ))}
      </StyledNavBottom>
      <StyledDiv
        $display="flex"
        $justify="flex-end"
        $margin="1rem 0"
        onClick={() => setShowMobile(!showMobile)}
      >
        <GiHamburgerMenu size={30} color="#ffc900" />
      </StyledDiv>
      <StyledNavBottomMobile
        $gap="1rem"
        $padding="1rem .25rem"
        $active={showMobile}
      >
        {categories.map((cat: Category) => (
          <Link href={`/products/${cat.url}`} key={cat.title}>
            {cat.title}
          </Link>
        ))}
      </StyledNavBottomMobile>
      {showModal && modalContent && (
        <StyledCategoryModal
          $modal={showModal}
          $pos="absolute"
          $bgcolor="modal"
          $padding="4rem"
          onMouseEnter={() => setShowModal(true)}
          onMouseLeave={() => setShowModal(false)}
        >
          <StyledContainer>
            <SpaceBetween>
              <FlexCol $gap="1rem">
                {modalContent.subCategories.map(
                  (cat: { subTitle: string; subUrl: string }) => (
                    <Link
                      href={`/products/${modalContent.url}/${cat.subUrl}`}
                      key={cat.subUrl}
                      onMouseEnter={() => setShowProduct(cat.subUrl)}
                    >
                      {cat.subTitle}
                    </Link>
                  )
                )}
                <Link href={`/products/${modalContent.url}`}>
                  <StyledText $color="blue" $fw="700">
                    Tüm {modalContent.title} &gt;
                  </StyledText>
                </Link>
              </FlexCol>
              <StyledCol $sizemd={6}>
                <StyledRow>
                  {filteredProducts.map((product: Product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      size={5.75}
                    />
                  ))}
                </StyledRow>
              </StyledCol>
            </SpaceBetween>
          </StyledContainer>
        </StyledCategoryModal>
      )}
    </>
  );
};

export default NavBottom;
