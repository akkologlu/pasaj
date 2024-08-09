import { StyledCustomButton } from "@/styles/styled";
import Link from "next/link";

type CustomButtonProps = {
  onclick?: () => void;
  children: React.ReactNode;
  bgcolor: string;
  padding?: string;
  href?: string;
  round?: string;
};
const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  bgcolor,
  onclick,
  padding = "0.75rem",
  href = "#",
  round = "0.25rem",
}) => {
  return (
    <Link href={href}>
      <StyledCustomButton
        as="span"
        onClick={onclick}
        $bgcolor={bgcolor}
        $padding={padding}
        $radius={round}
        $pos="relative"
        $gap="0.75rem"
      >
        {children}
      </StyledCustomButton>
    </Link>
  );
};

export default CustomButton;
