import { fetchAllProducts, fetchNavBottomCategories } from "@/lib/api";
import {
  StyledCategoryModal,
  StyledCol,
  StyledContainer,
  StyledFlexBetween,
  StyledNavBottom,
  StyledRow,
} from "@/styles/styled";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductCard from "../common/card/ProductCard";
import { Product } from "@/types/productType";
import { Category } from "@/types/categoryType";

const NavBottom: React.FC = () => {
  const { data: categories } = useQuery({
    queryKey: ["navBottomCategories"],
    queryFn: fetchNavBottomCategories,
  });
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
  });
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(categories[0]);
  const [showProduct, setShowProduct] = useState(categories[0].url);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = products
      .filter(
        (product: Product) =>
          product.categoryUrl === showProduct ||
          product.subcategoryUrl === showProduct
      )
      .slice(0, 2);
    setFilteredProducts(filtered);
  }, [showProduct, products]);

  const handleMouseEnter = (option: any) => {
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
      {showModal && (
        <StyledCategoryModal
          onMouseEnter={() => setShowModal(true)}
          onMouseLeave={() => setShowModal(false)}
        >
          <StyledContainer>
            <StyledFlexBetween>
              <div className="subcategories">
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
                <Link
                  className="viewAll"
                  href={`/products/${modalContent.url}`}
                >
                  Tüm {modalContent.title} &gt;
                </Link>
              </div>
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
            </StyledFlexBetween>
          </StyledContainer>
        </StyledCategoryModal>
      )}
    </>
  );
};

export default NavBottom;
