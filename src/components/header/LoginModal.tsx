import {
  SpaceEvenly,
  StyledCol,
  StyledContainer,
  StyledDiv,
  StyledLoginModal,
  StyledText,
} from "@/styles/styled";
import CustomImage from "../common/CustomImage";
import Link from "next/link";
type LoginModalProps = {
  setloginModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const LoginModal: React.FC<LoginModalProps> = ({ setloginModal }) => {
  return (
    <StyledLoginModal $pos="absolute" $bgcolor="#f6f5f8" $padding="4rem">
      <StyledContainer>
        <SpaceEvenly>
          <StyledCol $sizemd={4}>
            <CustomImage src="/login-image.webp" alt="login" height={200} />
            <StyledText as="h3" $fs="24px">
              Turkcell Pasaj’ın fırsatlarla dolu dünyasına hoş geldiniz!
            </StyledText>
            <StyledText $fs="14px">
              Turkcell Pasaj’da fırsatlar bitmez! İhtiyacınız olan bir çok
              ürüne, güvenli ve esnek ödeme seçenekleri ile hem de kredi kartı
              limitinize takılmadan sahip olabilirsiniz. Favorilediğiniz ürünler
              için bilgilendirmelerden, siparişlerinizle ilgili tüm işlemlere ve
              daha da fazlasına kolaylıkla erişim sağlayabilirsiniz.
            </StyledText>
          </StyledCol>
          <StyledCol $sizemd={4}>
            <StyledText $fs="2rem" as="h2">
              Giriş
            </StyledText>
            <StyledText $fs="14px">
              Size özel ödeme avantajları ve size özel tekliflerden faydalanmak
              için Giriş Yap/Üye Ol seçeneği ile devam edebilirsiniz.
            </StyledText>
            <Link href="/signin" onClick={() => setloginModal(false)}>
              Giriş Yap / Üye Ol
            </Link>
          </StyledCol>
        </SpaceEvenly>
      </StyledContainer>
    </StyledLoginModal>
  );
};

export default LoginModal;
