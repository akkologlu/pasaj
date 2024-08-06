import { QA } from "@/types/productType";
import Question from "./Question";
import {
  FlexCol,
  SpaceBetween,
  StyledCol,
  StyledCommentButton,
  StyledInput,
} from "@/styles/styled";

type DetailTabsProps = {
  qas: QA[];
};
const Questions: React.FC<DetailTabsProps> = ({ qas }) => {
  return (
    <FlexCol $gap="1rem">
      <SpaceBetween $margin="2rem 0">
        <StyledCol $sizemd={5}>
          <form>
            <StyledInput placeholder="Satıcı" />
          </form>
        </StyledCol>
        <StyledCommentButton>Satıcıya Sor</StyledCommentButton>
      </SpaceBetween>
      {qas.map((qa: QA) => (
        <Question key={qa.id} qa={qa} />
      ))}
    </FlexCol>
  );
};

export default Questions;
