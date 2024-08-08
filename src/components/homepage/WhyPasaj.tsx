import {
  SpaceBetween,
  StyledCol,
  StyledContainer,
  StyledRoundedDiv,
  StyledText,
  StyledWhyPassage,
} from "@/styles/styled";
import { whyPasaj } from "@/lib/mockData";

const WhyPasaj: React.FC = () => {
  return (
    <StyledWhyPassage $padding="5rem 0" $bgcolor="form">
      <StyledContainer>
        <h2>Neden Pasaj?</h2>
        <StyledText as="h4" $fw="500">
          Akıllı telefondan elektrikli süpürgeye, hobi ürünlerinden akıllı
          saatlere binlerce çeşit elektronik ürünü Turkcell Pasaj güvencesi ve
          Turkcell Pasaj ayrıcalığıyla keşfedin.
        </StyledText>
        <SpaceBetween $wrap={true}>
          {whyPasaj.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <StyledCol $sizemd={3} $sizesm={12} key={index}>
                <StyledRoundedDiv
                  $radius="50%"
                  $bgcolor="darkBlue"
                  $padding="1rem"
                  $margin="3rem auto 1rem auto"
                  $color="white"
                >
                  <IconComponent />
                </StyledRoundedDiv>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </StyledCol>
            );
          })}
        </SpaceBetween>
      </StyledContainer>
    </StyledWhyPassage>
  );
};
export default WhyPasaj;
