import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostUserAddress, PostPlaceOrder, DeleteUserAddress, EditUserAddress } from "../AllApi";



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





// Edit User Address
export const useEditUserAddress = () => {

    const querclient = useQueryClient();

    return useMutation({

        mutationFn: async (data: FormData) => {

            if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

            const token = localStorage.getItem("token")

            const headers = { Authorization: `Bearer ${token}` }

            return await EditUserAddress(data, headers)

        },
        onSuccess: () => {

            querclient.invalidateQueries({ queryKey: ["useraddress"] });

        },
        onError: (error) => {
            console.error("Failed Edit Address", error);
        },

    })

}





// Delete User Address
export const useDeleteUserAddress = () => {

    const querclient = useQueryClient();

    return useMutation({

        mutationFn: async (id: number) => {

            if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

            const token = localStorage.getItem("token")

            const headers = { Authorization: `Bearer ${token}` }

            return await DeleteUserAddress(id, headers)

        },
        onSuccess: () => {

            querclient.invalidateQueries({ queryKey: ["useraddress"] });

        },
        onError: (error) => {
            console.error("Failed Delete Address", error);
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