import { useMutation } from "@tanstack/react-query";
import { PostContactForm } from "../AllApi";



// Submit contact form
export const useContactForm = () => {

    return useMutation({

        mutationFn: async (data: any) => {

            return await PostContactForm(data)

        },
        onError: (error) => {

            console.error("Failed to Submit Contact Form", error);

        }

    })


}