import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  register: UseFormRegister<any>;
  name: string;
}

const Input = ({ label, error, register, name, ...rest }: InputProps) => {
  return (
    <div className="mb-4">
      <label className="block font-medium">{label}</label>
      <input {...register(name)} {...rest} className="border p-2 w-full rounded" />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
