import { answerQuestion } from "@/lib/api";
import {
  JustifyBetweenAlignCenter,
  StyledCommentButton,
  StyledInput,
  StyledQuestionForm,
} from "@/styles/styled";
import { QA } from "@/types/productType";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
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
export default QuestionAnswerForm;
