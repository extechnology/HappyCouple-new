import { BlurFade } from "@/components/magicui/blur-fade"
import { Send } from "lucide-react"



export default function ContactUs() {


    return (



        <main className="w-full min-h-screen flex flex-col bg-[#D9D9D936]">

            <BlurFade delay={0.25} blur="12px" inView>

                <section className="mx-auto px-2 sm:px-20 py-5">


                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-6xl font-bold">
                            Get in <span className="text-[#145566]">touch</span>
                        </h2>
                        <p className="text-gray-600 mt-4">
                            Reach out, and let’s create a universe of possibilities together!
                        </p>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-stretch">


                        {/* Contact Form */}
                        <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-md h-full flex flex-col justify-between">


                            <h3 className="text-xl font-semibold mb-6">Let’s connect</h3>


                            <form className="space-y-4 flex-grow">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="border border-gray-300 rounded-lg px-4 py-3 w-full"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="border border-gray-300 rounded-lg px-4 py-3 w-full"
                                    />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="border border-gray-300 rounded-lg px-4 py-3 w-full"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="border border-gray-300 rounded-lg px-4 py-3 w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="border border-gray-300 rounded-lg px-4 py-3 w-full"
                                />
                                <textarea
                                    placeholder="Message"
                                    rows={4}
                                    className="border border-gray-300 rounded-lg px-4 py-3 w-full"
                                ></textarea>


                                <button
                                    type="submit"
                                    className="w-full hover:cursor-pointer flex items-center justify-center bg-[#145566] text-white py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-[#0f3f4c] hover:scale-105 hover:shadow-lg"
                                >
                                   <Send className="mr-2" size={20} /> Send it
                                </button>


                            </form>


                        </div>


                        {/* Image */}
                        <div className="md:col-span-3 flex justify-center h-full">
                            <img
                                src="https://cafemom.com/wp-content/uploads/2024/09/Couple_talking_to_doctor.png"
                                alt="Doctor Consulting Couple"
                                loading="lazy"
                                className="rounded-2xl w-full h-full object-cover shadow-md"
                            />
                        </div>


                    </div>


                </section>

            </BlurFade>


        </main>




    )


}
