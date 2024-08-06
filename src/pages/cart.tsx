import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { fetchUserCart, addToCart } from "@/lib/api";
import {
  StyledContainer,
  StyledRow,
  StyledCol,
  StyledText,
  StyledDiv,
  FlexCol,
} from "@/styles/styled";
import CartItem from "@/components/cart/CartItem";
import OrderSummary from "@/components/cart/OrderSummary";
import { Cart } from "@/types/cartType";
interface CartPageProps {
  user: {
    email: string;
    id: string;
  };
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session || !session.user || !session.user.id) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
  const queryClient = new QueryClient();
  try {
    await queryClient.prefetchQuery({
      queryKey: ["userCart"],
      queryFn: () => fetchUserCart(session?.user?.id),
    });
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        user: {
          email: session.user.email as string,
          id: session.user.id as string,
        },
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const CartPage: React.FC<CartPageProps> = ({ user }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: ({ userId, cartData }) => addToCart({ userId, cartData }),
    onSuccess: (cartData) => {
      queryClient.setQueryData(["cart"], cartData.cart);
    },
  });

  const {
    data: cart,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: () => fetchUserCart(user.id),
  });

  const handleDelete = async (id: string) => {
    const updatedCart = cart.filter((item: Cart) => item.cartId !== id);
    mutate({
      userId: user.id,
      cartData: updatedCart,
    });
  };

  const updateQuantity = (cartId: string, quantity: number) => {
    const updatedCart = cart.map((item) =>
      item.cartId === cartId ? { ...item, quantity } : item
    );
    const updatedUser = {
      ...user,
      cart: updatedCart,
    };
    mutate({
      userId: user.id,
      cartData: updatedUser,
    });
  };

  if (isLoading) {
    return <p>Loading...</p>;
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
              cart.map((item, index) => (
                <CartItem
                  key={index}
                  item={item}
                  handleDelete={handleDelete}
                  updateQuantity={updateQuantity}
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
