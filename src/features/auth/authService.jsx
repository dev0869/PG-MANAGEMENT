import axios from "axios";
import { config } from "../../Utils/axiosconfig";
import { BaseUrl } from "../../Utils/baseUrl";
const login = async (user) => {
  const response = await axios.post(`${BaseUrl}user/login`, user);
 
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  
  return response.data;
 
};
export const addtestride = async(data)=>{
  const response = await axios.post(`${BaseUrl}testride/add`, data)
  return response.data
}
// address
const address=async(value)=>{
  try{
    const response = await axios.put(`${BaseUrl}user/save-address`, value,config);
   
    return response.data; 
  }catch(err){
    return err
  }
 }
const getOrders = async () => {
  const response = await axios.get(`${BaseUrl}user/get-orders`, config);

  return response.data;
}

const getOrder= async () => {
  const response = await axios.get(`${BaseUrl}user/getallorders`, config);

  return response.data;
}


const forget_password_reset=async(email)=>{
  const response=await axios.post(`${BaseUrl}user/forgot-password-token`,email)
  return response && response.data;
}
const reset_password=async(data)=>{
   const response=await axios.put(`${BaseUrl}user/reset-password/${data.token}`,{password:data.password})
  return response.data;
}
const update_order=async(id,status)=>{
  const response=await axios.put(`${BaseUrl}user/order/update-order/${id}`,{status:status})
 return response.data;
}
const logout=async()=>{
  const response=await axios.post(`${BaseUrl}user/logout`)

 return response.data;
}
const authService = {
  login,
  getOrders,
  address,
  forget_password_reset,
  reset_password,
  getOrder,
  update_order,
  logout,

};

export default authService;
