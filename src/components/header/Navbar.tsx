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
import { useFavStore } from "@/store/FavStore";
import { useEffect } from "react";
import { useFetchFavs, useFetchUserCart } from "@/hooks/useDataFetching";
type NavbarProps = {
  loginModal: boolean;
  setloginModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const Navbar: React.FC<NavbarProps> = ({ loginModal, setloginModal }) => {
  const { data: session } = useSession();
  const { data: cart } = useFetchUserCart(session?.user?.id as string);
  const { setFavs } = useFavStore();
  const { data: favs, isSuccess } = useFetchFavs(session?.user?.id as string);
  useEffect(() => {
    if (isSuccess && favs) {
      setFavs(favs.map((item: any) => item));
    }
  }, [favs]);

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
            bgcolor="white"
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
              <StyledMyAccountModal $pos="absolute" $bgcolor="modal">
                <button onClick={() => signOut({ callbackUrl: "/" })}>
                  Sign Out
                </button>
              </StyledMyAccountModal>
            )}
          </CustomButton>
        </StyledCol>
        <StyledCol $sizemd={1.5}>
          <CustomButton bgcolor="yellow" href="/cart">
            <CustomImage
              src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
              alt="icon"
              height={20}
              width="20px"
            />
            <p>Sepet</p>
            <StyledCartCount
              $bgcolor="red"
              $color="white"
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
