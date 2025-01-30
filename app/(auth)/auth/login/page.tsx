"use client";

import ComponentHeader from "@/components/common/ComponentHeader";
import FormInput from "@/components/common/form/FormInput";
import { Button } from "@/components/ui/Button";
import { login } from "@/lib/actions/auth.action";
import { store, useAppDispatch } from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email().min(1, "Enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

const page = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
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

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      await login(data.email, data.password, dispatch);
      setLoading(false);
      toast.success("Successfully Logged In", {
        description: "Welcome back! 🎉",
      });
      
      const user = store.getState().auth.user;
      if (user && user.role === "admin") {
        router.push("/admin");
      } else if (user) {
        router.push("/talent");
      }
    } catch (error: any) {
      setLoading(false);
      console.error("Login Failed!", error?.message);
      toast.error("Incorrect Email or Password", {
        description: "Please provide correct credentials",
      });
    }
  };

  return (
    <div className="p-5">
      <div>
        <ComponentHeader
          heading="Sign in"
          subHeading="Sign in to take on the current challenges"
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
          type="password"
          register={register}
          placeholder="Enter your password"
          error={errors.password && errors?.password.message}
        />
        <div className="flex flex-col gap-1">
          <Button
            type="submit"
            className="py-4 w-full text-white font-semibold leading-[23.5px] rounded-lg"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
          <div className="flex items-center justify-end gap-2">
            <h2 className="text-sm">Don't have an account?</h2>
            <Link href={"/auth/signup"} className="text-primary text-sm">
              Sign up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
