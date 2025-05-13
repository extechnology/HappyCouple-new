import { useMutation } from "@tanstack/react-query";
import { PostBookConsult , PostRequestCallback } from "../AllApi";



// Book Consult
export const useBookConsult = () => {

    return useMutation({

        mutationFn: async (data: FormData) => {

            return await PostBookConsult(data)

        },
        onError: (error) => {
            console.error("Failed to Book Consultation", error);
        },

    })

}





// Request Callback
export const useRequestCallback = () => {

    return useMutation({

        mutationFn: async (data: FormData) => {

            return await PostRequestCallback(data)

        },
        onError: (error) => {
            console.error("Failed to Request Callback", error);
        },

    })

}