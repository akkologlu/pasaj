import { StyledCustomButton } from "@/styles/styled";
import Link from "next/link";

type CustomButtonProps = {
  onclick?: () => void;
  children: React.ReactNode;
  bgcolor: string;
  padding?: string;
  href?: string;
};
const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  bgcolor,
  onclick,
  padding = "0.75rem",
  href = "",
}) => {
  return (
    <Link href={href}>
      <StyledCustomButton
        onClick={onclick}
        $bgcolor={bgcolor}
        $padding={padding}
      >
        {children}
      </StyledCustomButton>
    </Link>
  );
};

export default CustomButton;
