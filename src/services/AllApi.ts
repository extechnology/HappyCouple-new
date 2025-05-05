import { CommonApi } from "./CommonApi";


const Base_url  = ""



// Login
export const Login = async (data : any)=>{

    return await CommonApi("POST", `${Base_url}/login`, data, {})

}