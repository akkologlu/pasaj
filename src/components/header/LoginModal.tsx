import {
  StyledCol,
  StyledContainer,
  StyledFlexEvenly,
  StyledHeader,
  StyledLoginModal,
} from "@/styles/styled";
import CustomImage from "../common/CustomImage";

const LoginModal: React.FC = () => {
  return (
    <StyledLoginModal>
      <StyledContainer>
        <StyledFlexEvenly>
          <StyledCol $sizemd={4}>
            <CustomImage src="/login-image.webp" alt="login" height="200px" />
            <StyledHeader as="h3">
              Turkcell Pasaj’ın fırsatlarla dolu dünyasına hoş geldiniz!
            </StyledHeader>
            <p>
              Turkcell Pasaj’da fırsatlar bitmez! İhtiyacınız olan bir çok
              ürüne, güvenli ve esnek ödeme seçenekleri ile hem de kredi kartı
              limitinize takılmadan sahip olabilirsiniz. Favorilediğiniz ürünler
              için bilgilendirmelerden, siparişlerinizle ilgili tüm işlemlere ve
              daha da fazlasına kolaylıkla erişim sağlayabilirsiniz.
            </p>
          </StyledCol>
          <StyledCol $sizemd={4}>
            <StyledHeader as="h2">Giriş</StyledHeader>
            <p>
              Size özel ödeme avantajları ve size özel tekliflerden faydalanmak
              için Giriş Yap/Üye Ol seçeneği ile devam edebilirsiniz.
            </p>
          </StyledCol>
        </StyledFlexEvenly>
      </StyledContainer>
    </StyledLoginModal>
  );
};

export default LoginModal;
