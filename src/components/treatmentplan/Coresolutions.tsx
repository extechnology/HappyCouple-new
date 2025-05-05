import { Link } from "react-router-dom";


export default function Coresolutions() {


    const coreSolutions = [
        {
            id: 1,
            image: "/Lygin.png",
            title:
                "VitalCore Solution – Nutraceutical Therapy (₹1470 for 1-Month Supply)",
            rating: "4.6 ratings",
        },
        {
            id: 2,
            image: "/Erection.png",
            title:
                "ErecSureSolution – Vacuum Therapy (₹6000 For Device, Free Consultation)",
            rating: "4.6 ratings",
        },
        {
            id: 3,
            image: "/Med.jpg",
            title:
                "PharmaMax Solution – Prescription Based & Advanced Treatment Plan",
            rating: "4.6 ratings",
        },
    ];


    return (


        <>

            <div className="bg-white py-10 sm:py-16 px-2 md:px-12">


                {/* Heading */}
                <div className="text-center mb-12">

                    <h2 className="text-3xl md:text-4xl font-serif text-gray-800 font-bold">
                        OUR CORE
                        <span className="text-[#145566] relative ms-2">SOLUTIONS

                            <img
                                src="/svgs/hero-text-underline.svg"
                                alt="svg-logo"
                                loading="lazy"
                                className="absolute -bottom-5 left-0 w-full pointer-events-none"
                            />

                        </span>
                    </h2>

                </div>


                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

                    {coreSolutions.map((solution) => (

                        <div
                            key={solution.id}
                            className="relative rounded-xl overflow-hidden shadow-md group"
                        >

                            <img
                                src={solution.image}
                                alt={solution.title}
                                loading="lazy"
                                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                            />


                            <div className="absolute inset-0 bg-gradient-to-t from-[#25434E]/90 to-transparent" />


                            <div className="absolute bottom-6 left-6 z-20 text-white">
                                <p className="text-sm font-medium">{solution.rating}</p>
                                <p className="font-semibold text-base mt-1 max-w-xs">
                                    {solution.title}
                                </p>

                                <Link to={'/productdetail'}>
                                    <button className="mt-4 hover:cursor-pointer px-4 py-2 bg-white text-black text-sm font-semibold rounded shadow-md transition-all duration-300 transform hover:bg-gray-200 hover:scale-105 hover:shadow-lg">
                                        Buy Now
                                    </button>
                                </Link>

                            </div>


                        </div>

                    ))}

                </div>


            </div>


        </>


    )




}
