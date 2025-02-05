import { TChallenge } from "@/types/challenge";
import {
  createChallenge as createChallengeAPI,
  updateChallenge as updateChallengeAPI,
  deleteChallenge as deleteChallengeAPI,
  getAllChallenges as getAllChallengesAPI,
  getChallengeStats as getChallengeStatsAPI,
} from "@/services/challenge.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const createChallenge =
//   (data: TChallenge): AppThunk =>
//   async (dispatch, getState) => {
//     try {
//       const response = await axios.post("/challenge/create", data);
//       const { challenge } = response.data;

//       console.log("challenge: ",challenge);
//       // Get the current state and append the new challenge
//       const { challenges, totalChallenges } = getState().challenges;

//       dispatch(
//         setChallenges({
//           challenges: [challenge, ...challenges], // Add new challenge to the list
//           total: totalChallenges + 1, // Increase total count
//         })
//       );

//       return challenge;
//     } catch (error: any) {
//       console.error("Error while creating challenge: ", error?.message);
//       dispatch(setError(error?.message || "Failed to create challenge"));
//     }
//   };

// export const getChallenges =
//   (page = 1): AppThunk =>
//   async (dispatch) => {
//     try {
//       dispatch(setLoading(true));

//       const response = await axios.get(`/challenge/get-all?page=${page}`);

//       const { challenges, totalChallenges } = response.data;

//       dispatch(setChallenges({ challenges, total: totalChallenges }));
//     } catch (error: any) {
//       console.error("Error fetching challenges:", error?.message);
//       dispatch(setError(error?.message || "Failed to fetch challenges"));
//     } finally {
//       dispatch(setLoading(false));
//     }
//   };

// export const getChallengeById = async (id: string) => {
//   try {
//     const response = await axios.get(`/challenge/get/${id}`);
//     const { challenge } = response.data;
//     return challenge;
//   } catch (error: any) {
//     console.error("Error while fetching challenge by id: ", error?.message);
//   }
// };

// export const deleteChallenge = async (id: string) => {
//   try {
//     const response = await axios.delete(`/challenge/delete/${id}`);
//     return response.data;
//   } catch (error: any) {
//     console.error("Failed to delete challenge: ", error?.message);
//   }
// };

// export const updateChallenge = async (id: string, data: TChallenge) => {
//   try {
//     const response = await axios.put(`/challenge/update/${id}`, data);
//     const { challenge } = response.data;
//     return challenge;
//   } catch (error: any) {
//     console.error("Error while updating challenge: ", error?.message);
//   }
// };

// export const getChallengeStats = (): AppThunk => async (dispatch: any) => {
//   try {
//     const response = await axios.get("/challenge/stats");
//     const { totalOngoing, totalCompleted, totalOpen } =
//       response.data.challengeStats;

//     dispatch(setStats({ totalOngoing, totalCompleted, totalOpen }));
//     return {
//       totalOngoing,
//       totalCompleted,
//       totalOpen,
//     };
//   } catch (error: any) {
//     console.error("Error while getting challenge stats: ", error?.message);
//   }
// };

export const createChallenge = createAsyncThunk(
  "challenges/create",
  async (data: TChallenge, { rejectWithValue }) => {
    try {
      const response = await createChallengeAPI(data);
      const { challenge } = response;
      return { challenge };
    } catch (error: any) {
      return rejectWithValue(
        error.response.data.message || "failed to create challenge"
      );
    }
  }
);

export const updateChallenge = createAsyncThunk(
  "challenge/update",
  async (
    { id, data }: { id: string; data: TChallenge },
    { rejectWithValue }
  ) => {
    try {
      const { challenge } = await updateChallengeAPI(id, data);
      return { id, challenge };
    } catch (error: any) {
      return rejectWithValue(
        error.response.data.message || "failed to update challenge"
      );
    }
  }
);

export const getAllChallenges = createAsyncThunk(
  "challenges/all",
  async (page: number, { rejectWithValue }) => {
    try {
      const response = await getAllChallengesAPI(page);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message || "failed to fetch");
    }
  }
);

export const deleteChallenges = createAsyncThunk(
  "challenges/delete",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await deleteChallengeAPI(id);
      return { id, message: response.message };
    } catch (error: any) {
      return rejectWithValue(error.response.data.message || "failed to delete");
    }
  }
);

export const getChallengeStats = createAsyncThunk(
  "challenges/stats",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getChallengeStatsAPI();
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response.data.message || "failed to get stats"
      );
    }
  }
);
