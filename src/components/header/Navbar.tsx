import {
  StyledCartCount,
  StyledCol,
  StyledMyAccountModal,
  StyledRow,
} from "@/styles/styled";
import CustomImage from "../common/CustomImage";
import CustomButton from "../common/CustomButton";
import SearchForm from "./SearchForm";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { fetchUserCart } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
type NavbarProps = {
  loginModal: boolean;
  setloginModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const Navbar: React.FC<NavbarProps> = ({ loginModal, setloginModal }) => {
  const { data: session } = useSession();
  const { data: cart } = useQuery({
    queryKey: ["cart"],
    queryFn: () => fetchUserCart(session?.user?.id as string),
    enabled: !!session,
  });
  return (
    <nav>
      <StyledRow>
        <StyledCol $sizemd={1.25}>
          <Link href="/">
            <CustomImage src="/logo.png" alt="logo" height={45} />
          </Link>
        </StyledCol>
        <SearchForm />

        <StyledCol $sizemd={1.5}>
          <CustomButton
            bgcolor="#fff"
            onclick={() => setloginModal(!loginModal)}
          >
            <CustomImage
              src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
              alt="icon"
              height={20}
              width="20px"
            />
            <p>{session ? "Hesabım" : "Giriş Yap"}</p>

            <CustomImage
              src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"
              alt="icon"
              height={14}
              width="14px"
            />
            {session && loginModal && (
              <StyledMyAccountModal $pos="absolute" $bgcolor="#f6f5f8">
                <button onClick={() => signOut({ callbackUrl: "/" })}>
                  Sign Out
                </button>
              </StyledMyAccountModal>
            )}
          </CustomButton>
        </StyledCol>
        <StyledCol $sizemd={1.5}>
          <CustomButton bgcolor="#FFC900" href="/cart">
            <CustomImage
              src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
              alt="icon"
              height={20}
              width="20px"
            />
            <p>Sepet</p>
            <StyledCartCount
              $bgcolor="#ed6060"
              $color="#fff"
              $radius="50%"
              $pos="absolute"
            >
              {cart?.length ? cart.length : 0}
            </StyledCartCount>
          </CustomButton>
        </StyledCol>
      </StyledRow>
    </nav>
  );
};

export default Navbar;
