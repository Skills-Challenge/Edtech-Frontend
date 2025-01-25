import { Input } from "@/components/ui/input";
import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  register: UseFormRegister<any>;
  name: string;
}

const FormInput = ({ label, error, register, name, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="block font-medium text-sm text-[#475367]">{label}</label>
      <div className="flex flex-col gap-[2px]">
      <Input {...register(name)} {...rest} className="border p-4 w-full rounded-md focus-visible:ring-1 ring-active" />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    </div>
  );
};

export default FormInput;
