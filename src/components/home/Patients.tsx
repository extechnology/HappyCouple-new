import { Quote } from "lucide-react";


export default function Patients() {


    // Testimonials Data
    const testimonials = [
        {
            quote:
                "I had doubts at first. The self-assessment + doctor call gave me a clear path. And I got my ₹300 back when I started treatment",
            name: "Rohan.S",
            age: "34 years old",
            image: "/Rohan.jpg",
        },
        {
            quote:
                "I didn’t want to take pills blindly. Their step-by-step approach helped me find a safe, effective solution",
            name: "Ajaya.M",
            age: "41 years old",
            image: "/Ajaya.jpg",
        },
    ];




    return (



        <div className="py-5 sm:py-12 px-2 sm:px-6 lg:px-8 relative overflow-hidden">


            <div className="max-w-7xl mx-auto text-center">

                {/* Heading */}
                <div className="relative bg-gradient-to-b from-[#A7E8E0] to-[#EAF5F6] rounded-t-[50px] pt-10 sm:pt-20 pb-0 sm:pb-5 px-2 sm:px-10">

                    <img
                        src="/svgs/Star-icon.svg"
                        alt="Decoration"
                        loading="lazy"
                        className="absolute -top-4 left-0 w-10 h-12 sm:w-14 sm:h-14"
                    />

                    <h2 className="text-3xl md:text-4xl font-bold mb-8 relative">
                        WHAT OUR PATIENTS<span className="text-[#145566] ms-2">SAY</span>
                        <img
                            src="/svgs/hero-text-underline.svg"
                            alt="svg-logo"
                            loading="lazy"
                            className="absolute -bottom-4 left-1/3 sm:left-1/2 pointer-events-none"
                        />
                    </h2>

                </div>




                {/* Testimonials */}
                <div className="mt-10 flex flex-col items-center gap-6">

                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl shadow-md flex flex-col md:flex-row items-center w-full max-w-4xl overflow-hidden"
                        >


                            {/* Content for mobile */}
                            <div className="flex flex-col md:hidden p-6 w-full">


                                <div className="flex gap-2 items-start mb-3">
                                    <Quote size={28} color="#145566" className="transform -scale-x-100" />
                                    <p className="text-[#333] text-sm leading-relaxed text-justify">
                                        {t.quote}
                                    </p>
                                </div>

                                <div className="flex flex-col items-center mt-4">

                                    <div className="w-32 h-32">
                                        <img
                                            src={t.image}
                                            loading="lazy"
                                            alt={t.name}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>

                                    <div className="mt-2 text-center">
                                        <p className="text-[#004C5B] font-semibold text-sm">{t.name}</p>
                                        <p className="text-gray-500 text-xs">{t.age}</p>
                                    </div>

                                </div>


                            </div>


                            {/* Content for desktop */}
                            <div className="hidden md:flex flex-1 p-6 flex-col gap-3">

                                <div className="flex justify-center gap-5">
                                    <Quote size={48} color="#145566" className="transform -scale-x-100" />
                                    <p className="text-[#333] text-base leading-relaxed text-justify">
                                        {t.quote}
                                    </p>
                                </div>

                                <div className="mt-2 px-14">
                                    <p className="text-[#004C5B] font-semibold text-base text-start">
                                        {t.name}
                                    </p>
                                    <p className="text-gray-500 text-sm text-start">{t.age}</p>
                                </div>

                            </div>


                            <div className="hidden md:block w-48 h-48">
                                <img
                                    src={t.image}
                                    loading="lazy"
                                    alt={t.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>


                        </div>
                    ))}

                </div>

            </div>

        </div>
    )


}
