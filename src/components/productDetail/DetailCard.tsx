import { Link } from "react-router-dom";



// Define TypeScript interface
interface DetailCardProps {
    title: string | undefined;
    rating: number | undefined;
    price: number | undefined;
    concerned: string | undefined;
    description: string | undefined;
    image: string | undefined;
}




export default function DetailCard({ image, title, rating, price, concerned, description }: DetailCardProps) {



    // Calculate Stars
    const filledStars = Math.floor(rating ?? 0);
    const emptyStars = 5 - filledStars;



    return (

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">


            {/* Left - Image */}
            <div className="flex justify-center items-center">
                <img
                    src={image ?? "https://via.placeholder.com/400"}
                    alt={title ?? "Product Image"}
                    loading="lazy"
                    className="rounded-md w-full h-aut object-cover max-w-[600px]"
                />
            </div>



            {/* Right - Details */}
            <div className="flex flex-col justify-start">


                {/* title */}
                <h2 className="text-2xl font-semibold text-gray-900 leading-snug">
                    {title ?? "No Title"}
                </h2>



                {/* Rating */}
                <div className="flex items-center text-xl text-yellow-500 mt-1">
                    {"★".repeat(filledStars)}{"☆".repeat(emptyStars)} {rating ?? 0}
                </div>



                {/* Price */}
                <p className="text-green-600 font-bold text-xl mt-2">₹ {price ?? 0}</p>



                {/* Description */}
                <div className="mt-3 text-md text-gray-700 text-justify">
                    <p><strong>For Concerned of :</strong></p>
                    <p>{concerned ?? "No Concern"}</p>

                    <p className="mt-4"><strong>Description :</strong></p>
                    <p>{description ?? "No Description"}</p>
                </div>


                <Link to={'/checkout'}>
                    <button className="mt-5 px-16 py-2 font-semibold border-2 hover:cursor-pointer border-[#25758A] text-[#25758A] rounded hover:bg-teal-50 transition">
                        BUY NOW
                    </button>
                </Link>

            </div>


        </section>


    );


}
