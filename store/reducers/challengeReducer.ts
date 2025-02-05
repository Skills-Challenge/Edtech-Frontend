import { TChallenge } from "@/types/challenge";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createChallenge,
  deleteChallenges,
  getAllChallenges,
  getChallengeStats,
  updateChallenge,
} from "../actions/challenge.action";
import { toast } from "sonner";

type ChallengeState = {
  challenges: TChallenge[];
  fetchAllLoading: boolean;
  fetchSingleLoading: boolean;
  statsLoading: boolean;
  createLoading: boolean;
  updateLoading: boolean;
  deleteLoading: boolean;
  error: string | null;
  totalChallenges: number;
  stats: {
    totalOngoing: number;
    totalCompleted: number;
    totalOpen: number;
  };
};

const initialState: ChallengeState = {
  challenges: [],
  fetchAllLoading: false,
  statsLoading: false,
  fetchSingleLoading: false,
  createLoading: false,
  updateLoading: false,
  deleteLoading: false,
  error: null,
  totalChallenges: 0,
  stats: {
    totalOngoing: 0,
    totalCompleted: 0,
    totalOpen: 0,
  },
};

const challengeSlice = createSlice({
  name: "challenges",
  initialState,
  reducers: {
    resetChallengeState: () => initialState,
  },
  extraReducers: (builder) => {
    // handling adding a challenge
    builder
      .addCase(createChallenge.pending, (state) => {
        state.createLoading = true;
      })
      .addCase(createChallenge.fulfilled, (state, action) => {
        state.createLoading = false;
        state.challenges
          ? state.challenges.push(action.payload.challenge)
          : (state.challenges = [action.payload.challenge]);
        toast.success("challenge created success");
      })
      .addCase(createChallenge.rejected, (state, action) => {
        state.createLoading = false;
        toast.error(action.payload as string);
      });

    //   handling updating a challenge
    builder
      .addCase(updateChallenge.pending, (state) => {
        state.updateLoading = true;
      })
      .addCase(updateChallenge.fulfilled, (state, action) => {
        state.updateLoading = false;
        const { id, challenge } = action.payload;
        if (state.challenges) {
          const index = state.challenges.findIndex((item) => item._id === id);
          if (index !== -1) {
            state.challenges[index] = {
              ...state.challenges[index],
              ...challenge,
            } as TChallenge;
          }
        }
        toast.success("updated challenge success");
      })
      .addCase(updateChallenge.rejected, (state, action) => {
        state.updateLoading = false;
        toast.error(action.payload as string);
      });

    //   getting all the challenges
    builder
      .addCase(getAllChallenges.pending, (state) => {
        state.fetchAllLoading = true;
      })
      .addCase(getAllChallenges.fulfilled, (state, action) => {
        state.fetchAllLoading = false;
        state.challenges = action.payload.challenges;
        state.totalChallenges = action.payload.totalChallenges;
      })
      .addCase(getAllChallenges.rejected, (state) => {
        state.fetchAllLoading = false;
      });

    // deleting a challenge
    builder
      .addCase(deleteChallenges.pending, (state) => {
        state.deleteLoading = true;
      })
      .addCase(deleteChallenges.fulfilled, (state, action) => {
        state.deleteLoading = false;
        if (state.challenges) {
          state.challenges = state.challenges.filter(
            (challenge) => challenge._id !== action.payload.id
          );
        }
        toast.success("deleted challenge success");
      })
      .addCase(deleteChallenges.rejected, (state, action) => {
        state.deleteLoading = false;
        toast.error(action.payload as string);
      });

    // getting challenge stats
    builder
      .addCase(getChallengeStats.pending, (state) => {
        state.statsLoading = true;
      })
      .addCase(getChallengeStats.fulfilled, (state, action) => {
        state.stats = action.payload.challengeStats;
      })
      .addCase(getChallengeStats.rejected, (state) => {
        state.statsLoading = false;
      });
  },
});

export const { resetChallengeState } = challengeSlice.actions;

export default challengeSlice.reducer;
