import { Tuser } from "@/types/user";
import axios from "@/lib/axios.config";

export const register = async (
  name: string,
  email: string,
  password: string
): Promise<{ user: Tuser }> => {
  try {
    const response = await axios.post("/auth/signup", {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

// logging in service
export const login = async (
  email: string,
  password: string
): Promise<{ user: Tuser; token: string }> => {
  try {
    const response = await axios.post("/auth/login", { email, password });
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
