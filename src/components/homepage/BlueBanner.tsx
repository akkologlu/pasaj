import { StyledBlueBanner, StyledCol, StyledText } from "@/styles/styled";
import CustomImage from "../common/CustomImage";
import CustomButton from "../common/CustomButton";

const BlueBanner = () => {
  return (
    <StyledBlueBanner $bgcolor="cyan" $align="center">
      <StyledCol $sizemd={2}>
        <CustomImage
          src="/teknoloji-group-18.webp"
          alt="blue banner"
          height={150}
        />
      </StyledCol>
      <StyledCol $sizemd={8}>
        <StyledText as="h3" $color="white" $center="center">
          Turkcell Faturana Ek Alabileceğin Cihazlar
        </StyledText>
      </StyledCol>
      <StyledCol $sizemd={1}>
        <CustomButton bgcolor="yellow" padding="0.5rem">
          <p>İncele</p> <span>&gt;</span>
        </CustomButton>
      </StyledCol>
    </StyledBlueBanner>
  );
};

export default BlueBanner;
