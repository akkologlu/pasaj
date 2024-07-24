import {
  StyledCartCount,
  StyledCol,
  StyledRow,
  StyledSearchForm,
} from "@/styles/styled";
import CustomImage from "../common/CustomImage";
import CustomButton from "../common/CustomButton";

const Navbar = () => {
  return (
    <nav>
      <StyledRow>
        <StyledCol $sizemd={1.25}>
          <CustomImage src="/logo.png" alt="logo" height="45px" />
        </StyledCol>
        <StyledCol $sizemd={7}>
          <StyledSearchForm>
            <CustomImage
              src={
                "https://cdn.hugeicons.com/icons/search-01-stroke-rounded.svg"
              }
              alt="search"
              height="20px"
              width="20px"
            />
            <input type="text" placeholder="Ürün, marka veya kategori ara" />
          </StyledSearchForm>
        </StyledCol>
        <StyledCol $sizemd={1.5}>
          <CustomButton bgcolor="#fff">
            <CustomImage
              src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
              alt="icon"
              height="20px"
              width="20px"
            />
            <p>Giriş Yap</p>
            <CustomImage
              src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"
              alt="icon"
              height="14px"
              width="14px"
            />
          </CustomButton>
        </StyledCol>
        <StyledCol $sizemd={1.5}>
          <CustomButton bgcolor="#FFC900">
            <CustomImage
              src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
              alt="icon"
              height="20px"
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
