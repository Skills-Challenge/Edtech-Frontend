import { Textarea } from "@/components/ui/TextArea";
import { TextareaHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  register: UseFormRegister<any>;
  name: string;
}

const FormTextArea = ({ label, error, register, name, ...rest }: TextAreaProps) => {
  return (
    <div className="mb-4">
      <label className="block font-medium">{label}</label>
      <Textarea
        {...register(name)}
        {...rest}
        className="border text-base p-4 w-full rounded-md focus-visible:ring-1 ring-active min-h-[114px]"
        placeholder="Type here..."
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default FormTextArea;
