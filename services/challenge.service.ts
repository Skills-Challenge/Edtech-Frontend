import { TChallenge } from "@/types/challenge";
import axios from "@/lib/axios.config";

export const createChallenge = async (
  data: TChallenge
): Promise<{ challenge: TChallenge }> => {
  try {
    const response = await axios.post("/challenge/create", data);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getAllChallenges = async (
  page = 1
): Promise<{ challenges: TChallenge[]; totalChallenges: number }> => {
  try {
    const response = await axios.get(`/challenge/get-all?page=${page}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getChallengeById = async (
  id: string
): Promise<{ challenge: TChallenge }> => {
  try {
    const response = await axios.get(`/challenge/get/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deleteChallenge = async (
  id: string
): Promise<{ message: string }> => {
  try {
    const response = await axios.delete(`/challenge/delete/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updateChallenge = async (
  id: string,
  data: TChallenge
): Promise<{ challenge: TChallenge }> => {
  try {
    const response = await axios.put(`/challenge/update/${id}`, data);
    return response.data;
  } catch (error: any) {
    console.error("Error while updating challenge: ", error);
    throw new Error(error);
  }
};

export const getChallengeStats = async (): Promise<{
  challengeStats: {
    totalOngoing: any;
    totalCompleted: any;
    totalOpen: any;
  };
}> => {
  try {
    const response = await axios.get("/challenge/stats");
    return response.data;
  } catch (error: any) {
    console.error("Error while getting challenge stats: ", error);
    throw new Error(error);
  }
};
