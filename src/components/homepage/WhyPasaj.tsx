import {
  SpaceBetween,
  StyledCol,
  StyledContainer,
  StyledDiv,
  StyledRoundedDiv,
  StyledText,
} from "@/styles/styled";
import { TbTruckDelivery } from "react-icons/tb";
import { MdPayments } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";

const WhyPasaj: React.FC = () => {
  return (
    <StyledDiv $padding="5rem 0" $bgcolor="#eff2f5" $textAlign="center">
      <StyledContainer>
        <StyledText as="h2" $fw="700" $fs="24px" $center={true}>
          Neden Pasaj?
        </StyledText>
        <StyledText $fw="500" $fs="18px" $center={true}>
          Akıllı telefondan elektrikli süpürgeye, hobi ürünlerinden akıllı
          saatlere binlerce çeşit elektronik ürünü Turkcell Pasaj güvencesi ve
          Turkcell Pasaj ayrıcalığıyla keşfedin.
        </StyledText>
        <SpaceBetween>
          <StyledCol $sizemd={3}>
            <StyledRoundedDiv
              $radius="50%"
              $bgcolor="#27356f"
              $padding="1rem"
              $margin="3rem auto 1rem auto"
              $color="#fff"
            >
              <TbTruckDelivery />
            </StyledRoundedDiv>
            <StyledText as="h2" $fw="700" $fs="24px" $center={true}>
              Hızlı ve Kolay Teslimat
            </StyledText>
            <StyledText $center={true}>
              Siparişiniz isterseniz gün içinde gelsin, isterseniz bir tıkla
              gelin ve mağazadan teslim alın.
            </StyledText>
          </StyledCol>
          <StyledCol $sizemd={3}>
            <StyledRoundedDiv
              $radius="50%"
              $bgcolor="#27356f"
              $padding="1rem"
              $margin="3rem auto 1rem auto"
              $color="#fff"
            >
              <MdPayments />
            </StyledRoundedDiv>
            <StyledText as="h2" $fw="700" $fs="24px" $center={true}>
              Esnek Ödeme Seçenekleri
            </StyledText>
            <StyledText $center={true}>
              Alışverişlerinizi ister kredi kartınıza taksitlendirin ister
              Turkcell faturanıza ek, 36 aya varan vade imkanından faydalanın.
            </StyledText>
          </StyledCol>
          <StyledCol $sizemd={3}>
            <StyledRoundedDiv
              $radius="50%"
              $bgcolor="#27356f"
              $padding="1rem"
              $margin="3rem auto 1rem auto"
              $color="#fff"
            >
              <RiRefund2Fill />
            </StyledRoundedDiv>
            <StyledText as="h2" $fw="700" $fs="24px" $center={true}>
              Ücretsiz İptal ve İade
            </StyledText>
            <StyledText $center={true}>
              Ürünlerinizi kolayca ve hiçbir ücret ödemeden iptal ve iade
              edebilirsiniz.
            </StyledText>
          </StyledCol>
        </SpaceBetween>
      </StyledContainer>
    </StyledDiv>
  );
};
export default WhyPasaj;
