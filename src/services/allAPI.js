import { BASE_URL } from "./baseUrl"
import { commonAPI } from "./commonAPI"


//register
export const registerAPI= async(user)=>{
return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}

//Login

export const loginApi=async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
}