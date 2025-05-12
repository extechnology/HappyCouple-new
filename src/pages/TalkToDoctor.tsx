import DocForm from "@/components/TalkToDoctor/DocForm";
import DocCard from "@/components/TalkToDoctor/DocCard";
import { BlurFade } from "@/components/magicui/blur-fade";



const TalkToDoctor = () => {




    return (


        <main className="py-12 px-4 sm:px-6 lg:px-8 bg-white">


            <BlurFade delay={0.25} blur="12px" inView>

                <section className="max-w-6xl mx-auto text-center">


                    <h2 className="font-serif text-5xl text-gray-900">Talk to Doctor</h2>


                    <p className="mt-2 italic text-gray-500">
                        Hi, Welcome to Happy Couple Solution
                        Find Perfect Expert to your Health Concern
                    </p>


                    {/* Form */}
                    <DocForm />

                </section>

            </BlurFade>


            <BlurFade delay={0.25 * 2} blur="12px" inView>

                <section className="max-w-6xl mx-auto text-center mt-10 sm:mt-24">


                    <div className="text-center">
                        <h2 className="text-5xl font-serif text-gray-900">
                            Our Medical <span className="text-[#145566] font-semibold">Experts</span>
                        </h2>
                        <p className="mt-4 text-xl text-gray-700">
                            Specialist Centre | General Physicians | Health Coaches
                        </p>
                    </div>


                    {/* Doctors Cards */}
                    <DocCard
                        image="/doc.png"
                        name="Dr. Ajayan Varughes"
                        specialization="Sexual Medicine, Applied Psychology, Therapy, Sexual Dysfunction Treatment"
                        qualification="M.B.B.S - Govt. Medical College Kozhikode Kerala, M.Sc. (Applied Psychology) - Bharathiar University"
                        experience="25+ years"
                        language="English |Hindi | Tamil | Malayalam"
                    />


                </section>

            </BlurFade>

        </main>


    );
};

export default TalkToDoctor;
