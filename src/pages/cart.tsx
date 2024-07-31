import { getSession, signOut } from "next-auth/react";
import { GetServerSideProps } from "next";
import { useQuery, QueryClient, dehydrate } from "@tanstack/react-query";
import { fetchUserCart } from "@/lib/api";
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
  const {
    data: cart,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["userCart"],
    queryFn: () => fetchUserCart(user.id),
  });

  if (!user) {
    return <p>Access Denied</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading cart</p>;
  }

  return (
    <div>
      <p>Welcome, {user.email}</p>
      <p>This is the cart page. Only logged-in users can see this.</p>
      <button onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</button>
      <div>
        <h2>Your Cart</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
