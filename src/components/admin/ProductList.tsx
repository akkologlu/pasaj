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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "@/lib/api";
import toast from "react-hot-toast";

type ProductListProps = {
  products: Product[];
};
const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const queryClient = useQueryClient();
  const { mutate: deleteMutation } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Ürün başarıyla silindi");
    },
    onError: () => {
      toast.error("Ürün silinirken bir hata oluştu");
    },
  });
  return (
    <FlexCol as="ul" $gap="1.5rem" $margin="0 0 3rem 0">
      {products.map((product) => (
        <StyledAdminList as="li" key={product.id} $wrap={true}>
          <StyledCol $sizemd={1}>
            <CustomImage
              src={product.images?.[0]}
              alt={product.title}
              height={70}
            />
          </StyledCol>
          <StyledCol $sizemd={3}>
            <h4>{product.title}</h4>
          </StyledCol>
          <StyledCol $sizemd={1}>
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
            <StyledPrimaryFormButton onClick={() => deleteMutation(product.id)}>
              Sil
            </StyledPrimaryFormButton>
          </StyledCol>
        </StyledAdminList>
      ))}
    </FlexCol>
  );
};

export default ProductList;
