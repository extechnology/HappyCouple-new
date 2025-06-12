import { motion } from "framer-motion";
import Slider from "../common/Slider";
import { BoxReveal } from "../magicui/box-reveal";
import { Link } from "react-router-dom";




const HeroSection = () => {


    // Define animation variants
    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };



    const buttonVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
    };



    return (

        <section className="w-full max-w-screen-2xl mx-auto py-3 sm:py-14 px-4 md:px-14 lg:px-5 xl:px-24 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden">



            {/* Heading Mobile */}
            <motion.h1
                className="text-3xl mb-8 md:text-4xl font-bold text-[#1B1B1B] leading-snug sm:hidden block text-center"
                initial="hidden"
                animate="visible"
                variants={textVariants}
            >
                <BoxReveal boxColor={"#25434E"} duration={0.6}>

                    <span className="relative inline-block">
                        <span className="relative inline-block z-10 text-4xl">S</span>
                        <img
                            src="/svgs/hero-text.svg"
                            alt="svg-logo"
                            loading="lazy"
                            className="absolute -top-3 -left-2 w-6 h-6 z-20"
                        />
                    </span>

                    cientifically Guided.<br />

                </BoxReveal>


                <BoxReveal boxColor={"#25434E"} duration={0.6}>

                    Globally Trusted.<br />

                </ BoxReveal>


                <BoxReveal boxColor={"#25434E"} duration={0.6}>

                    Personally{" "}

                    <span className="relative inline-block text-[#145566]">
                        Tailored.
                        <img
                            src="/svgs/hero-text-underline.svg"
                            alt="svg-logo"
                            loading="lazy"
                            className="absolute -bottom-1 left-0 w-full pointer-events-none"
                        />
                    </span>

                </BoxReveal>

            </motion.h1>



            {/* Image */}
            <div className="relative z-20 rounded-[20px] w-full max-w-xl">


                <Slider />


                {/* Top Left SVG icon */}
                <div className="absolute top-[-20px] left-[-24px] -z-1">
                    <img src="/svgs/Star-icon.svg" loading="lazy" className="w-[50px] h-[55px]" alt="svg-logo" />
                </div>


                {/* Bottom Right Dot Grid */}
                <div className="absolute bottom-[-40px] right-[-45px] w-64 h-64 rounded-full overflow-hidden -z-1 text-[#25434E]">

                    <svg id="patternId" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern
                                id="b"
                                patternUnits="userSpaceOnUse"
                                width="40"
                                height="40"
                                patternTransform="scale(0.6)"
                            >
                                <rect x="0" y="0" width="100%" height="100%" fill="none" />
                                <path
                                    d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                                    strokeWidth="1"
                                    stroke="none"
                                    fill="currentColor"
                                />
                            </pattern>
                        </defs>
                        <rect width="800%" height="800%" transform="translate(0,0)" fill="url(#b)" />
                    </svg>

                </div>


            </div>



            {/* Text Content */}
            <motion.div
                className="mt-10 lg:mt-0 lg:ml-20 z-10 lg:text-left"
                initial="hidden"
                animate="visible"
                variants={textVariants}
            >


                {/* Heading Desktop */}
                <h1 className="text-3xl md:text-6xl font-bold text-[#1B1B1B] leading-snug sm:block hidden">

                    <BoxReveal boxColor={"#25434E"} duration={0.6}>
                        <div>
                            <span className="relative inline-block">
                                <span className="relative inline-block z-10">S</span>
                                <img
                                    src="/svgs/hero-text.svg"
                                    alt="svg-logo"
                                    loading="lazy"
                                    className="absolute -top-10 -left-2 w-24 h-24 z-20 ponin"
                                />
                            </span>

                            cientifically Guided.<br />
                        </div>
                    </BoxReveal>

                    <BoxReveal boxColor={"#25434E"} duration={0.6}>

                        Globally Trusted.<br />

                    </BoxReveal>


                    <BoxReveal boxColor={"#25434E"} duration={0.6}>
                        <div className="pb-5">

                            Personally{" "}

                            <span className="relative inline-block text-[#204D5B]">
                                Tailored.
                                <img
                                    src="/svgs/hero-text-underline.svg"
                                    alt="svg-logo"
                                    loading="lazy"
                                    className="absolute -bottom-4 left-0 w-full pointer-events-none"
                                />
                            </span>

                        </div>
                    </BoxReveal>

                </h1>



                {/* Buttons */}
                <motion.div
                    className="mt-5 flex flex-col sm:flex-col sm:items-center sm:space-x-4 space-y-4 sm:space-y-4"
                    initial="hidden"
                    animate="visible"
                    variants={buttonVariants}
                >
                    
                    <Link to={'/aiconsult'}>
                        <button className="w-72 bg-[#25434E] hover:cursor-pointer text-white px-5 py-3 rounded-md font-semibold shadow-md transition duration-300 hover:bg-[#1b353d] hover:scale-105">
                            START SELF-ASSESSMENT
                        </button>
                    </Link>

                    <Link to={'/talktoexpert'}>
                        <button className="w-72 border-2 hover:cursor-pointer border-[#25434E] text-[#25434E] px-5 py-3 rounded-md font-semibold transition duration-300 hover:bg-[#25434E] hover:text-white hover:scale-105">
                            TALK TO AN EXPERT
                        </button>
                    </Link>

                    <Link to={'/treatmentplans'}>
                        <button className="w-72 bg-[#25434E] me-4 hover:cursor-pointer text-white px-5 py-3 rounded-md font-semibold shadow-md transition duration-300 hover:bg-[#1b353d] hover:scale-105">
                            EXPLORE TREATMENT PLANS
                        </button>
                    </Link>

                </motion.div>


            </motion.div>


        </section >
    );
};

export default HeroSection;
