import axios from "axios";
import { BaseUrl } from "../Utils/baseUrl";
import { config } from "../Utils/axiosconfig";
export const checkuserSignup = async (data) => {
  const response = await axios.post(`${BaseUrl}user/check`, data, config);
  return response.data;
};

export const signupUser = async (data) => {
  const response = await axios.post(`${BaseUrl}user/register/`, data, config);
  return response.data;
};
export const verifyUserLogin = async (data) => {
  const response = await axios.post(`${BaseUrl}user/verify`, data, config);
  return response.data;
};

export const forgotPasswordToken = async (data) => {
  const response = await axios.post(
    `${BaseUrl}user/forgot-password-token`,
    data,
    config
  );
  return response.data;
};

export const resetUserPassword = async (data) => {
  const response = await axios.put(
    `${BaseUrl}user/reset-password/${data.token}`,
    { password: data.password }
  );
  return response.data;
};

export const CheckResetPasswordUser = async (data) => {
  const response = await axios.get(
    `${BaseUrl}user/reset-password/${data.token}`
  );
  return response.data;
};

export const sendContactRequest = async (data) => {
  const response = await axios.post(`${BaseUrl}contact/add`, data);
  return response.data;
};
