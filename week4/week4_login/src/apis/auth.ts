import * as axios from "axios";
import { useLocalStorage } from "../hooks/useLocalStorage";
import type {
    RequestSignupDto,
    RequestSigninDto,
    ResponseSignupDto,
    ResponseSigninDto,
    ResponseMyInfoDto
} from "../types/auth";
import { axiosInstance } from "./axios";
import { LOCAL_STORAGE_KEY } from "../constants/key";

export const postSignup = async (body: RequestSignupDto)
:Promise<ResponseSignupDto> => {
    const { data } = await axiosInstance.post(
       `/v1/auth/signup`,
         body,
    );

    return data;
}

export const postSignin = async (body: RequestSigninDto)
:Promise<ResponseSigninDto> => {
    const { data } = await axiosInstance.post(
        `/v1/auth/signin`,
         body,
    );

    return data;
}

export const getMyInfo = async ():Promise<ResponseMyInfoDto> => {
    const {getItem} = useLocalStorage(LOCAL_STORAGE_KEY.accessToken)
    const { data } = await axiosInstance.get(
        `/v1/users/me`, {
            headers: {
                Authorization
                : `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }
    );

    return data;
}