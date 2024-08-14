import ProductCard from "@/components/common/card/ProductCard";
import { useFetchFavs } from "@/hooks/useDataFetching";
import { fetchFavs } from "@/lib/api";
import { StyledContainer, StyledRow } from "@/styles/styled";
import { Product } from "@/types/productType";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const session = await getSession(context);
  await queryClient.prefetchQuery({
    queryKey: ["favs"],
    queryFn: () => fetchFavs(session?.user?.id as string),
  });
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      user: {
        email: session?.user.email as string,
        id: session?.user.id as string,
      },
    },
  };
};
type FavoritesProps = {
  user: {
    email: string;
    id: string;
  };
};
const Favorites: React.FC<FavoritesProps> = ({ user }) => {
  const { data } = useFetchFavs(user.id);
  return (
    <StyledContainer>
      <h3>Favorilerim</h3>
      <StyledRow>
        {data?.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
            details={false}
            size={3.75}
          />
        ))}
      </StyledRow>
    </StyledContainer>
  );
};

export default Favorites;
