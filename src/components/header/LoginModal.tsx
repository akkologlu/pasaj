import {
  SpaceEvenly,
  StyledCol,
  StyledContainer,
  StyledLoginModal,
} from "@/styles/styled";
import CustomImage from "../common/CustomImage";
import Link from "next/link";
type LoginModalProps = {
  setloginModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const LoginModal: React.FC<LoginModalProps> = ({ setloginModal }) => {
  return (
    <StyledLoginModal $pos="absolute" $bgcolor="modal" $padding="4rem">
      <StyledContainer>
        <SpaceEvenly>
          <StyledCol $sizemd={4}>
            <CustomImage src="/login-image.webp" alt="login" height={200} />
            <h3>Turkcell Pasaj’ın fırsatlarla dolu dünyasına hoş geldiniz!</h3>
            <h5>
              Turkcell Pasaj’da fırsatlar bitmez! İhtiyacınız olan bir çok
              ürüne, güvenli ve esnek ödeme seçenekleri ile hem de kredi kartı
              limitinize takılmadan sahip olabilirsiniz. Favorilediğiniz ürünler
              için bilgilendirmelerden, siparişlerinizle ilgili tüm işlemlere ve
              daha da fazlasına kolaylıkla erişim sağlayabilirsiniz.
            </h5>
          </StyledCol>
          <StyledCol $sizemd={4}>
            <h2>Giriş</h2>
            <h5>
              Size özel ödeme avantajları ve size özel tekliflerden faydalanmak
              için Giriş Yap/Üye Ol seçeneği ile devam edebilirsiniz.
            </h5>
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
