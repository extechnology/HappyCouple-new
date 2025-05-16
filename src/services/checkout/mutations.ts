import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostUserAddress, PostPlaceOrder } from "../AllApi";



// Add User Address
export const useAddUserAddress = () => {

    const querclient = useQueryClient();

    return useMutation({

        mutationFn: async (data: FormData) => {

            if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

            const token = localStorage.getItem("token")

            const headers = { Authorization: `Bearer ${token}` }

            return await PostUserAddress(data, headers)

        },
        onSuccess: () => {

            querclient.invalidateQueries({ queryKey: ["useraddress"] });

        },
        onError: (error) => {
            console.error("Failed Add Address", error);
        },

    })

}




// Place Order
export const useplaceOrder = () => {

    return useMutation({

        mutationFn: async (data: FormData) => {

            if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

            const token = localStorage.getItem("token")

            const headers = { Authorization: `Bearer ${token}` }

            return await PostPlaceOrder(data, headers)

        },
        onError: (error) => {
            console.error("Failed to Place Order", error);
        },

    })

}