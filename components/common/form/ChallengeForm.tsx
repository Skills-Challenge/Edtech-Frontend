"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextAreaWithList from "./TextAreaWithList";
import {
  challengeSchema,
  updateChallengeSchema,
} from "@/schemas/ChallengeSchema";
import FormInput from "./FormInput";
import FormTextArea from "./TextArea";
import { Button } from "@/components/ui/Button";
import ComponentHeader from "../ComponentHeader";
import { useEffect } from "react";
import { Icons } from "../icons";
import { DatePickerDemo } from "@/components/ui/DatePicker";
import FormDatePicker from "./FormDatePicker";
import { useRouter } from "next/navigation";

interface ChallengeFormProps {
  initialData?: typeof updateChallengeSchema._type | null;
  onSubmit: (data: any) => void;
  isSavingUpdating?: boolean;
}

const ChallengeForm: React.FC<ChallengeFormProps> = ({
  initialData,
  onSubmit,
  isSavingUpdating,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    resolver: initialData ? undefined : zodResolver(challengeSchema),
    defaultValues: initialData || {
      title: "",
      deadline: "",
      startTime: "",
      prize: "",
      contactEmail: "",
      description: [],
      brief: "",
      requirements: [],
      deliverables: [],
    },
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const router = useRouter();

  const handleSubmitWithPartialData = (data: any) => {
    const updatedData = Object.keys(data).reduce(
      (acc: Record<string, any>, key) => {
        if ((data as any)[key] !== (initialData as any)?.[key]) {
          acc[key] = data[key];
        }
        return acc;
      },
      {}
    );
    onSubmit(updatedData);
  };

  const deadline = watch("deadline");
  const startTime = watch("startTime");

  return (
    <div className=" w-[90%] md:w-[80%] 2xl:w-[60%] mx-auto mt-9 pt-8 px-6 pb-6 mb-20 bg-white rounded-xl border border-border">
      <div className="flex flex-col gap-2 items-center">
        <ComponentHeader
          heading={initialData ? "Edit a Challenge" : "Create New Challenge"}
          subHeading={"Fill out these details to build your broadcast"}
          center
        />
      </div>
      <form
        onSubmit={handleSubmit(handleSubmitWithPartialData)}
        className="p-4 flex flex-col gap-6"
      >
        <FormInput
          name="title"
          label="Challenge/Hackhaton Title"
          register={register}
          placeholder="Enter Title"
          defaultValue={initialData?.title}
          error={errors.title && errors?.title.message}
        />
        <div className="grid grid-cols-2 gap-x-[18px] gap-y-6">
          <FormDatePicker
            label="Deadline"
            value={deadline ? new Date(deadline) : null}
            error={errors.deadline && errors?.deadline.message}
            onChange={(date) => setValue("deadline", date.toISOString())}
          />
          <FormDatePicker
            label="Start time"
            value={startTime ? new Date(startTime) : null}
            error={errors.startTime && errors?.startTime.message}
            onChange={(date) => setValue("startTime", date.toISOString())}
          />
          <FormInput
            name="prize"
            label="Prize"
            register={register}
            placeholder="Prize"
            defaultValue={initialData?.prize}
            error={errors.prize && errors.prize.message}
          />
          <FormInput
            name="contactEmail"
            label="Contact Email"
            register={register}
            placeholder="Contact Email"
            defaultValue={initialData?.contactEmail}
            error={errors.prize && errors.prize.message}
          />
        </div>
        <FormTextArea
          label="Project Brief"
          name="brief"
          error={errors.brief?.message}
          value={initialData?.brief}
          register={register}
        />
        <TextAreaWithList
          label="Project Description"
          name="description"
          register={register}
          setValue={setValue}
          value={watch("description") || []}
          error={errors.description?.message}
        />

        <TextAreaWithList
          label="Project Requirements"
          name="requirements"
          register={register}
          setValue={setValue}
          value={watch("requirements") || []}
          error={errors.requirements && errors.requirements.message}
          defaultValues={watch("requirements")}
        />
        <TextAreaWithList
          label="Seniority Levels"
          name="seniorityLevel"
          register={register}
          setValue={setValue}
          value={watch("seniorityLevel") || []}
          error={errors.seniorityLevel && errors.seniorityLevel.message}
          defaultValues={watch("seniorityLevel")}
        />
        <TextAreaWithList
          label="Skills Required"
          name="skills"
          register={register}
          setValue={setValue}
          value={watch("skills") || []}
          error={errors.skills && errors.skills.message}
          defaultValues={watch("skills")}
        />
        <TextAreaWithList
          label="Deliverables"
          name="deliverables"
          register={register}
          value={watch("deliverables") || []}
          setValue={setValue}
          error={errors.deliverables && errors.deliverables.message}
          defaultValues={watch("deliverables")}
        />

        <div className="flex items-center justify-between gap-8">
          <Button
            className="py-4 w-[40%] text-primary font-semibold leading-[23.5px] rounded-lg"
            variant={"outline"}
            onClick={() => router.back()}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isSavingUpdating}
            className="py-4 w-[60%] text-white font-semibold leading-[23.5px] rounded-lg"
          >
            {isSavingUpdating && (
              <Icons.spinner className="w-4 h-4 text-white mr-2 animate-spin" />
            )}
            {initialData ? "Update Challenge" : "Create Challenge"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChallengeForm;
