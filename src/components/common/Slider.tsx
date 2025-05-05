import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { motion, AnimatePresence } from "framer-motion";



// Slider images 
const heroImages = [
    "/hero-image.jpeg",
    "https://media.istockphoto.com/id/518730373/photo/romantic-couple-enjoying-the-sunset-on-paris.jpg?s=612x612&w=0&k=20&c=LDBOVVJyZd_CaWxprENcLQwOvIerNP05Yn_vU7Dvvuc=",
];



export default function Slider() {


    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(1);


    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);



    return (


        <div className="relative w-full h-[73vh] rounded-[20px] overflow-hidden">

            <Carousel className="w-full h-full">

                <CarouselContent className="w-full h-full">

                    <AnimatePresence initial={false} custom={direction} mode="wait">

                        <CarouselItem key={currentSlide} className="w-full h-full">
                            <motion.img
                                key={heroImages[currentSlide]}
                                src={heroImages[currentSlide]}
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
