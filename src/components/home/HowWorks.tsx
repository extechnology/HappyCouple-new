

export default function HowWorks() {



    const steps = [
        {
            id: 1,
            title: "START WITH A SELF ASSESSMENT",
            description:
                "Take our AI-powered assessment based on global sexual wellness protocols to understand your current status.",
            button: "Get Started",
            image: "https://media.istockphoto.com/id/1400690125/photo/happy-and-loving-mature-caucasian-couple-enjoying-a-romantic-date-at-the-beach-together-on-a.jpg?s=612x612&w=0&k=20&c=dLsRK3CK98o5Fg5qvaYqxozTToWES_lBUMlZtdZ5T1Y=", // Replace with actual image path
        },
        {
            id: 2,
            title: "TALK TO AN EXPERT",
            description:
                "Get professional, non-judgemental guidance tailored to your assessment score and lifestyle.",
            button: "Get Started",
            image: "https://media.istockphoto.com/id/1470845982/photo/love-diversity-and-couple-hug-on-vacation-holiday-or-summer-trip-romantic-relax-smile-and.jpg?s=612x612&w=0&k=20&c=oVWd-IeMGfL4ToE0MCpbRdHPS9lnZFSfkXoq1JGuLEU=",
        },
        {
            id: 3,
            title: "BOOK A DOCTOR CONSULTATION",
            description:
                "If further evaluation needed, consult with our sexual health expert. The ₹300 is fully refunded when you begin treatment.",
            button: "Get Started",
            image: "https://media.istockphoto.com/id/1368004438/photo/shot-of-a-couple-enjoying-a-day-at-the-beach.jpg?s=612x612&w=0&k=20&c=hMi6N-u6baFHC-P8C-8X_5iFshdPPicx7BCrBGM8ARc=",
        },
        {
            id: 4,
            title: "BEGIN YOUR PERSONALISED TREATMENT PLAN",
            description:
                "Start with the right scientifically approved therapy for you—nutraceuticals, vacuum devices, or medications—as per EAU guidelines.",
            button: "Get Started",
            image: "https://t4.ftcdn.net/jpg/02/77/68/51/360_F_277685185_UAYxm224UPelni1rxsuAUZQbfhly0RpL.jpg",
        },
    ];




    return (

        <>

            <section className="py-8 sm:py-16 px-2 md:px-8">


                {/* Head */}
                <div className="text-center sm:mb-12 mb-8">
                    <div className="flex items-center justify-center gap-2">
                        <img
                            src="/svgs/How-arrow.svg"
                            loading="lazy"
                            alt="Arrow Icon"
                            className="w-14 h-14 sm:w-20 sm:h-20"
                        />
                        <h2 className="text-3xl md:text-4xl font-serif text-gray-800">
                            How It
                            <span className="text-[#145566] font-bold relative ms-2">Works

                                <img
                                    src="/svgs/hero-text-underline.svg"
                                    alt="svg-logo"
                                    loading="lazy"
                                    className="absolute -bottom-1 left-0 w-full pointer-events-none"
                                />

                            </span>
                        </h2>
                    </div>
                </div>


                {/* Steps */}
                <div className="grid md:grid-cols-2 gap-8 sm:gap-10 max-w-7xl mx-auto">

                    {steps.map((step) => (

                        <div
                            key={step.id}
                            className="relative h-[400px] rounded-xl text-white shadow-xl animate-in fade-in duration-1000"
                        >

                            {/* Image */}
                            <img
                                src={step.image}
                                alt={step.title}
                                loading="lazy"
                                className="w-full h-full object-cover absolute inset-0 rounded-xl"
                            />


                            {/* Background gradient  */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#EAF5F6]/5 to-[#25434E]/90 z-10 rounded-xl" />


                            {/* Number */}
                            <div className="absolute top-4 sm:top-36 sm:-left-0 left-1/2 transform -translate-x-1/2 z-10 bg-[#EAF5F6] border shadow-lg rounded-full p-2">
                                <span className="inline-block w-8 sm:w-12 h-8 sm:h-12 bg-[#25434E] text-white font-bold rounded-full text-center leading-[2rem] sm:leading-[3rem] text-2xl sm:text-3xl">
                                    {step.id}
                                </span>
                            </div>



                            <div className="relative z-20 p-6 flex flex-col justify-between h-full rounded-xl">

                                <div className="pt-10 flex flex-col justify-around h-full">
                                    <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-3 text-center">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm md:text-base leading-relaxed text-center">
                                        {step.description}
                                    </p>
                                </div>

                                <div className="text-center">

                                    <button className="mt-6 px-6 py-2 hover:cursor-pointer bg-white text-black text-sm font-semibold rounded-full shadow-md transition-all duration-300 transform hover:bg-gray-100 hover:scale-105 hover:shadow-lg group">
                                        {step.button}
                                        <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">⟶</span>
                                    </button>

                                </div>

                            </div>


                        </div>
                    ))}

                </div>


            </section>


        </>


    )


}
