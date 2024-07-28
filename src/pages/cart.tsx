import { getSession, signOut } from "next-auth/react";
import { GetServerSideProps } from "next";

interface CartPageProps {
  user: {
    email: string;
  };
}

const CartPage: React.FC<CartPageProps> = ({ user }) => {
  if (!user) {
    return <p>Access Denied</p>;
  }

  return (
    <div>
      <p>Welcome, {user.email}</p>
      <p>This is the cart page. Only logged-in users can see this.</p>
      <button onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: session.user,
    },
  };
};

export default CartPage;
