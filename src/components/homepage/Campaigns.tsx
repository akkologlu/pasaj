import {
  StyledCol,
  StyledRow,
  StyledShowcase,
  StyledText,
} from "@/styles/styled";
import CustomImage from "../common/CustomImage";

const Campaigns: React.FC = () => {
  return (
    <StyledShowcase $padding="5rem 0">
      <h2>Kampanyalar</h2>
      <StyledRow>
        <StyledCol $sizemd={8}>
          <StyledCol>
            <CustomImage
              src="/campaign1.webp"
              alt="Kampanya 1"
              height={270}
              objectFit="cover"
              style={{ marginBottom: "1rem" }}
            />
          </StyledCol>
          <StyledCol>
            <CustomImage
              src="/campaign2.webp"
              alt="Kampanya 2"
              height={270}
              objectFit="cover"
            />
          </StyledCol>
        </StyledCol>
        <StyledCol $sizemd={3.75}>
          <CustomImage
            src="/campaign3.webp"
            alt="Kampanya 3"
            height={560}
            objectFit="cover"
          />
        </StyledCol>
      </StyledRow>
    </StyledShowcase>
  );
};

export default Campaigns;
