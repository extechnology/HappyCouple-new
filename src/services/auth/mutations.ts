import { useMutation } from "@tanstack/react-query"
import { GoogleLogin, LoginUser, PostEmailVerification, PostResendOtp, PostResetPassword, RegisterUser } from "../AllApi"




// Google Auth
export const useGoogleAuth = () => {

    return useMutation({

        mutationFn: async (data: FormData) => {

            return await GoogleLogin(data)

        },
        onError: (err) => {

            console.error("Google Auth Error:", err);

        }

    })

}




// Register User 
export const useUserRegister = () => {

    return useMutation({

        mutationFn: async (data: any) => {

            return await RegisterUser(data)

        },
        onError: (error) => {
            console.error("Failed to Resister User:", error);
        },

    })

}





// Login User 
export const useUserLogin = () => {

    return useMutation({

        mutationFn: async (data: any) => {

            return await LoginUser(data)

        },
        onError: (error) => {

            console.error("Failed to Login User:", error);

        }

    })

}



// Email Verification 
export const useEmailVerification = () => {

    return useMutation({

        mutationFn: async (data: any) => {

            return await PostEmailVerification(data)

        },
        onError: (error) => {
            console.error("Failed to Email Verification", error);
        },

    })

}



// Resend Otp
export const useResendOtp = () => {

    return useMutation({

        mutationFn: async (data: any) => {

            return await PostResendOtp(data)

        },
        onError: (error) => {
            console.error("Failed to Resend Otp", error);
        },

    })

}





// Reset Password
export const useResetPassword = () => {

    return useMutation({

        mutationFn: async (data: any) => {

           return await PostResetPassword(data)

        },
        onError: (error) => {

            console.error("Failed to Reset Password", error);

        },
    })

}