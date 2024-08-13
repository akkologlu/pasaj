import { StyledDiv } from "@/styles/styled";
import CustomImage from "./CustomImage";

const Loading = () => {
  return (
    <StyledDiv $display="flex" $align="center" $justify="center" $height="50vh">
      <CustomImage src="/bouncing-squares.svg" alt="Loading" height={100} />
    </StyledDiv>
  );
};

export default Loading;
