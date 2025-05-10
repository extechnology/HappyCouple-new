import { useQuery } from "@tanstack/react-query"
import { GetHomeSlider } from "../AllApi"




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