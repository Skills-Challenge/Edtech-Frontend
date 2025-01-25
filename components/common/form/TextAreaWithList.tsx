import { useState } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

interface TextAreaWithListProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  defaultValues?: string[];
}

const TextAreaWithList = ({ label, name, register, setValue, defaultValues = [] }: TextAreaWithListProps) => {
  const [text, setText] = useState("");
  const [sentences, setSentences] = useState<string[]>(defaultValues);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (text.trim()) {
        const newSentences = [...sentences, text.trim()];
        setSentences(newSentences);
        setValue(name, newSentences); // Update form value
        setText("");
      }
    }
  };

  const startEditing = (index: number) => {
    setText(sentences[index]);
    setSentences(sentences.filter((_, i) => i !== index));
  };

  return (
    <div className="mb-4">
      <label className="block font-medium">{label}</label>
      <textarea
        {...register(name)}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        className="border p-2 w-full rounded"
        placeholder="Type and press Enter..."
      />
      <ul className="mt-4 list-none">
        {sentences.map((sentence, index) => (
          <li
            key={index}
            className="flex items-start gap-2 cursor-pointer hover:text-gray-500 transition"
            onClick={() => startEditing(index)}
            title="Click to edit"
          >
            <span className="text-xl">•</span> {sentence}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TextAreaWithList;
