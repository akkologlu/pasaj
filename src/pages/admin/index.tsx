import { GetServerSideProps } from "next";
import { useFetchAllProducts } from "@/hooks/useDataFetching";
import {
  dehydrate,
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { deleteProduct, fetchAllProducts } from "@/lib/api";
import Link from "next/link";
import ProductList from "@/components/admin/ProductList";
import {
  JustifyBetweenAlignCenter,
  StyledContainer,
  StyledPrimaryFormButton,
} from "@/styles/styled";
import toast from "react-hot-toast";

interface AdminProps {
  user: {
    email: string;
    id: string;
  };
}
export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: () => fetchAllProducts(),
  });
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Admin: React.FC<AdminProps> = () => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useFetchAllProducts();
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
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <StyledContainer>
      <JustifyBetweenAlignCenter $margin="2rem 0">
        <h2>
          Ürünler <span>({data.length})</span>{" "}
        </h2>
        <Link href="/admin/products/create">
          <StyledPrimaryFormButton as="span">Ürün Ekle</StyledPrimaryFormButton>
        </Link>
      </JustifyBetweenAlignCenter>
      <ProductList products={data} onDelete={deleteMutation} />
    </StyledContainer>
  );
};

export default Admin;
