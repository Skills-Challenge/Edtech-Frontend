"use client";

import { useEffect } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextArea from "./TextArea";
import TextAreaWithList from "./TextAreaWithList";
import { challengeSchema } from "@/schemas/ChallengeSchema";
import FormInput from "./FormInput";
import FormTextArea from "./TextArea";
import { Button } from "@/components/ui/Button";
import ListHeader from "../ListHeader";
import ComponentHeader from "../ComponentHeader";
import { init } from "next/dist/compiled/webpack/webpack";

interface ChallengeFormProps {
  initialData?: typeof challengeSchema._type | null; // Challenge data for update
  onSubmit: (data: any) => void;
}

const ChallengeForm = ({ initialData, onSubmit }: ChallengeFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(challengeSchema),
    defaultValues: initialData || {
      title: "",
      deadline: "",
      duration: "",
      prize: "",
      contactEmail: "",
      description: [],
      brief: "",
      requirements: [],
      deliverables: [],
    },
  });

  // Load from localStorage if updating
  useEffect(() => {
    const savedChallenge = localStorage.getItem("challengeData");
    if (savedChallenge) {
      const challengeData = JSON.parse(savedChallenge);
      Object.keys(challengeData).forEach((key) => {
        if (key in challengeSchema.shape) {
          setValue(
            key as keyof typeof challengeSchema._type,
            challengeData[key]
          );
        }
      });
    }
  }, [setValue]);

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
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 flex flex-col gap-6"
      >
        <FormInput
          name="title"
          label="Challenge/Hackhaton Title"
          register={register}
          placeholder="Enter Title"
          error={errors.title && errors?.title.message}
        />
        <div className="grid grid-cols-2 gap-x-[18px] gap-y-6">
          <FormInput
            name="deadline"
            label="Deadline"
            register={register}
            placeholder="Date"
            error={errors.deadline && errors?.deadline.message}
          />
          <FormInput
            name="duration"
            label="Duration"
            register={register}
            placeholder="duration"
            error={errors.duration && errors.duration.message}
          />
          <FormInput
            name="prize"
            label="Prize"
            register={register}
            placeholder="Prize"
            error={errors.prize && errors.prize.message}
          />
          <FormInput
            name="contactEmail"
            label="Contact Email"
            register={register}
            placeholder="Contact Email"
            error={errors.prize && errors.prize.message}
          />
        </div>
        <FormTextArea
          label="Project Brief"
          name="brief"
          error={errors.brief?.message}
          register={register}
        />
        <TextAreaWithList
          label="Project Description"
          name="description"
          register={register}
          setValue={setValue}
          error={errors.description && errors.description.message}
          defaultValues={watch("description")}
        />
        <TextAreaWithList
          label="Project Requirements"
          name="requirements"
          register={register}
          setValue={setValue}
          error={errors.requirements && errors.requirements.message}
          defaultValues={watch("requirements")}
        />
        <TextAreaWithList
          label="Deliverables"
          name="deliverables"
          register={register}
          setValue={setValue}
          error={errors.deliverables && errors.deliverables.message}
          defaultValues={watch("deliverables")}
        />

        <div className="flex items-center justify-between gap-8">
          <Button
            className="py-4 w-[40%] text-primary font-semibold leading-[23.5px] rounded-lg"
            variant={"outline"}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="py-4 w-[60%] text-white font-semibold leading-[23.5px] rounded-lg"
          >
            {initialData ? "Update Challenge" : "Create Challenge"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChallengeForm;
