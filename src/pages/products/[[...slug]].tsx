import { GetServerSideProps } from "next";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/api";
import { Product } from "@/types/productType";
import ProductCard from "@/components/common/card/ProductCard";
import { StyledContainer, StyledRow } from "@/styles/styled";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params as { slug: string[] };
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products", slug],
    queryFn: () => fetchProducts(slug),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      slug,
    },
  };
};

const CategoryPage = ({ slug }: { slug: string[] }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["products", slug],
    queryFn: () => fetchProducts(slug),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <StyledContainer>
      <StyledRow>
        {data.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </StyledRow>
    </StyledContainer>
  );
};

export default CategoryPage;
