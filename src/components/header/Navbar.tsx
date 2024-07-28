import { StyledCartCount, StyledCol, StyledRow } from "@/styles/styled";
import CustomImage from "../common/CustomImage";
import CustomButton from "../common/CustomButton";
import SearchForm from "./SearchForm";
import { useSession, signIn, signOut } from "next-auth/react";
type NavbarProps = {
  loginModal: boolean;
  setLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const Navbar: React.FC<NavbarProps> = ({ loginModal, setLoginModal }) => {
  const { data: session } = useSession();
  return (
    <nav>
      <StyledRow>
        <StyledCol $sizemd={1.25}>
          <CustomImage src="/logo.png" alt="logo" height={45} />
        </StyledCol>
        <SearchForm />

        <StyledCol $sizemd={1.5}>
          <CustomButton
            bgcolor="#fff"
            onclick={() => setLoginModal(!loginModal)}
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
            <StyledCartCount>0</StyledCartCount>
          </CustomButton>
        </StyledCol>
      </StyledRow>
    </nav>
  );
};

export default Navbar;
