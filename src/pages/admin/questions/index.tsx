import React from "react";
import {
  Flex,
  StyledCol,
  StyledContainer,
  StyledDiv,
  StyledText,
} from "@/styles/styled";
import { useFetchAllProducts } from "@/hooks/useDataFetching";
import QuestionAnswerForm from "./AnswerForm";
import { Product, QA } from "@/types/productType";

const AdminQuestionsPanel: React.FC = () => {
  const { data: products } = useFetchAllProducts();

  return (
    <StyledContainer $padding="3rem 0">
      <Flex $gap="2rem">
        {products
          ?.filter((product: Product) =>
            product.qa.some((qa: QA) => qa.answer.content === "")
          )
          .map((product: Product) => (
            <StyledCol key={product.id} $sizemd={4} $sizesm={6}>
              <StyledText as="h3">{product.title}</StyledText>
              {product.qa
                .filter((qa) => qa.answer.content === "")
                .map((qa) => (
                  <StyledDiv key={qa.id} $margin="1rem 0">
                    <StyledText as="p">
                      <strong>Soru:</strong> {qa.question.content}
                    </StyledText>
                    <QuestionAnswerForm qa={qa} productId={product.id} />
                  </StyledDiv>
                ))}
            </StyledCol>
          ))}
      </Flex>
    </StyledContainer>
  );
};

export default AdminQuestionsPanel;
