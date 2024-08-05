import { Specification } from "@/types/productType";
import {
  StyledContainer,
  StyledRow,
  StyledCol,
  StyledText,
  StyledDiv,
} from "../../../styles/styled";
type SpecificationsProps = {
  specs: Specification[];
};
const Specifications: React.FC<SpecificationsProps> = ({ specs }) => {
  const itemsPerCol = Math.ceil(specs.length / 4);
  const columns = Array.from({ length: 4 }, (_, colIndex) =>
    specs.slice(colIndex * itemsPerCol, (colIndex + 1) * itemsPerCol)
  );
  return (
    <StyledContainer $padding="1.25rem">
      <StyledRow>
        {columns.map((colSpecs, colIndex) => (
          <StyledCol
            key={colIndex}
            $sizexl={2.75}
            $sizelg={2.75}
            $sizemd={2.75}
            $sizesm={12}
          >
            {colSpecs.map((spec, specIndex) => (
              <StyledDiv key={specIndex} $margin="0 0 1.25rem 0">
                <StyledText
                  $fs="16px"
                  $fw="bold"
                  $color="#333"
                  $margin="0 0 5px 0"
                  $center={true}
                >
                  {spec.title}
                </StyledText>
                <StyledText $fs="14px" $color="#555" $center={true}>
                  {spec.value}
                </StyledText>
              </StyledDiv>
            ))}
          </StyledCol>
        ))}
      </StyledRow>
    </StyledContainer>
  );
};

export default Specifications;
