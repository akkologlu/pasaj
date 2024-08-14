import { Specification } from "@/types/productType";
import {
  StyledContainer,
  StyledText,
  StyledDiv,
  Flex,
} from "../../../styles/styled";
type SpecificationsProps = {
  specs: Specification[];
};
const Specifications: React.FC<SpecificationsProps> = ({ specs }) => {
  return (
    <StyledContainer $padding="1.25rem">
      <Flex $wrap={true}>
        {specs.map((spec, specIndex) => (
          <StyledDiv key={specIndex} $margin="0 0 1.25rem 0" $width="12rem">
            <StyledText $fw="bold" $margin="0 0 5px 0" $center="center">
              {spec.title}
            </StyledText>
            <StyledText $fs="0.85rem" $center="center">
              {spec.value}
            </StyledText>
          </StyledDiv>
        ))}
      </Flex>
    </StyledContainer>
  );
};

export default Specifications;
