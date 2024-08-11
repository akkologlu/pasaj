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
import { FaRegUserCircle } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { Fav } from "@/types/cartType";
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
      setFavs(favs.map((item: Fav) => item));
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
            <FaRegUserCircle size={20} />
            <p>{session ? "Hesabım" : "Giriş Yap"}</p>
            <IoIosArrowDown />
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
            <BsCart4 size={20} />
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
