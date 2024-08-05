import { convertDates } from "@/lib/helpers";
import {
  StyledComment,
  StyledDate,
  StyledDiv,
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
      <StyledText $fs="14px" $fw="bold" $color="#8e9fad">
        Soru
        <StyledDate>{convertDates(qa.question.date)}</StyledDate>
      </StyledText>
      <StyledText $margin=".5rem 0">{qa.question.content}</StyledText>
      <StyledQuestionSection>
        <StyledText $fs="0.75rem">
          <StyledSellerText>{qa.answer.seller}</StyledSellerText> yanıtladı
          <StyledDate>{convertDates(qa.question.date)}</StyledDate>
        </StyledText>
        <StyledText $margin=".5rem 0">{qa.answer.content}</StyledText>
      </StyledQuestionSection>
    </StyledQuestionCard>
  );
};

export default Question;
