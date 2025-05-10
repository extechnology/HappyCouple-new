import { CommonApi } from "./CommonApi";


const Base_Url = "http://localhost:8000"





// User Register
export const RegisterUser = async (data: any) => {

    return await CommonApi("POST", `${Base_Url}/register/`, data, {})

}



// User Login
export const LoginUser = async (data: any) => {

    return await CommonApi("POST", `${Base_Url}/api/token/`, data, {})

}



// Google Auth
export const GoogleLogin = async (data: FormData) => {

    return await CommonApi("POST", `${Base_Url}/google-auth/`, data, {})

}



// Email Verification
export const PostEmailVerification = async (data: any) => {

    return await CommonApi("POST", `${Base_Url}/verify-otp/`, data, {})

}



// Resend Otp
export const PostResendOtp = async (data: any) => {

    return await CommonApi("POST", `${Base_Url}/resend-otp/`, data, {})

}



// Reset Password
export const PostResetPassword = async (data: any) => {

    return await CommonApi("POST", `${Base_Url}/reset-password/`, data, {})

}



// Get All Products
export const GetAllProducts = async () => {

    return await CommonApi("GET", `${Base_Url}/product/`, "", {})

}



// Get Single Product
export const GetSingleProduct = async (id: string) => {

    const params = new URLSearchParams({ pk: id })

    return await CommonApi("GET", `${Base_Url}/single-product/?${params.toString()}`, "", {})

}


// Get Home Slider
export const GetHomeSlider = async () => {

    return await CommonApi("GET", `${Base_Url}/home-slier/`, "", {})

}