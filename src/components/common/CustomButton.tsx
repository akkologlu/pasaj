import { StyledCustomButton } from "@/styles/styled";

type CustomButtonProps = {
  children: React.ReactNode;
  bgcolor: string;
};
const CustomButton: React.FC<CustomButtonProps> = ({ children, bgcolor }) => {
  return <StyledCustomButton $bgcolor={bgcolor}>{children}</StyledCustomButton>;
};

export default CustomButton;
