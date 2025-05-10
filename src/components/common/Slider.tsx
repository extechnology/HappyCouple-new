import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { motion, AnimatePresence } from "framer-motion";
import { useGetHomeSlider } from "@/services/utils/queries";



export default function Slider() {



    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(1);


    // Get Home Slider Data
    const { data, isLoading, isFetching, isError } = useGetHomeSlider()



    useEffect(() => {

        if (!data || data.length <= 1) return;

        const interval = setInterval(() => {
            setDirection(1);
            setCurrentSlide((prev) => (prev + 1) % data.length);
        }, 5000);

        return () => clearInterval(interval);

    }, [data]);




    // Handle Loading and error
    if (isLoading || isFetching || isError) return (
        <div className="w-full h-full">
            <div className="w-full aspect-square bg-gray-200 rounded-[20px] animate-pulse" />
        </div>
    )



    return (


        <div className="relative w-full h-[73vh] rounded-[20px] overflow-hidden">

            <Carousel className="w-full h-full">

                <CarouselContent className="w-full h-full">

                    <AnimatePresence initial={false} custom={direction} mode="wait">

                        <CarouselItem key={currentSlide} className="w-full h-full">
                            <motion.img
                                key={data[currentSlide]}
                                src={data[currentSlide]}
                                alt={`Slide ${currentSlide + 1}`}
                                className="w-full h-full object-cover rounded-[20px]"
                                custom={direction}
                                initial={{ x: direction > 0 ? 300 : -300 }}
                                animate={{ x: 0 }}
                                exit={{ x: direction > 0 ? -300 : 300 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            />
                        </CarouselItem>

                    </AnimatePresence>

                </CarouselContent>

            </Carousel>

        </div>


    );
}
