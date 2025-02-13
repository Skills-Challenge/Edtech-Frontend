"use client";

import ComponentHeader from "@/components/common/ComponentHeader";
import FormInput from "@/components/common/form/FormInput";
import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/Button";
import { signup } from "@/store/actions/auth.action";
import { useAppDispatch } from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const registerSchema = z.object({
  name: z
    .string()
    .min(3, "enter a longer name")
    .max(30, "enter a smaller name"),
  email: z.string().email().min(1, "enter a valid email"),
  password: z.string().min(1, "password is required"),
});

const Page = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [loading,setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
       await signup(data.name, data.email, data.password, dispatch);
      toast.success("Account Created", {
        description:
          "Welcome! Your account has been successfully registered. 🎉",
      });

      router.push("/auth/login");
    } catch (error: any) {
      console.error("SignUp Failed", error?.message);
      toast.error("Sign up failed", {
        description: `${error?.message}`,
      });
    }finally{
      setLoading(false)
    }
  };
  return (
    <div className="p-5">
      <div>
        <ComponentHeader
          heading="Create account"
          subHeading="start your journey and showcase what you can do"
          center
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 flex flex-col gap-6"
      >
        <FormInput
          name="name"
          label="Full Names"
          register={register}
          placeholder="Enter your full name"
          error={errors.name && errors?.name.message}
        />
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
          >
            {loading && (
              <Icons.spinner className="animate-spin w-10 h-10 mr-2 text-white" />
            )}
            Register
          </Button>
          <div className="flex items-center justify-end gap-2">
            <h2 className="text-sm">Already have an account?</h2>
            <Link href={"/auth/login"} className="text-primary text-sm">
              sign in
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page;
