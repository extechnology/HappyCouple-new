import { Link } from "react-router-dom";
import { ProductType } from "@/services/products/types";
import { useProduct } from "@/context/Productcontext";



// Define TypeScript interface
interface DetailCardProps {
    productData: ProductType
}



export default function DetailCard({ productData }: DetailCardProps) {


    // Context 
    const { setProduct } = useProduct();



    // Calculate Stars
    const filledStars = Math.floor(productData?.rating ?? 0);
    const emptyStars = 5 - filledStars;




    return (

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">


            {/* Left - Image */}
            <div className="flex justify-center items-center">
                <img
                    src={productData?.image ?? "https://via.placeholder.com/400"}
                    alt={productData?.name ?? "Product Image"}
                    loading="lazy"
                    className="rounded-md w-full h-aut object-cover max-w-[600px]"
                />
            </div>



            {/* Right - Details */}
            <div className="flex flex-col justify-start">


                {/* title */}
                <h2 className="text-2xl font-semibold text-gray-900 leading-snug">
                    {productData?.name ?? "No Title"}
                </h2>



                {/* Rating */}
                <div className="flex items-center text-xl text-yellow-500 mt-1">
                    {"★".repeat(filledStars)}{"☆".repeat(emptyStars)} {productData?.rating ?? 0}
                </div>



                {/* Price */}
                <p className="text-green-600 font-bold text-xl mt-2">₹ {productData?.price ?? 0}</p>



                {/* Description */}
                <div className="mt-3 text-md text-gray-700 text-justify">

                    {productData?.title_concern && (
                        <div className="mb-3">
                            <p className="text-black"><strong>{productData?.title_concern.toUpperCase()} :</strong></p>
                            <p>{productData?.concern}</p>

                        </div>
                    )}

                    {productData?.title_description && (
                        <>
                            <p className="text-black"><strong>{productData?.title_description.toUpperCase()} :</strong></p>
                            <p>{productData?.description}</p>

                        </>
                    )}

                </div>


                <Link to={'/checkout'}>
                    <button onClick={() => setProduct(productData)} className="mt-5 px-16 py-2 font-semibold border-2 hover:cursor-pointer border-[#25758A] text-[#25758A] rounded hover:bg-teal-50 transition">
                        BUY NOW
                    </button>
                </Link>

            </div>


        </section>


    );


}
