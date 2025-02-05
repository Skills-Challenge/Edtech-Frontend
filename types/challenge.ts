export type TChallenge = {
    _id: string;
    title: string;
    startTime: string;
    deadline: string;
    duration: string;
    prize: string;
    contactEmail: string;
    description: [string, ...string[]]; // Ensure at least one element
    brief: string;
    requirements: [string, ...string[]]; // Ensure at least one element
    deliverables: [string, ...string[]];
    status: string;
    participants?: string[];  
  };
  