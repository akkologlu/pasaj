import { StyledBlueBanner, StyledCol } from "@/styles/styled";
import CustomImage from "../common/CustomImage";
import CustomButton from "../common/CustomButton";

const BlueBanner = () => {
  return (
    <StyledBlueBanner>
      <StyledCol $sizemd={2}>
        <CustomImage
          src="/teknoloji-group-18.webp"
          alt="blue banner"
          height="150px"
        />
      </StyledCol>
      <StyledCol $sizemd={8}>
        <h3>Turkcell Faturana Ek Alabileceğin Cihazlar</h3>
      </StyledCol>
      <StyledCol $sizemd={1}>
        <CustomButton bgcolor="#FFC900" padding="0.5rem">
          <p>İncele</p> <span>&gt;</span>
        </CustomButton>
      </StyledCol>
    </StyledBlueBanner>
  );
};

export default BlueBanner;
