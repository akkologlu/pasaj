import { StyledContainer, StyledDiv } from "@/styles/styled";
type ErrorProps = {
  code: string;
  content: string;
};
const Error: React.FC<ErrorProps> = ({ code, content }) => {
  return (
    <StyledContainer>
      <StyledDiv
        $bgcolor="blue"
        $color="white"
        $width="60%"
        $margin="3rem auto"
        $height="50vh"
        $radius="5rem"
        $display="flex"
        $justify="center"
        $align="center"
        $direction="column"
        $gap="1rem"
      >
        <h1>{code}</h1>
        <p>{content}</p>
      </StyledDiv>
    </StyledContainer>
  );
};

export default Error;
