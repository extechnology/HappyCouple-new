import { User, MessageSquare, FileText, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Connection() {


    return (

        <section className="px-2 py-12 text-center">


            <div className="max-w-7xl mx-auto p-0 sm:p-8">


                {/* Head */}
                <div className="relative">

                    <img
                        src="/svgs/How-arrow.svg"
                        alt="svg-logo"
                        loading="lazy"
                        className="absolute h-12 w-12 sm:h-16 sm:w-16 top-0 right-0 pointer-events-none"
                    />


                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-[#121212] mb-4">
                        Ready to take the first step toward better <br className="hidden sm:inline" />
                        performance and connection<span className="text-[#121212]">?</span>
                    </h2>


                    <p className="text-[#5f6368] text-base md:text-lg mb-10">
                        Start with our quick, private self-assessment or talk to an expert now
                    </p>

                </div>



                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-5 sm:py-14">


                    {/* Self Assessment */}
                    <div className="bg-[#25434E] text-white rounded-xl p-8 shadow-md flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                        <User className="h-6 w-6 mb-4" />
                        <p className="mb-4 font-medium">Start Self-Assessment</p>
                        <Link to="/aiconsult">
                            <button className="bg-white hover:cursor-pointer text-[#1f3f45] font-semibold px-5 py-2 rounded shadow transition-transform transform hover:scale-105 hover:shadow-md">
                                Begin Now
                            </button>
                        </Link>
                    </div>


                    {/* Talk to Expert */}
                    <div className="bg-white text-[#1f3f45] rounded-xl p-8 shadow-md flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                        <MessageSquare className="h-6 w-6 mb-4" />
                        <p className="mb-4 text-gray-600">Talk to an Expert</p>
                        <Link to="/talktoexpert">
                            <button className="bg-black hover:cursor-pointer text-white font-semibold px-5 py-2 rounded shadow transition-transform transform hover:scale-105 hover:shadow-md">
                                Connect Now
                            </button>
                        </Link>
                    </div>


                    {/* Book Consultation */}
                    <div className="bg-[#25434E] text-white rounded-xl p-8 shadow-md flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                        <FileText className="h-6 w-6 mb-4" />
                        <p className="mb-4 text-white">Book Consultation</p>
                        <Link to="/talktodoctor">
                            <button className="bg-white hover:cursor-pointer text-[#1f3f45] font-semibold px-5 py-2 rounded shadow transition-transform transform hover:scale-105 hover:shadow-md">
                                Book Consultation
                            </button>
                        </Link>
                    </div>


                    {/* Contact Us */}
                    <div className="bg-white text-[#1f3f45] rounded-xl p-8 shadow-md flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                        <PhoneCall className="h-6 w-6 mb-4" />
                        <p className="mb-4 text-gray-600">Contact Us</p>
                        <Link to="/contactus">
                            <button className="bg-black hover:cursor-pointer text-white font-semibold px-5 py-2 rounded shadow transition-transform transform hover:scale-105 hover:shadow-md">
                                Contact Us
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
