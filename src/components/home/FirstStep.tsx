

export default function FirstStep() {

    return (

        <>

            <section className="bg-gradient-to-r from-[#25434E] to-[#000000]/90 text-white px-2 py-16 md:px-12">


                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center mt-24">


                    {/* Left Images */}
                    <div className="relative flex justify-center">


                        <div className="space-y-6 relative">


                            <div className="absolute -top-32  left-1/3 -translate-x-1/2 -translate-y-1/2 w-16 h-1 bg-[#60cfcf] rounded-full" />


                            {/* Arrows */}
                            <div className="absolute -top-20 right-10 ">

                                <img src="/svgs/Arrows-Up.svg" alt="svg-logo" loading="lazy" />

                            </div>


                            <div className="w-52 h-60 rounded-lg overflow-hidden shadow-lg absolute z-30 top-0 right-1/2 sm:translate-x-1/12 translate-x-1/6  -translate-y-1/2">
                                <img
                                    src="https://media.istockphoto.com/id/1446035173/photo/love-happy-and-couple-piggy-back-on-road-path-in-arizona-desert-in-usa-for-romantic-getaway.jpg?s=612x612&w=0&k=20&c=6FWDev2sf_NmftDx4qJbRJImHiZSQsq9HtQcu6uKW9E="
                                    alt="Happy Couple"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>


                            <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg z-10 relative">
                                <img
                                    src="https://media.istockphoto.com/id/1168107752/photo/he-tells-me-exactly-what-i-want-to-hear.jpg?s=612x612&w=0&k=20&c=I3j3KNnJQWHgFFPChlqyY-w8K2n3iHjIbThBnizGGmM="
                                    alt="Consultation"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>


                        </div>


                    </div>



                    {/* Right Content */}
                    <div className="text-center md:text-left space-y-6">


                        <h2 className="text-3xl md:text-4xl font-bold">
                            Ready to take the <span className="text-[#60cfcf]">first step</span> ?
                        </h2>


                        <p className="text-lg md:text-xl text-gray-300">
                            Start your journey towards better health and wellness
                        </p>


                        <button className="mt-4 cursor-pointer inline-flex items-center justify-center px-6 py-3 bg-white text-black text-sm font-semibold rounded-md shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group">
                            Schedule a consultation
                            <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                        </button>

                    </div>


                </div>


            </section>


        </>


    )


}
