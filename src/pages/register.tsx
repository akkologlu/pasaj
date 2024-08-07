import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "@/lib/firebase";
import { addUser } from "@/lib/api";
import {
  FullCenterCol,
  StyledContainer,
  StyledInput,
  StyledPrimaryFormButton,
  StyledSecondaryFormButton,
} from "@/styles/styled";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

interface FormData {
  email: string;
  password: string;
}

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      alert("User registered successfully");
      await addUser({ id: user.uid, email: data.email, cart: [], fav: [] });
      router.push("/");
    } catch (error: any) {
      alert(error.message);
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
          Kayıt Ol
        </StyledPrimaryFormButton>
        <StyledSecondaryFormButton>Giriş Yap</StyledSecondaryFormButton>
      </FullCenterCol>
    </StyledContainer>
  );
}
