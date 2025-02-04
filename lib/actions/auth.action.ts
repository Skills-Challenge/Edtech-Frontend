"use client"
import { setIsAuthenticated, setIsAuthenticating, setUser } from "@/store/reducers/authReducer";
import { useAppDispatch } from "@/store/store"
import axios from "../axios.config";
import { deleteCookie, setCookie } from "../utils";

export const login = async(email: string , password: string , dispatch: any) => {
    try{
        dispatch(setIsAuthenticating(true));
        const response = await axios.post("/auth/login", { email , password})
        const { user, token } =  response.data
        setCookie("token", token,7)
        dispatch(setUser(user))
        dispatch(setIsAuthenticated(true))
    }catch(error: any){
        console.error("Login Failed!", error?.message)
    }finally{
        dispatch(setIsAuthenticating(false))
    }
}

export const signup = async(name: string, email: string, password: string, dispatch: any) => {
    try{
        const response = await axios.post("/auth/signup", {name , email, password})
        const { user } = response.data;

        dispatch(setUser(user));
    }catch(error: any){
        console.error("Sign up failed!", error?.message)
    }finally {
        dispatch(setIsAuthenticating(false))
    }
}


export const logout = async (dispatch: any) => {
    try{
        const response = await axios.post("/auth/logout", {})
        deleteCookie("token")
        dispatch(setIsAuthenticated(false))
        return response
    }catch(error: any){
        console.error("Logout failed!",error?.message)
    }
}