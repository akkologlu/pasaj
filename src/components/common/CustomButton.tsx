import { StyledCustomButton } from "@/styles/styled";

type CustomButtonProps = {
  onclick?: () => void;
  children: React.ReactNode;
  bgcolor: string;
  padding?: string;
};
const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  bgcolor,
  onclick,
  padding = "0.75rem",
}) => {
  return (
    <StyledCustomButton onClick={onclick} $bgcolor={bgcolor} $padding={padding}>
      {children}
    </StyledCustomButton>
  );
};

export default CustomButton;
