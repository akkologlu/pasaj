import {
  FlexCol,
  SpaceBetween,
  StyledDiv,
  StyledFilterSection,
  StyledText,
} from "@/styles/styled";
import { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
type FilterSectionProps = {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
};
const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  children,
  isOpen = false,
}) => {
  const [toggle, setToggle] = useState(isOpen);
  return (
    <StyledFilterSection
      $padding="1rem"
      $radius="0.5rem"
      $margin="1rem 0"
      $bgcolor="#f5f7f9"
    >
      <SpaceBetween onClick={() => setToggle(!toggle)}>
        <StyledText $color="#8e9fad" $fw="700">
          {title}
        </StyledText>
        <span>{toggle ? <IoChevronUp /> : <IoChevronDown />}</span>
      </SpaceBetween>
      {toggle && (
        <FlexCol $gap="1rem" $margin="2rem 0">
          {children}
        </FlexCol>
      )}
    </StyledFilterSection>
  );
};
export default FilterSection;
