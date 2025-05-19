import { useQuery } from "@tanstack/react-query"
import { GetUserAddress, GetVerifyOrder } from "../AllApi";
import { PaymentResponseType } from "./types";
import { UserAddressTypes } from "./types";


// Get All User saved address
export const useGetUserAddress = () => {

    return useQuery<UserAddressTypes[]>({

        queryKey: ["useraddress"],
        queryFn: async () => {

            if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

            const token = localStorage.getItem("token")

            const headers = { Authorization: `Bearer ${token}` }

            const response = await GetUserAddress(headers)

            return response.data as UserAddressTypes[]

        },

        staleTime: 1000 * 60 * 5,

    })

}



// Get Verify Order
export const useGetVerifyOrder = (id: string) => {

    return useQuery<PaymentResponseType>({

        queryKey: ["verifyorder"],
        queryFn: async () => {

            if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

            const token = localStorage.getItem("token")

            const headers = { Authorization: `Bearer ${token}` }

            const response = await GetVerifyOrder(id, headers)

            return response.data as PaymentResponseType

        },

        staleTime: 1000 * 60 * 5,

    })

}