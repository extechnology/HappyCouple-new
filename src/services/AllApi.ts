import { CommonApi } from "./CommonApi";


const Base_Url = "https://server.happycouplesolutions.com"




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




// Get Doctors
export const GetDoctors = async () => {

    return await CommonApi("GET", `${Base_Url}/doctors/`, "", {})

}



// Book Consult
export const PostBookConsult = async (data: FormData) => {

    return await CommonApi("POST", `${Base_Url}/initiate-payment-for-talk-to-doctor/`, data, {})

}




// Request Callback
export const PostRequestCallback = async (data: FormData) => {

    return await CommonApi("POST", `${Base_Url}/talk-to-expert-enquiry/`, data, {})

}




// Get User saved address
export const GetUserAddress = async (headers: any) => {

    return await CommonApi("GET", `${Base_Url}/user-personal-information/`, "", headers)

}



// Add User Address
export const PostUserAddress = async (data: FormData, headers: any) => {

    return await CommonApi("POST", `${Base_Url}/user-personal-information/`, data, headers)

}



// Place Order
export const PostPlaceOrder = async (data: FormData, headers: any) => {

    return await CommonApi("POST", `${Base_Url}/initiate-payment-for-order/`, data, headers)

}



// Get Verify Order
export const GetVerifyOrder = async (id: string, headers: any) => {

    const params = new URLSearchParams({ transaction_id: id })

    return await CommonApi("GET", `${Base_Url}/verify-orders/?${params.toString()}`, "", headers)

}





// Get User Orders
export const GetUserOrders = async (headers: any) => {

    return await CommonApi("GET", `${Base_Url}/user-orders/`, "", headers)

}