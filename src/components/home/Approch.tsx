

export default function Approch() {


    
    // Scientific Points
    const scientificPoints = [
        {
            icon: "/svgs/Like-icon.svg",
            title: "Lifestyle Management and Nutraceutical Support",
            subtitle: "Our VitalCore Range",
        },
        {
            icon: "/svgs/Cube-icon.svg",
            title: "Mechanical support with devices",
            subtitle: "Our ErecSure vacuum devices",
        },
        {
            icon: "/svgs/Medcine-icon.svg",
            title: "Prescription Medications",
            subtitle: "Doctor -guided use of PDE5 inhibitors",
        },
        {
            icon: "/svgs/Head-icon.svg",
            title: "Second-line options and Referrals",
            subtitle: "If needed",
        },
    ];


    return (


        <>
            <section className="py-10 sm:py-10 px-2 md:px-8">


                <div className="max-w-7xl mx-auto text-center">


                    {/* Heading */}
                    <div className="relative bg-gradient-to-b from-[#A7E8E0] to-[#EAF5F6] rounded-t-[50px] py-12 px-6 sm:px-10">

                        <img
                            src="/svgs/Star-icon.svg"
                            alt="Decoration"
                            loading="lazy"
                            className="absolute -top-4 left-0 w-10 h-12 sm:w-14 sm:h-14"
                        />


                        <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 font-bold mb-9">
                            OUR SCIENTIFIC <br className="block sm:hidden" />

                            <span className="text-[#145566] relative ms-2">APPROACH

                                <img
                                    src="/svgs/hero-text-underline.svg"
                                    alt="svg-logo"
                                    loading="lazy"
                                    className="absolute -bottom-4 left-0 w-full pointer-events-none"
                                />

                            </span>
                        </h2>


                        <p className="text-gray-800 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                            We follow the EAU (European Association of Urology) treatment algorithm for erectile dysfunction,
                            ensuring a stepwise, evidence-based approach to every case
                        </p>

                    </div>


                    {/* Scientific Points */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-3 sm:mt-10">

                        {scientificPoints.map((point, index) => (

                            <div
                                key={index}
                                className="flex items-start gap-4 p-4 border border-[#25434E] rounded-xl"
                            >
                                <img src={point.icon} alt="icon" loading="lazy" className="w-6 h-6 mt-1" />

                                <div className="flex flex-col justify-center items-start sm:items-start">
                                    <h3 className="text-[#25434E] font-semibold leading-tight text-sm sm:text-lg">
                                        {point.title}
                                    </h3>
                                    <p className="text-gray-500 text-xs sm:text-sm mt-1">{point.subtitle}</p>
                                </div>

                            </div>

                        ))}

                    </div>


                </div>


            </section>


        </>


    )


}
