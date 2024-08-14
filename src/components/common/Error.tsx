import { FullCenterCol, StyledContainer, StyledDiv } from "@/styles/styled";
type ErrorProps = {
  code: string;
  content: string;
};
const Error: React.FC<ErrorProps> = ({ code, content }) => {
  return (
    <StyledContainer>
      <FullCenterCol
        $bgcolor="blue"
        $color="white"
        $width="60%"
        $margin="3rem auto"
        $height="50vh"
        $radius="5rem"
        $gap="1rem"
      >
        <h1>{code}</h1>
        <p>{content}</p>
      </FullCenterCol>
    </StyledContainer>
  );
};

export default Error;
