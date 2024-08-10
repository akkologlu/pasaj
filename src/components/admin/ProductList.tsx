import {
  FlexCol,
  StyledAdminList,
  StyledCol,
  StyledPrimaryFormButton,
  StyledSecondaryFormButton,
  StyledYellowButton,
} from "@/styles/styled";
import { Product } from "@/types/productType";
import Link from "next/link";
import CustomImage from "../common/CustomImage";

type ProductListProps = {
  products: Product[];
  onDelete: (id: number | string) => void;
};
const ProductList: React.FC<ProductListProps> = ({ products, onDelete }) => (
  <FlexCol as="ul" $gap="1.5rem">
    {products.map((product) => (
      <StyledAdminList as="li" key={product.id}>
        <StyledCol $sizemd={1}>
          <CustomImage
            src={product.images[0]}
            alt={product.title}
            height={70}
          />
        </StyledCol>
        <StyledCol $sizemd={2}>
          <h4>{product.title}</h4>
        </StyledCol>
        <StyledCol $sizemd={2}>
          <p>{product.category}</p>
        </StyledCol>
        <StyledCol $sizemd={2}>
          <p>{product.subcategory}</p>
        </StyledCol>
        <StyledCol $sizemd={1}>
          <StyledSecondaryFormButton>
            <Link href={`/product/${product.id}`}>Ürüne Git</Link>
          </StyledSecondaryFormButton>
        </StyledCol>
        <StyledCol $sizemd={1}>
          <StyledYellowButton>
            <Link href={`/admin/products/edit/${product.id}`}>Düzenle</Link>
          </StyledYellowButton>
        </StyledCol>
        <StyledCol $sizemd={1}>
          <StyledPrimaryFormButton onClick={() => onDelete(product.id)}>
            Sil
          </StyledPrimaryFormButton>
        </StyledCol>
      </StyledAdminList>
    ))}
  </FlexCol>
);

export default ProductList;
