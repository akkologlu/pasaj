import { convertDates } from "@/lib/helpers";
import {
  StyledDate,
  StyledQuestionCard,
  StyledQuestionSection,
  StyledSellerText,
  StyledText,
} from "@/styles/styled";
import { QA } from "@/types/productType";
type QuestionProps = {
  qa: QA;
};
const Question: React.FC<QuestionProps> = ({ qa }) => {
  return (
    <StyledQuestionCard $padding="1.5rem 1rem" $radius=".5rem">
      <h5>
        Soru
        <StyledDate>{convertDates(qa.question.date)}</StyledDate>
      </h5>
      <StyledText $margin=".5rem 0">{qa.question.content}</StyledText>
      {qa.answer.content && (
        <StyledQuestionSection>
          <h6>
            <StyledSellerText>{qa.answer.seller}</StyledSellerText> yanıtladı
            <StyledDate>{convertDates(qa.question.date)}</StyledDate>
          </h6>
          <StyledText $margin=".5rem 0">{qa.answer.content}</StyledText>
        </StyledQuestionSection>
      )}
    </StyledQuestionCard>
  );
};

export default Question;
