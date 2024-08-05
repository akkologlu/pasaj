import { StyledDiv } from "@/styles/styled";

const Description = ({ desc }: { desc: string }) => {
  return <StyledDiv $padding="2rem">{desc}</StyledDiv>;
};

export default Description;
