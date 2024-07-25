import {
  StyledCol,
  StyledHeader,
  StyledRow,
  StyledShowcase,
} from "@/styles/styled";
import CustomImage from "../common/CustomImage";

const Campaigns: React.FC = () => {
  return (
    <StyledShowcase>
      <StyledHeader as="h1">Kampanyalar</StyledHeader>
      <StyledRow>
        <StyledCol $sizemd={8}>
          <StyledCol>
            <CustomImage
              src="/campaign1.webp"
              alt="Kampanya 1"
              height="270px"
              objectFit="cover"
              style={{ marginBottom: "1rem" }}
            />
          </StyledCol>
          <StyledCol>
            <CustomImage
              src="/campaign2.webp"
              alt="Kampanya 2"
              height="270px"
              objectFit="cover"
            />
          </StyledCol>
        </StyledCol>
        <StyledCol $sizemd={3.75}>
          <CustomImage
            src="/campaign3.webp"
            alt="Kampanya 3"
            height="560px"
            objectFit="cover"
          />
        </StyledCol>
      </StyledRow>
    </StyledShowcase>
  );
};

export default Campaigns;
