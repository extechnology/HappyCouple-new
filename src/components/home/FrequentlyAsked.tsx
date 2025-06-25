import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useDcotorsPrice } from "@/services/utils/queries";
import { Link } from "react-router-dom"





export default function FrequentlyAsked() {


    // Get Doctors Consult Price
    const { data: price } = useDcotorsPrice();


    // FAQ Data 
    const faqData = [
        {
            question: "Is this really science-based?",
            answer:
                "Yes, We follow the globally recognised European Association of Urology (EAU) guidelines.",
        },
        {
            question: `Is the ₹${price?.amount ?? 0} consultation Refunded?`,
            answer: "Yes, fully refunded when you begin any treatment.",
        },
        {
            question: "Are your products safe?",
            answer: "All treatment are clinically validated.",
        },
        {
            question: "Is everything confidential?",
            answer: "100% private and secure.",
        },
    ]



    return (


        <section className="py-10 sm:py-16 px-2 md:px-12 bg-[#D9D9D936]">


            <div className="max-w-7xl mx-auto">


                {/* Header */}
                <div className="text-center mb-12">


                    <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 font-bold mb-3 relative inline-block">
                        Frequently Asked
                        <span className="text-[#145566] relative ms-2 inline-block">
                            Questions
                            <img
                                src="/svgs/hero-text-underline.svg"
                                alt="svg-logo"
                                loading="lazy"
                                className="absolute -bottom-4 left-0 w-full pointer-events-none"
                            />
                        </span>
                    </h2>


                    <p className="text-sm md:text-base text-gray-700 mt-2">
                        Go answers to common questions about our services
                    </p>


                </div>




                {/* Content */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Accordion Left Side */}
                    <div className="md:col-span-6 space-y-4">
                        <Accordion type="single" collapsible className="space-y-4">
                            {faqData.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} >
                                    <AccordionTrigger className="[&>svg]:w-6 [&>svg]:h-6 [&>svg]:text-[#000000] font-semibold text-base text-gray-900 bg-white p-5 rounded-md border hover:cursor-pointer">
                                        {faq.question}
                                    </AccordionTrigger>
                                    {faq.answer && (
                                        <AccordionContent className="bg-white p-10 text-sm text-gray-900 border rounded-b-md">
                                            {faq.answer}
                                        </AccordionContent>
                                    )}
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                </div>



                {/* Contact Box */}
                <div className="bg-white rounded-lg p-8 flex flex-col items-center text-center gap-6 max-w-7xl mx-auto mt-10">


                    <div className="flex flex-col items-center gap-4">

                        <img
                            src="/svgs/Chat-icon.svg"
                            alt="Chat icon"
                            loading="lazy"
                            className="w-14 h-14"
                        />

                        <p className="font-semibold text-lg text-gray-800 leading-snug">
                            Do you have more <br /> questions?
                        </p>

                    </div>


                    <Link to={'/contactus'}>
                        <button className="bg-[#145566] hover:bg-[#0f3f4d] hover:scale-[1.03] active:scale-95 transition-all duration-200 ease-in-out transform cursor-pointer text-white text-sm font-medium py-2.5 px-6 rounded-md shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#145566]">
                            Contact Us
                        </button>
                    </Link>


                </div>

            </div>

        </section>
    )
}
