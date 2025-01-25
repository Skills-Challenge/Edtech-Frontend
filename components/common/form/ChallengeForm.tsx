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

const ChallengeForm = () => {
    const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
      watch,
    } = useForm({
      resolver: zodResolver(challengeSchema),
      defaultValues: {
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
                setValue(key as keyof typeof challengeSchema._type, challengeData[key]);
              }
        });
      }
    }, [setValue]);
  
    const onSubmit = (data: any) => {
      localStorage.setItem("challengeData", JSON.stringify(data));
      console.log("Form Submitted", data);
    };
  
    return (
        <div className="w-[60%] mx-auto pt-8 px-6 pb-6 bg-white rounded-xl border border-border">
            <form onSubmit={handleSubmit(onSubmit)} className="p-4 flex flex-col gap-6">
                <FormInput name="title" label="Challenge/Hackhaton Title" register={register}  placeholder="Enter Title" error={errors.title && errors?.title.message}/>
                <div className="grid grid-cols-2 gap-x-[18px] gap-y-6">
                <FormInput name="deadline" label="Deadline" register={register}  placeholder="Date" error={errors.deadline && errors?.deadline.message}/>
                <FormInput name="duration" label="Duration" register={register} placeholder="duration" error={errors.duration && errors.duration.message}/>
                <FormInput name="prize" label="Prize" register={register} placeholder="Prize" error={errors.prize && errors.prize.message}/>
                <FormInput name="contactEmail" label="Contact Email" register={register} placeholder="Contact Email" error={errors.prize && errors.prize.message}/>
                </div>
                <FormTextArea label="Project Brief" name="brief" error={errors.brief?.message} register={register} />
                <TextAreaWithList label="Project Description" name="description" register={register} setValue={setValue} error={errors.description && errors.description.message} defaultValues={watch("description")} />
                <TextAreaWithList label="Project Requirements" name="requirements" register={register} setValue={setValue} error={errors.requirements && errors.requirements.message} defaultValues={watch("requirements")} />
                <TextAreaWithList label="Deliverables" name="deliverables" register={register} setValue={setValue} error={errors.deliverables && errors.deliverables.message} defaultValues={watch("deliverables")} />
        
                <div className="flex items-center justify-between gap-8">
                    <Button  className="py-4 w-[40%] text-primary font-semibold leading-[23.5px] rounded-lg" variant={"outline"}>Cancel</Button>
                    <Button type="submit" className="py-4 w-[60%] text-white font-semibold leading-[23.5px] rounded-lg">Create Challenge</Button>
                </div>
            </form>
        </div>
    );
  };
  
  export default ChallengeForm;