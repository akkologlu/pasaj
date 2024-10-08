import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import {
  FullCenterCol,
  StyledContainer,
  StyledDiv,
  StyledError,
  StyledInput,
  StyledPrimaryFormButton,
  StyledSecondaryFormButton,
} from "@/styles/styled";
import Link from "next/link";
import toast from "react-hot-toast";

const schema = z.object({
  email: z.string().email("Geçerli bir email giriniz."),
  password: z.string().min(6, "Şifre en az 6 karakter olmalı."),
});

type FormData = z.infer<typeof schema>;
export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const router = useRouter();
  const onSubmit = async (data: FormData) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (!result?.error) {
      toast.success("Giriş başarılı.");
      router.push("/");
    } else {
      toast.error(result.error);
    }
  };
  return (
    <StyledContainer>
      <FullCenterCol
        as="form"
        $margin="3rem auto"
        onSubmit={handleSubmit(onSubmit)}
        $gap=".5rem"
        $width="300px"
      >
        <StyledDiv $width="100%">
          <StyledInput {...register("email")} placeholder="Email" />
          {errors.email && <StyledError>* {errors.email.message}</StyledError>}
        </StyledDiv>
        <StyledDiv $width="100%">
          <StyledInput
            {...register("password")}
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <StyledError>* {errors.password.message}</StyledError>
          )}
        </StyledDiv>
        <StyledPrimaryFormButton type="submit">
          Giriş Yap
        </StyledPrimaryFormButton>
        <Link href="/register" style={{ width: "100%" }}>
          <StyledSecondaryFormButton>Kayıt Ol</StyledSecondaryFormButton>
        </Link>
      </FullCenterCol>
    </StyledContainer>
  );
}
