import { useQuery } from "@tanstack/react-query"
import { GetHomeSlider, GetDocsConsultPrice } from "../AllApi"



// Doctors Price Type
interface DoctorsPriceType {
    id: number
    amount: string
}



// Get Home Slider Query
export const useGetHomeSlider = () => {

    return useQuery({

        queryKey: ["homeslider"],
        queryFn: async () => {

            const response = await GetHomeSlider()
            return response.data

        },
        staleTime: 1000 * 60 * 5,

    })

}





// Get Doctors Consult Price
export const useDcotorsPrice = () => {

    return useQuery<DoctorsPriceType>({

        queryKey: ["doctorsprice"],
        queryFn: async () => {

            const response = await GetDocsConsultPrice()
            return response.data as DoctorsPriceType

        },
        staleTime: 1000 * 60 * 5,

    })

}