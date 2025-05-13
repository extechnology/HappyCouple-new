import DocForm from "@/components/TalkToDoctor/DocForm";
import DocCard from "@/components/TalkToDoctor/DocCard";
import { BlurFade } from "@/components/magicui/blur-fade";
import { useGetDoctors } from "@/services/Doctor/queries";
import ServerError from "@/components/common/Error";
import DocLoader from "@/components/Loaders/DocLoader";
import { DoctorTypes } from "@/services/Doctor/types";



const TalkToDoctor = () => {



    // Get Doctors Data
    const { data: doctors, isLoading, isFetching, isError } = useGetDoctors();


    // Handle Error
    if (isError) return <ServerError />



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


                    {isLoading || isFetching ? (

                        <DocLoader />

                    ) : (
                        
                        doctors?.map((doctor : DoctorTypes) => (
                            <DocCard
                                key={doctor?.id}
                                image={doctor?.image}
                                name={doctor?.name}
                                specialization={doctor?.description1}
                                qualification={doctor?.description2}
                                experience={doctor?.experience}
                                language={doctor?.language}
                                online = {doctor?.online}
                            />
                        ))

                    )}


                </section>

            </BlurFade>

        </main>


    );
};

export default TalkToDoctor;
