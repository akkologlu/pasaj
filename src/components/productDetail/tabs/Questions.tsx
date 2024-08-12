import { QA, Seller } from "@/types/productType";
import Question from "./Question";
import {
  FlexCol,
  JustifyBetweenAlignCenter,
  SpaceBetween,
  StyledCol,
  StyledCommentButton,
  StyledDiv,
  StyledInput,
  StyledLabel,
  StyledQuestionForm,
  StyledText,
} from "@/styles/styled";
import { useForm } from "react-hook-form";
import { addQuestion } from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

type DetailTabsProps = {
  qas: QA[];
  seller: string;
  otherSellers: Seller[];
  id: string | number;
};
const Questions: React.FC<DetailTabsProps> = ({
  qas,
  seller,
  otherSellers,
  id,
}) => {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm();
  const { mutate } = useMutation({
    mutationFn: ({ id, data }: { id: string | number; data: QA[] }) =>
      addQuestion({ id, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product"] });
      toast.success("Sorunuz başarıyla gönderildi");
      reset();
    },
    onError: () => {
      toast.error("Sorunuz gönderilemedi");
    },
  });
  const onSubmit = (data: any) => {
    if (!data.criteria) {
      return toast.error("Lütfen yayınlama kriterlerini kabul edin");
    }
    const newQuestion = {
      question: {
        content: data.content,
        date: new Date().toISOString(),
      },
      answer: {
        content: "",
        date: "",
        seller: data.seller,
      },
    };
    const questions = [...qas, { id: crypto.randomUUID(), ...newQuestion }];
    mutate({ id: id, data: questions });
  };
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
      <StyledDiv $width="70%" $margin="1rem auto">
        <StyledText as="h3" $center="center" $margin=".5rem 0">
          Satıcıya Sor
        </StyledText>
        <StyledQuestionForm as="form" onSubmit={handleSubmit(onSubmit)}>
          <StyledInput as="select" {...register("seller")}>
            <option value={seller}>{seller}</option>
            {otherSellers.map((seller) => (
              <option key={seller.seller} value={seller.seller}>
                {seller.seller}
              </option>
            ))}
          </StyledInput>
          <StyledInput
            as="textarea"
            placeholder="Sorunuzu yazınız"
            rows={10}
            {...register("content")}
          />
          <JustifyBetweenAlignCenter>
            <StyledLabel>
              <input type="checkbox" {...register("criteria")} />
              <span>
                <StyledText as="span" $color="blue" $fw="600">
                  Yayınlama Kriterlerini
                </StyledText>{" "}
                kabul ediyorum. <br /> Kullanıcı adınız yer almayacaktır.
              </span>
            </StyledLabel>
            <StyledCommentButton>Gönder</StyledCommentButton>
          </JustifyBetweenAlignCenter>
        </StyledQuestionForm>
      </StyledDiv>
    </FlexCol>
  );
};

export default Questions;
