import { QueryClient, dehydrate } from "@tanstack/react-query";
import { fetchUserCart } from "@/lib/api";
import {
  StyledContainer,
  StyledRow,
  StyledCol,
  StyledText,
  FlexCol,
} from "@/styles/styled";
import CartItem from "@/components/cart/CartItem";
import OrderSummary from "@/components/cart/OrderSummary";
import useCart from "@/hooks/useCart";
import { Cart } from "@/types/cartType";
import { useFetchUserCart } from "@/hooks/useDataFetching";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Loading from "@/components/common/Loading";
type CartPageProps = {
  user: {
    email: string;
    id: string;
  };
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const session = await getSession(context);
  await queryClient.prefetchQuery({
    queryKey: ["cart"],
    queryFn: () => fetchUserCart(session?.user?.id as string),
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

const CartPage: React.FC<CartPageProps> = ({ user }) => {
  const { data: cart, isLoading } = useFetchUserCart(user.id);
  const { handleUpdateQuantity, handleDelete } = useCart(user.id, cart);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <StyledContainer $padding="0 0 5rem 0">
      <StyledText as="h3" $margin="2rem 0 1rem 0">
        Sepetim
      </StyledText>
      <StyledRow>
        <StyledCol $sizemd={7.75}>
          <FlexCol $gap="1rem">
            {cart.length > 0 ? (
              cart.map((item: Cart) => (
                <CartItem
                  key={item.cartId}
                  item={item}
                  handleDelete={handleDelete}
                  updateQuantity={handleUpdateQuantity}
                />
              ))
            ) : (
              <p>Your cart is empty</p>
            )}
          </FlexCol>
        </StyledCol>
        <StyledCol $sizemd={4}>
          <OrderSummary cart={cart} />
        </StyledCol>
      </StyledRow>
    </StyledContainer>
  );
};

export default CartPage;
