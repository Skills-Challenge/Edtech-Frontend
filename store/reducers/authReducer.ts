import { Tuser } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type authstate = {
  user: null | Tuser;
  isAuthenticated: boolean;
  isAuthenticating: boolean;
};
const initialState: authstate = {
  user: {
    email:"test@gmail.com",
    fullname:"test user",
    role:"admin"
  },
  isAuthenticated: false,
  isAuthenticating: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setIsAuthenticating: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticating = action.payload;
    },
    setUser: (state, action: PayloadAction<null | Tuser>) => {
      state.user = action.payload;
    },
    resetUser: () => initialState,
  },
});

export const { setIsAuthenticated, setIsAuthenticating, setUser, resetUser } =
  authSlice.actions;

export default authSlice.reducer;
