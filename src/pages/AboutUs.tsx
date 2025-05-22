import { BlurFade } from "@/components/magicui/blur-fade"




export default function AboutUs() {



    return (


        <main className="py-5 sm:py-12 px-2 md:px-12">


            <BlurFade delay={0.25} blur="12px" inView>

                {/* About */}
                <section className="max-w-7xl mx-auto px-0 text-center">


                    {/* Head */}
                    <div className="relative">
                        <h2 className="text-3xl md:text-4xl font-bold mb-10 relative">
                            About<span className="text-[#145566] ms-2">US</span>
                            <img
                                src="/svgs/hero-text-underline.svg"
                                alt="svg-logo"
                                loading="lazy"
                                className="absolute w-24 -bottom-2 left-1/3 sm:left-1/2 pointer-events-none"
                            />
                        </h2>
                    </div>


                    <div className="space-y-8 text-justify text-base md:text-lg leading-loose">
                        <p>
                            Welcome to Happy Couple Solution, We provide accessible and confidential solutions designed to
                            improve relationship happiness, wellness, and satisfaction. Specializing in innovative scientific
                            approaches, we offer high-quality care to address challenges such as stress, confidence issues, and
                            reduced happiness in relationships. Our team of experts is dedicated to breaking taboos around wellness
                            and relationship health, offering personalized and evidence-based treatments tailored to your needs.
                        </p>

                        <p>
                            With a focus on discretion and professionalism, we are committed to enhancing your well-being through advanced,
                            research-backed solutions. Trust us to guide you on a journey towards a healthier, more harmonious relationship.
                        </p>
                    </div>


                </section>

            </BlurFade>



            <BlurFade delay={0.25 * 2} blur="12px" inView>

                <section className="max-w-7xl mx-auto px-0 py-16 text-center text-[#1d1d1f]">


                    <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                        Our Core <span className="text-[#145566]">Team</span>
                    </h2>


                    <p className="text-base sm:text-lg italic leading-relaxed mb-6 text-justify">
                        “We built Happy Couple Solution to end the silence, scams, and stigma around sexual health in India. In 2015, we launched Erectaid—India’s first ED device designed for Indian needs. Today, we offer science-backed, discreet treatments for real results, not false hopes.”
                    </p>


                    <p className="text-sm sm:text-base mb-10 text-start">-Dr. Vimal K. R., Founder & CEO, Medresearch India Pvt. Ltd.</p>


                    <div className="flex justify-center mb-10">
                        <img
                            src="/About-Image.jpg"
                            alt="Founders"
                            loading="lazy"
                            className="rounded-md w-full max-w-sm h-96 object-cover shadow-md"
                        />
                    </div>


                    <p className="text-base sm:text-lg leading-relaxed mb-6 text-justify">
                        Happy Couple Solution isn’t just a health platform—it’s a mission to restore dignity. We use tech, trust, and science to give people private, effective care. Our goal is simple: make real help easy to reach.
                    </p>


                    <p className="text-sm sm:text-base text-start">- Mr. Anjush V. P., Co-Founder, Medresearch India Pvt. Ltd.</p>


                </section>

            </BlurFade>


        </main >


    )




}
