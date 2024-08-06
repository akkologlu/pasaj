import { fetchAllProducts, fetchNavBottomCategories } from "@/lib/api";
import {
  FlexCol,
  SpaceBetween,
  StyledCategoryModal,
  StyledCol,
  StyledContainer,
  StyledNavBottom,
  StyledRow,
  StyledText,
} from "@/styles/styled";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductCard from "../common/card/ProductCard";
import { Product } from "@/types/productType";
import { Category } from "@/types/categoryType";

const NavBottom: React.FC = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["navBottomCategories"],
    queryFn: fetchNavBottomCategories,
  });
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
  });
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

  return (
    <>
      <StyledNavBottom>
        {categories.map((cat: Category) => (
          <StyledCol
            $sizemd={1}
            key={cat.title}
            onMouseEnter={() => handleMouseEnter(cat)}
          >
            <Link href={`/products/${cat.url}`}>{cat.title}</Link>
          </StyledCol>
        ))}
      </StyledNavBottom>
      {showModal && modalContent && (
        <StyledCategoryModal
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
