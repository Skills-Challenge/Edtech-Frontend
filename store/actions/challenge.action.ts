import { TChallenge } from "@/types/challenge";
import {
  createChallenge as createChallengeAPI,
  updateChallenge as updateChallengeAPI,
  deleteChallenge as deleteChallengeAPI,
  getAllChallenges as getAllChallengesAPI,
  getChallengeStats as getChallengeStatsAPI,
} from "@/services/challenge.service";
import { createAsyncThunk } from "@reduxjs/toolkit";


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
