import { Textarea } from "@/components/ui/TextArea";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

interface TextAreaWithListProps {
  label: string;
  name: string;
  error?: string;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  defaultValues?: string[];
}

const TextAreaWithList = ({
  label,
  name,
  register,
  error,
  setValue,
  defaultValues = [],
}: TextAreaWithListProps) => {
  const [text, setText] = useState("");
  const [sentences, setSentences] = useState<string[]>(defaultValues);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [active, setActive] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (text.trim()) {
        const newSentences = [...sentences, text.trim()];
        setSentences(newSentences);
        setValue(name, newSentences);
        setText("");
      }
    }
  };

  const startEditing = (index: number) => {
    setText(sentences[index]);
    setSentences(sentences.filter((_, i) => i !== index));
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  return (
    <div className="mb-4">
      <label className="block font-medium">{label}</label>
      <div
        className={cn(
          "min-h-[114px] h-auto border rounded-md flex flex-col border-border",
          active ? "ring-1 ring-active" : " "
        )}
      >
        <ul className={cn("mt-4 list-none", sentences.length > 0 && "pl-4")}>
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
        <Textarea
          {...register(name)}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          ref={textareaRef}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          onInput={handleInput}
          className=" px-4 pb-2 w-full rounded border-none shadow-none"
          placeholder="Type and press Enter..."
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default TextAreaWithList;
