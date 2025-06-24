import { useMutation } from "@tanstack/react-query";
import { PostContactForm , PostAiConsultData } from "../AllApi";



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



// Post Ai-consult Data
export const useAiConsult = () => {

    return useMutation({

        mutationFn: async (data: FormData) => {

            return await PostAiConsultData(data)

        },
        onError: (error) => {

            console.error("Failed to Submit Ai-consult", error);

        }

    })

}