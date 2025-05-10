import { useQuery } from "@tanstack/react-query"
import { GetAllProducts, GetSingleProduct } from "../AllApi"
import { ProductType } from "./types"



// Get All Products Query
export const useGetAllProducts = () => {

    return useQuery<ProductType[]>({

        queryKey: ["allproducts"],
        queryFn: async () => {

            const response = await GetAllProducts()
            return response.data as ProductType[]

        },
        staleTime: 1000 * 60 * 5,

    })

}




// Get Single Products Query
export const useGetSingleProducts = (id: string) => {

    return useQuery<ProductType>({

        queryKey: ["allproducts" , id],
        queryFn: async () => {

            const response = await GetSingleProduct(id)
            return response.data as ProductType

        },
        staleTime: 1000 * 60 * 5,

    })

}