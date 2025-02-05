"use client";
import { deleteCookie, setCookie } from "@/lib/utils";
import {
  resetUser,
  setIsAuthenticated,
  setIsAuthenticating,
  setUser,
} from "@/store/reducers/authReducer";
import axios from "@/lib/axios.config";
import { register } from "@/services/auth.service";
import { toast } from "sonner";
import { resetChallengeState } from "../reducers/challengeReducer";

export const login = async (email: string, password: string, dispatch: any) => {
  try {
    dispatch(setIsAuthenticating(true));
    const response = await axios.post("/auth/login", { email, password });
    const { user, token } = response.data;
    if (user) {
      setCookie("token", token, 7);
      dispatch(setUser(user));
      dispatch(setIsAuthenticated(true));
      toast.success("Logged in successfully", {
        description: "Welcome back! 🎉",
      });
    }
  } catch (error: any) {
    console.log("Login Failed!", error?.message);
    toast.error("Incorrect Email or Password", {
      description: "Please provide correct credentials",
    });
  } finally {
    dispatch(setIsAuthenticating(false));
  }
};

export const signup = async (
  name: string,
  email: string,
  password: string,
  dispatch: any
) => {
  try {
    const response = await register(name, email, password);
    const { user } = response;

    dispatch(setUser(user));
  } catch (error: any) {
    toast("failed to create account");
  } finally {
    dispatch(setIsAuthenticating(false));
  }
};

export const logout = async (dispatch: any) => {
  try {
    await axios.post("/auth/logout", {});
    deleteCookie("token");
    dispatch(resetUser());
    dispatch(resetChallengeState());
  } catch (error: any) {
    console.log("Logout failed!", error?.message);
    toast.error("failed to logout");
  }
};
