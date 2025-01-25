import { TextareaHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  register: UseFormRegister<any>;
  name: string;
}

const TextArea = ({ label, error, register, name, ...rest }: TextAreaProps) => {
  return (
    <div className="mb-4">
      <label className="block font-medium">{label}</label>
      <textarea
        {...register(name)}
        {...rest}
        className="border p-2 w-full rounded"
        placeholder="Type here..."
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default TextArea;
