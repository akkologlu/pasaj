import {
  SpaceBetween,
  StyledCol,
  StyledContainer,
  StyledRoundedDiv,
  StyledText,
  StyledWhyPassage,
} from "@/styles/styled";
import { TbTruckDelivery } from "react-icons/tb";
import { MdPayments } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";
import { whyPasaj } from "@/lib/mockData";

const WhyPasaj: React.FC = () => {
  const data = [
    {
      title: "Hızlı ve Kolay Teslimat",
      description:
        "Siparişiniz isterseniz gün içinde gelsin, isterseniz bir tıkla gelin ve mağazadan teslim alın.",
      icon: <TbTruckDelivery />,
    },
    {
      title: "Esnek Ödeme Seçenekleri",
      description:
        "Alışverişlerinizi ister kredi kartınıza taksitlendirin ister Turkcell faturanıza ek, 36 aya varan vade imkanından faydalanın.",
      icon: <MdPayments />,
    },
    {
      title: "Ücretsiz İptal ve İade",
      description:
        "Ürünlerinizi kolayca ve hiçbir ücret ödemeden iptal ve iade edebilirsiniz.",
      icon: <RiRefund2Fill />,
    },
  ];
  return (
    <StyledWhyPassage $padding="5rem 0" $bgcolor="form">
      <StyledContainer>
        <h2>Neden Pasaj?</h2>
        <StyledText as="h4" $fw="500">
          Akıllı telefondan elektrikli süpürgeye, hobi ürünlerinden akıllı
          saatlere binlerce çeşit elektronik ürünü Turkcell Pasaj güvencesi ve
          Turkcell Pasaj ayrıcalığıyla keşfedin.
        </StyledText>
        <SpaceBetween>
          {whyPasaj.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <StyledCol $sizemd={3} key={index}>
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
