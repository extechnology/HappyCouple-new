import { useQuery } from "@tanstack/react-query"
import { GetUserOrders, GetUserSingleOrders } from "../AllApi";
import { OrderTypes } from "./types";



// Get All User Orders
export const useGetAllOrders = () => {

    return useQuery<OrderTypes[]>({

        queryKey: ["allorders"],
        queryFn: async () => {

            if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

            const token = localStorage.getItem("token")

            const headers = { Authorization: `Bearer ${token}` }

            const response = await GetUserOrders(headers)

            return response.data as OrderTypes[]

        },
        staleTime: 1000 * 60 * 5,

    })

}




// Get Single User Orders
export const useGetSingleOrders = (id: string) => {

    return useQuery<OrderTypes>({

        queryKey: ["singleorders" ,  id],
        queryFn: async () => {

            if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

            const token = localStorage.getItem("token")

            const headers = { Authorization: `Bearer ${token}` }

            const response = await GetUserSingleOrders(headers , id)

            return response.data as OrderTypes

        },
        staleTime: 1000 * 60 * 5,

    })

}