import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn, getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import {
  FullCenterCol,
  StyledContainer,
  StyledInput,
  StyledPrimaryFormButton,
  StyledSecondaryFormButton,
} from "@/styles/styled";
import Link from "next/link";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
interface FormData {
  email: string;
  password: string;
}
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
      router.push("/");
    } else {
      alert(result.error);
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
        <div>
          <StyledInput {...register("email")} placeholder="Email" />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <StyledInput
            {...register("password")}
            type="password"
            placeholder="Password"
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <StyledPrimaryFormButton type="submit">
          Giriş Yap
        </StyledPrimaryFormButton>
        <StyledSecondaryFormButton>
          <Link href="/register">Kayıt Ol</Link>
        </StyledSecondaryFormButton>
      </FullCenterCol>
    </StyledContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
