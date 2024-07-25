import {
  StyledCenterText,
  StyledCol,
  StyledContainer,
  StyledFlexBetween,
  StyledHeader,
  StyledRoundedDiv,
  StyledWhyPassage,
} from "@/styles/styled";
import CustomImage from "../common/CustomImage";

const WhyPasaj: React.FC = () => {
  return (
    <StyledWhyPassage>
      <StyledContainer>
        <StyledCenterText>
          <StyledHeader as="h1">Neden Pasaj?</StyledHeader>
          <h3>
            Akıllı telefondan elektrikli süpürgeye, hobi ürünlerinden akıllı
            saatlere binlerce çeşit elektronik ürünü Turkcell Pasaj güvencesi ve
            Turkcell Pasaj ayrıcalığıyla keşfedin.
          </h3>
        </StyledCenterText>
        <StyledFlexBetween>
          <StyledCol $sizemd={3}>
            <StyledRoundedDiv>
              <CustomImage
                src="https://cdn-icons-png.flaticon.com/512/6831/6831000.png"
                alt="Neden Pasaj?"
                height="60px"
              />
            </StyledRoundedDiv>
            <StyledCenterText>
              <StyledHeader as="h2">Hızlı ve Kolay Teslimat</StyledHeader>
              <p>
                Siparişiniz isterseniz gün içinde gelsin, isterseniz bir tıkla
                gelin ve mağazadan teslim alın.
              </p>
            </StyledCenterText>
          </StyledCol>
          <StyledCol $sizemd={3}>
            <StyledRoundedDiv>
              <CustomImage
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghdOGxXowbnHJ94R2Xpz5sz4PDluu9ZaCRM6h3F4sioCwDN6pxRx1E1skIul7AOWCZ5g&usqp=CAU"
                alt="Neden Pasaj?"
                height="60px"
              />
            </StyledRoundedDiv>
            <StyledCenterText>
              <StyledHeader as="h2">Hızlı ve Kolay Teslimat</StyledHeader>
              <p>
                Siparişiniz isterseniz gün içinde gelsin, isterseniz bir tıkla
                gelin ve mağazadan teslim alın.
              </p>
            </StyledCenterText>
          </StyledCol>
          <StyledCol $sizemd={3}>
            <StyledRoundedDiv>
              <CustomImage
                src="https://icons.veryicon.com/png/o/miscellaneous/cook-design-catering-b-end-icon-library/cancellation-of-order-1.png"
                alt="Neden Pasaj?"
                height="60px"
              />
            </StyledRoundedDiv>
            <StyledCenterText>
              <StyledHeader as="h2">Hızlı ve Kolay Teslimat</StyledHeader>
              <p>
                Siparişiniz isterseniz gün içinde gelsin, isterseniz bir tıkla
                gelin ve mağazadan teslim alın.
              </p>
            </StyledCenterText>
          </StyledCol>
        </StyledFlexBetween>
      </StyledContainer>
    </StyledWhyPassage>
  );
};

export default WhyPasaj;
