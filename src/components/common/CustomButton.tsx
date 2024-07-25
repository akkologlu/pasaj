import { StyledCustomButton } from "@/styles/styled";

type CustomButtonProps = {
  onclick?: () => void;
  children: React.ReactNode;
  bgcolor: string;
};
const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  bgcolor,
  onclick,
}) => {
  return (
    <StyledCustomButton onClick={onclick} $bgcolor={bgcolor}>
      {children}
    </StyledCustomButton>
  );
};

export default CustomButton;
