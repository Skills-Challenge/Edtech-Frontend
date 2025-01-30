import { z } from "zod";

export const challengeSchema = z.object({
    title: z.string().min(3, "Title is required"),
    deadline: z.string().min(1, "Deadline is required"),
    duration: z.string().min(1, "Duration is required"),
    prize: z.string().min(1, "Prize is required"),
    contactEmail: z.string().email("Invalid email"),
    description: z.array(z.string()).nonempty("At least one description is required"),
    brief: z.string().min(5, "Brief is required"),
    requirements: z.array(z.string()).nonempty("At least one requirement is required"),
    deliverables: z.array(z.string()).nonempty("At least one deliverable is required"),
  });

export const updateChallengeSchema = z.object({
    title: z.string().optional(),
    deadline: z.string().optional(),
    duration: z.string().optional(),
    prize: z.string().optional(),
    contactEmail: z.string().optional(),
    description: z.array(z.string()).optional(),
    brief: z.string().optional(),
    requirements: z.array(z.string()).optional(),
    deliverables: z.array(z.string()).optional(),
});
