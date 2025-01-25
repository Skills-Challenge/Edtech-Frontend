import { useEffect } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextArea from "./TextArea";
import TextAreaWithList from "./TextAreaWithList";
import { challengeSchema } from "@/schemas/ChallengeSchema";

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
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 max-w-lg mx-auto">
        <input {...register("title")} placeholder="Title" className="border p-2 w-full rounded mb-4" />
        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
  
        <input {...register("deadline")} placeholder="Deadline" className="border p-2 w-full rounded mb-4" />
        <input {...register("duration")} placeholder="Duration" className="border p-2 w-full rounded mb-4" />
        <input {...register("prize")} placeholder="Prize" className="border p-2 w-full rounded mb-4" />
        <input {...register("contactEmail")} placeholder="Contact Email" className="border p-2 w-full rounded mb-4" />
  
        <TextAreaWithList label="Description" name="description" register={register} setValue={setValue} defaultValues={watch("description")} />
        <TextArea label="Brief" name="brief" error={errors.brief?.message} register={register} />
        <TextAreaWithList label="Requirements" name="requirements" register={register} setValue={setValue} defaultValues={watch("requirements")} />
        <TextAreaWithList label="Deliverables" name="deliverables" register={register} setValue={setValue} defaultValues={watch("deliverables")} />
  
        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
          Save Challenge
        </button>
      </form>
    );
  };
  
  export default ChallengeForm;