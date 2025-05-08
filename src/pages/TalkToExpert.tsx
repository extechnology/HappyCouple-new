import { MessageCircle, PhoneCallIcon, PhoneIncoming } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function TalkToExpert() {


    return (

        <main className="py-12 px-4 sm:px-6 lg:px-8">


            <BlurFade delay={0.25} blur="12px" inView>

                <div className="max-w-6xl mx-auto text-center">



                    <h2 className="font-serif text-4xl sm:text-5xl text-gray-900">Talk to Expert</h2>

                    <p className="mt-2 italic text-gray-500">Connect with our care advisor instantly.</p>



                    <div className="mt-8 space-y-4 flex flex-col justify-center items-center">
                        <a
                            href="tel:+919020200100"
                            className="w-52 sm:w-96 bg-[#145566] flex items-center justify-center text-white text-lg font-medium py-3 rounded-xl text-center transition duration-300 hover:bg-[#0e404e]"
                        >
                            Call Now <PhoneCallIcon className="ml-2" size={20} />
                        </a>
                        <a
                            href="https://wa.me/919020200100"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-52 sm:w-96 border-2 flex items-center justify-center border-[#145566] text-[#145566] text-lg font-medium py-3 rounded-xl text-center transition duration-300 hover:bg-[#145566] hover:text-white"
                        >
                            Start Whatsapp Chat <MessageCircle className="ml-2" size={20} />
                        </a>
                    </div>






                    <form className="mt-10 space-y-10">


                        <div>
                            <label className="block text-left text-gray-700 mb-1" htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Full Name"
                                className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#145566]"
                            />
                        </div>



                        <div>
                            <label className="block text-left text-gray-700 mb-1" htmlFor="phone">Phone Number (Whatsapp preferred)</label>
                            <input
                                id="phone"
                                type="text"
                                placeholder="eg: +91 1234567890"
                                className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#145566]"
                            />
                        </div>



                        <div>
                            <label className="block text-left text-gray-700 mb-1" htmlFor="email">Email ID (Optional)</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="email@example.com"
                                className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#145566]"
                            />
                        </div>



                        <div>
                            <label className="block text-left text-gray-700 mb-1" htmlFor="time">Preferred Time to Call (Optional)</label>
                            <div className="grid grid-cols-2 gap-4">
                                <select className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#145566]">
                                    <option>Date</option>
                                    {/* Populate date options here */}
                                </select>
                                <select className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#145566]">
                                    <option>Time</option>
                                    {/* Populate time options here */}
                                </select>
                            </div>
                        </div>



                        <div>
                            <label className="block text-left text-gray-700 mb-1" htmlFor="concern">Health Concern (Optional, Helps Us Assign the Right Doctor)</label>
                            <select
                                id="concern"
                                className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#145566]"
                            >
                                <option>Erectile dysfunction</option>
                                {/* Populate other concerns here */}
                            </select>
                        </div>



                        <p className="text-gray-900">Can't talk right now? Let us call you back at your convenience.</p>


                        <button
                            type="submit"
                            className="w-full mt-2 flex items-center justify-center bg-[#145566] text-white text-lg font-medium py-3 rounded-xl transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-[#0e404d] hover:scale-105"
                        >
                            <PhoneIncoming size={20} className="mr-2" />  Request Callback
                        </button>


                    </form>


                </div>

            </BlurFade>

        </main>



    )
}
