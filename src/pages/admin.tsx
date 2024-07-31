import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";

interface AdminProps {
  user: {
    email: string;
    id: string;
  };
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session || !session.user || session.user.email !== "admin@admin.com") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

const Admin: React.FC<AdminProps> = () => {
  return <div>Admin page</div>;
};

export default Admin;
