"use client";

import ComponentHeader from "@/components/common/ComponentHeader";
import FormInput from "@/components/common/form/FormInput";
import { Button } from "@/components/ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email().min(1, "enter a valid email"),
  password: z.string().min(1, "password is required"),
});
const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="p-5">
      <div>
        <ComponentHeader
          heading="Sign in"
          subHeading="sign in to take on the current challenges"
          center
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 flex flex-col gap-6"
      >
        <FormInput
          name="email"
          label="Email"
          register={register}
          placeholder="Enter your email"
          error={errors.email && errors?.email.message}
        />
        <FormInput
          name="password"
          label="Password"
          register={register}
          placeholder="Enter your password"
          error={errors.password && errors?.password.message}
        />
        <div className="flex flex-col gap-1">
          <Button
            type="submit"
            className="py-4 w-full text-white font-semibold leading-[23.5px] rounded-lg"
          >
            Register
          </Button>
          <div className="flex items-center justify-end gap-2">
            <h2 className="text-sm">Don't have an account?</h2>
            <Link href={"/auth/signup"} className="text-primary text-sm">
              sign up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
