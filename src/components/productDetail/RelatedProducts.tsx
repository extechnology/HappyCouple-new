import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductType } from "@/services/products/types"
import { useGetAllProducts } from "@/services/products/queries"
import ServerError from "../common/Error";
import { Link } from "react-router-dom";
import CardSkelton from "../Loaders/CardSkelton";



export default function RelatedProducts() {


    // Get All Products Data
    const { data: AllProducts, isLoading, isFetching, isError } = useGetAllProducts();



    // Handle Loading
    if (isLoading || isFetching) return <CardSkelton length={3} />



    // Handle Error
    if (isError) return <ServerError />



    // Responsive
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 640 },
            items: 2,
            slidesToSlide: 2,
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };



    return (


        <section className="pt-10  w-full h-auto">


            <h2 className="text-4xl font-semibold text-center mb-8">Related <span className="text-[#25758A]"> Products</span></h2>

            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                swipeable={true}
                focusOnSelect={true}
                keyBoardControl={true}
                transitionDuration={5000}
                slidesToSlide={1}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >

                {AllProducts?.slice(0, 12)?.map((solution: ProductType) => (

                    <div
                        key={solution?.id}
                        className="relative rounded-xl overflow-hidden shadow-md group mx-0 sm:mx-2"
                    >

                        <img
                            src={solution?.image}
                            alt={solution?.name}
                            loading="lazy"
                            className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                        />


                        <div className="absolute inset-0 bg-gradient-to-t from-[#25434E]/90 to-transparent" />


                        <div className="absolute bottom-6 left-6 z-20 text-white">

                            <p className="text-sm font-medium">{"★".repeat(solution?.rating ?? 0)} {solution?.rating}</p>
                            <p className="font-semibold text-base mt-1 max-w-xs">
                                {solution?.name}
                            </p>

                            <Link to={`/productdetail/${solution?.id}`}>
                                <button className="mt-4 hover:cursor-pointer px-4 py-2 bg-white text-black text-sm font-semibold rounded shadow-md transition-all duration-300 transform hover:bg-gray-200 hover:scale-105 hover:shadow-lg">
                                    Buy Now
                                </button>
                            </Link>

                        </div>


                    </div>
                ))}


            </Carousel>


        </section>


    )

}
