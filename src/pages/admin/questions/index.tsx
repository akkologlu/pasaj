import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { answerQuestion } from "@/lib/api";
import {
  Flex,
  JustifyBetweenAlignCenter,
  StyledCol,
  StyledCommentButton,
  StyledContainer,
  StyledDiv,
  StyledInput,
  StyledQuestionForm,
  StyledText,
} from "@/styles/styled";

import toast from "react-hot-toast";
import { useFetchAllProducts } from "@/hooks/useDataFetching";

type QA = {
  id: string | number;
  question: {
    content: string;
    date: string;
  };
  answer: {
    content: string;
    date: string;
    seller: string;
  };
};

type Product = {
  id: number | string;
  title: string;
  qa: QA[];
};

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

const QuestionAnswerForm: React.FC<{
  qa: QA;
  productId: number | string;
}> = ({ qa, productId }) => {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm<{ answer: string }>();

  const mutation = useMutation({
    mutationFn: ({ productId, qa }: { productId: number | string; qa: QA[] }) =>
      answerQuestion({ productId, qa }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Cevabınız gönderildi.");
    },
    onError: () => {
      toast.error("Cevabınız gönderilemedi.");
    },
  });

  const onSubmit = (data: { answer: string }) => {
    const updatedQA = {
      ...qa,
      answer: {
        ...qa.answer,
        content: data.answer,
        date: new Date().toISOString(),
      },
    };

    mutation.mutate({ productId, qa: [updatedQA] });
    reset();
  };

  return (
    <StyledQuestionForm as="form" onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        as="textarea"
        placeholder="Cevabınızı yazınız"
        rows={5}
        {...register("answer")}
      />
      <JustifyBetweenAlignCenter>
        <StyledCommentButton type="submit">Güncelle</StyledCommentButton>
      </JustifyBetweenAlignCenter>
    </StyledQuestionForm>
  );
};

export default AdminQuestionsPanel;
