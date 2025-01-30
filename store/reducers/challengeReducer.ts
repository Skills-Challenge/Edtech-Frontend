import { TChallenge } from "@/types/challenge"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



type ChallengeState = {
    challenges: TChallenge[];
    loading: boolean;
    error: string | null;
    totalChallenges: number;
    stats: {
        totalOngoing: number,
        totalCompleted: number,
        totalOpen: number
    }
}

const initialState: ChallengeState = {
    challenges: [],
    loading: false,
    error: null,
    totalChallenges: 0,
    stats: {
        totalOngoing: 0,
        totalCompleted: 0,
        totalOpen: 0,
      },
}


const challengeSlice = createSlice({
    name: 'challenges',
    initialState,
    reducers: {
        setChallenges: (state, action: PayloadAction<{ challenges: TChallenge[]; total: number }>) => {
            state.challenges = action.payload.challenges;
            state.totalChallenges = action.payload.total;
        },
        setLoading: (state , action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
        setError: ( state , action: PayloadAction<string | null>) => {
            state.error = action.payload
        },
        setStats: (
            state,
            action: PayloadAction<{
              totalOngoing: number;
              totalCompleted: number;
              totalOpen: number;
            }>
          ) => {
            state.stats = action.payload;
          },
    }
})


export const { setChallenges , setLoading, setError , setStats } = challengeSlice.actions;

export default challengeSlice.reducer