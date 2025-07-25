import { useQuery } from "@tanstack/react-query"
import { GetDoctors , GetVerifyBookconsult } from "../AllApi"
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





// Get Verify Book Consult
export const useGetVerifyBookConsult = (id: string) => {

    return useQuery({

        queryKey: ["verifybookconsult"],
        queryFn: async () => {

            const response = await GetVerifyBookconsult(id)

            return response.data 

        },
        staleTime: 1000 * 60 * 5,

    })

}