import { GetServerSideProps } from "next";
import { useFetchAllProducts } from "@/hooks/useDataFetching";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { fetchAllProducts } from "@/lib/api";
import Link from "next/link";
import ProductList from "@/components/admin/ProductList";
import {
  JustifyBetweenAlignCenter,
  StyledContainer,
  StyledPrimaryFormButton,
} from "@/styles/styled";
import Loading from "@/components/common/Loading";
type AdminProps = {
  user: {
    email: string;
    id: string;
  };
};
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
  const { data, isLoading } = useFetchAllProducts();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <StyledContainer>
      <JustifyBetweenAlignCenter $margin="2rem 0">
        <Link href="/admin/questions">Sorulara Git</Link>
        <h2>
          Ürünler <span>({data.length})</span>{" "}
        </h2>
        <Link href="/admin/products/create">
          <StyledPrimaryFormButton as="span">Ürün Ekle</StyledPrimaryFormButton>
        </Link>
      </JustifyBetweenAlignCenter>
      <ProductList products={data} />
    </StyledContainer>
  );
};

export default Admin;
