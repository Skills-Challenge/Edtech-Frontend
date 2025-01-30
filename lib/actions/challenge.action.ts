import { AppThunk } from "@/store/store";
import axios from "../axios.config";
import { setChallenges, setError, setLoading, setStats } from "@/store/reducers/challengeReducer";
import { TChallenge } from "@/types/challenge";




export const createChallenge = async(data: TChallenge) => {
    try{
        const response = await axios.post("/challenge/create", data);
        const { challenge } = response.data;
        return challenge
    }catch(error: any){
        console.error("Error while creating challenge: ", error?.message)
    }
}



export const getChallenges = (page = 1): AppThunk => async (dispatch: any) => {
    try {
      dispatch(setLoading(true)); 
  
      const response = await axios.get(`/challenge/get-all?page=${page}`);
      const { challenges, totalChallenges } = response.data;

  
      dispatch(setChallenges({ challenges, total: totalChallenges }));
    } catch (error: any) {
      console.error("Error fetching challenges:", error?.message);
      dispatch(setError(error?.message));
    }
  };


export const getChallengeById = async(id: string) => {
  try{
     const response = await axios.get(`/challenge/get/${id}`)
     const { challenge } = response.data;
     return challenge
  }catch(error: any){
    console.error("Error while fetching challenge by id: ", error?.message)
  }
}


export const deleteChallenge = async(id: string) => {
  try{
    const response = await axios.delete(`/challenge/delete/${id}`)
    return response.data;
  }catch(error: any){
    console.error("Failed to delete challenge: ", error?.message)
  }
}

export const updateChallenge = async(id: string, data: TChallenge) => {
   try{
     const response = await axios.put(`/challenge/update/${id}`, data);
     const { challenge } = response.data
     return challenge
   } catch(error: any){
     console.error("Error while updating challenge: ", error?.message);
   }
}


export const getChallengeStats = (): AppThunk => async (dispatch: any) => {
  try{
    const response = await axios.get("/challenge/stats");
    const { totalOngoing , totalCompleted , totalOpen } = response.data.challengeStats


    dispatch(setStats({ totalOngoing , totalCompleted , totalOpen}))
    return {
      totalOngoing,
      totalCompleted,
      totalOpen
    };
  }catch(error: any){
    console.error("Error while getting challenge stats: ", error?.message)
  }
}