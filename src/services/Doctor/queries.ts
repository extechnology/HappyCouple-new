import { useQuery } from "@tanstack/react-query"
import { GetDoctors } from "../AllApi"
import { DoctorTypes } from "./types"


// Get All Products Query
export const useGetDoctors = () => {

    return useQuery<DoctorTypes[]>({

        queryKey: ["doctors"],
        queryFn: async () => {

            const response = await GetDoctors()
            return response.data as DoctorTypes[]

        },
        staleTime: 1000 * 60 * 5,

    })

}