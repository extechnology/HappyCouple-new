import { BlurFade } from "@/components/magicui/blur-fade"
import { LoaderCircle, Send } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useContactForm } from "@/services/utils/mutations";
import { toast } from "sonner";



// Form Schema
const formSchema = z.object({

    name: z.string().nonempty("Name is required"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().nonempty("Phone number is required").refine((value) => /^[0-9]{12}$/.test(value), { message: "Please enter a valid phone number", }),
    subject: z.string().nonempty("Subject is required"),
    message: z.string().nonempty("Message is required"),

})




type FormData = z.infer<typeof formSchema>





export default function ContactUs() {



    // Contact Form
    const { mutateAsync: contactForm, isPending } = useContactForm();




    // use form with zod
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        },
    });



    // Form Submit
    const onSubmit = (data: FormData) => {

        const formdata = new FormData();

        formdata.append("name", data.name);
        formdata.append("email", data.email);
        formdata.append("phone", data.phone);
        formdata.append("subject", data.subject);
        formdata.append("message", data.message);


        contactForm(formdata, {

            onSuccess: (response) => {

                if (response.status >= 200 && response.status <= 300) {

                    toast.success("Message Sent", { description: "Your message has been sent successfully and we will get back to you soon", duration: 5000 })
                    form.reset();

                } else {

                    console.error(response);
                    toast.error("Oops..!", { description: "Something went wrong Please try again.", duration: 5000 })

                }
            }

        })

    }



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


                            <form className="space-y-4 flex-grow" onSubmit={form.handleSubmit(onSubmit)}>


                                <div>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        autoComplete="name"
                                        {...form.register("name")}
                                        className="w-full border border-gray-400 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#145566]"

                                    />
                                    {form.formState.errors.name && <p className="text-red-500 text-sm text-start mt-2">{form.formState.errors.name.message}</p>}
                                </div>


                                <div>
                                    <input
                                        type="email"
                                        autoComplete="email"
                                        placeholder="Email"
                                        {...form.register("email")}
                                        className="w-full border border-gray-400 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#145566]"
                                    />
                                    {form.formState.errors.email && <p className="text-red-500 text-sm text-start mt-2">{form.formState.errors.email.message}</p>}
                                </div>



                                <div>
                                    <PhoneInput
                                        country={"in"}
                                        value={form.watch("phone")}
                                        onChange={(value) => form.setValue("phone", value, { shouldValidate: true })}
                                        placeholder="Eg: 1234567890"
                                        enableSearch
                                        containerClass="w-full"
                                        inputClass="!w-full !h-[44px] !pl-14 !pr-3 !border !border-gray-400 !rounded-md !bg-white focus:!outline-none focus:!ring-2 focus:!ring-[#145566] text-sm"
                                        buttonClass="!border-none !bg-transparent !left-3 !top-1/2 !-translate-y-1/2"
                                        inputProps={{
                                            name: "phone",
                                            required: true,
                                            autoFocus: false,
                                            autoComplete: "tel",
                                        }}
                                        dropdownClass="!text-left"
                                    />
                                    {form.formState.errors.phone && (
                                        <p className="text-red-500 text-sm text-start mt-2">
                                            {form.formState.errors.phone.message}
                                        </p>
                                    )}
                                </div>



                                <div>
                                    <input
                                        type="text"
                                        autoComplete="subject"
                                        placeholder="Subject"
                                        {...form.register("subject")}
                                        className="w-full border border-gray-400 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#145566]"

                                    />
                                    {form.formState.errors.subject && <p className="text-red-500 text-sm text-start mt-2">{form.formState.errors.subject.message}</p>}
                                </div>



                                <div>
                                    <textarea
                                        placeholder="Message"
                                        {...form.register("message")}
                                        rows={4}
                                        className="w-full border border-gray-400 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#145566]"
                                    ></textarea>
                                    {form.formState.errors.message && <p className="text-red-500 text-sm text-start mt-2">{form.formState.errors.message.message}</p>}
                                </div>


                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className={`${isPending ? "opacity-50 cursor-not-allowed" : ""} w-full hover:cursor-pointer flex items-center justify-center bg-[#145566] text-white py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-[#0f3f4c] hover:scale-105 hover:shadow-lg`}
                                >

                                    {isPending ? (

                                        <>Submitting... <LoaderCircle size={20} className="mr-2 animate-spin" /></>

                                    ) : (

                                        <><Send className="mr-2" size={20} /> Send it </>
                                    )}

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
