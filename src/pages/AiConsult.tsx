import { useState } from "react";
import ChatBot from "react-chatbotify";
import 'react-phone-input-2/lib/style.css';
import { Link } from "react-router-dom";
import { useGetAllProducts } from "@/services/products/queries";
import { ProductType } from "@/services/products/types";
import ServerError from "@/components/common/Error";
import CardSkelton from "@/components/Loaders/CardSkelton";
import { Stethoscope } from "lucide-react";




export default function AiConsult() {



    // Get All Products
    const { data: AllProducts, isLoading, isFetching, isError } = useGetAllProducts()




    // Chat Bot Data
    const [BotData, SetBotData] = useState({})




    // Chat Bot Settings
    const settings = {

        general: { embedded: true, primaryColor: "#1a879c", secondaryColor: '#25434E', showFooter: false },
        chatHistory: { storageKey: "ai-consult" },
        showFooter: { disabled: true },
        botBubble: { simStream: true, showAvatar: true, animate: true, simulateStream: true, streamSpeed: 25, avatar: "/bot-icon.png" },
        header: { title: (<div style={{ cursor: "pointer", margin: 0, fontSize: 20, fontWeight: "bold", fontFamily: "serif" }} >Self Assessment</div>), avatar: "/bot-icon.png" },
        notification: { disabled: true },
        emoji: { disabled: true },

    }



    // Chat Bot Flow
    const flow = {

        start: {
            message: "Hi!",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "start2"

        },

        start2: {
            message: "I am your Online Health guide From Happy Couple Solution.",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "start3"
        },

        start3: {
            message: "Welcome!",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "start4"
        },

        start4: {

            message: "Kindly Complete a confidential interaction to find your ideal sexual health product for your happy life.",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "ask_phone"
        },

        ask_phone: {

            message: "Please enter your phone number.",
            function: (params: any) => {
                SetBotData({ ...BotData, phone: params.userInput });
            },
            path: async (params: any) => {

                const input = params.userInput.trim();

                // Regex for 10-digit phone numbers
                const phoneRegex = /^[6-9]\d{9}$/;

                if (!phoneRegex.test(input)) {
                    await params.injectMessage("❌ Please enter a valid 10-digit phone number.");
                    return "ask_phone";
                }

                return "gender_select";
            },

        },

        gender_select: {

            message: "Please Select Your Gender",
            options: ["Male", "Female"],
            chatDisabled: true,
            function: (params: any) => SetBotData({ ...BotData, gender: params.userInput }),
            path: async (params: any) => {

                const input = params.userInput;

                switch (input) {
                    case "Male":
                        return "male_options";
                    case "Female":
                        return "female_options";
                    default:
                        await params.injectMessage("Please select a valid option.");
                        return "gender_select";
                }
            }

        },


        // Male Flow
        male_options: {

            message: "Choose your main concern",
            options: ["Erectile Dysfunction (ED)", "Premature Ejaculation (PE)", "Low sexual interest / Poor Satisfaction", "Stress or performance anxiety"],
            chatDisabled: true,
            function: (params: any) => SetBotData({ ...BotData, male_option: params.userInput }),
            path: async (params: any) => {

                const input = params.userInput;

                switch (input) {
                    case "Erectile Dysfunction (ED)":
                        return "ed_flow_start";
                    case "Premature Ejaculation (PE)":
                        return "pe_flow_start";
                    case "Low sexual interest / Poor Satisfaction":
                        return "low_interest_flow_start";
                    case "Stress or performance anxiety":
                        return "stress_flow_start";
                    default:
                        await params.injectMessage("Please select a valid option.");
                        return "male_options";
                }
            }

        },

        ed_flow_start: {

            message: "Which of the following issues do you idented ?",
            options: ["I have no trouble maintaining an erection", "Sometimes my erection isn’t hardenough for penetration. (Mild ED)", "Often, I lose erection before or during sex. (Moderate ED)", "I haven’t been able to get an erection for weeks or months. (Severe ED)", "I feel highly aroused, but erection is weak. (psychogenic ED)"],
            chatDisabled: true,
            function: (params: any) => SetBotData({ ...BotData, ed_option: params.userInput }),
            path: async (params: any) => {

                const input = params.userInput;

                switch (input) {
                    case "I have no trouble maintaining an erection":
                        return "ed_option_1";
                    case "Sometimes my erection isn’t hardenough for penetration. (Mild ED)":
                        return "ed_option_2";
                    case "Often, I lose erection before or during sex. (Moderate ED)":
                        return "ed_option_3";
                    case "I haven’t been able to get an erection for weeks or months. (Severe ED)":
                        return "ed_option_4";
                    case "I feel highly aroused, but erection is weak. (psychogenic ED)":
                        return "ed_option_5";
                    default:
                        await params.injectMessage("❌ Please select a valid option.");
                        return "ed_flow_start";
                }
            }

        },

        ed_option_1: {

            message: "Great news — it seems you have no signs of erectile dysfunction. Maintaining this balance is important, and you can continue focusing on overall physical and emotional well-being.If you ever feel fatigue or performance stress, lifestyle support or stress care tools can help.",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "no_treatment_needed"
        },

        no_treatment_needed: {

            message: "No Treatment Needed...!",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "path_end"

        },

        ed_option_2: {

            message: "You may be facing mild erectile dysfunction, where the erection may sometimes not be firm enough for penetration. This could be due to fatigue, stress, poor sleep, or momentary distractions. The good news is — this level of ED is often reversible with the right lifestyle adjustments and natural support. You can begin with our Ligin nutraceutical therapy to support blood flow and sexual stamina. If you’re comfortable, our ErectAid Ultra vacuum device can also enhance erection firmness naturally.",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "ligin_plus_erectaid"

        },

        ligin_plus_erectaid: {

            message: "Recommended Products Ligin + ErectAid Ultra",
            chatDisabled: true,
            component: (

                <div className="w-full sm:px-24 py-10 grid grid-cols-1 md:grid-cols-2 gap-4">

                    {isLoading || isFetching ? (

                        <CardSkelton length={2} />

                    ) : (

                        AllProducts?.filter((product: ProductType) => product?.name === "LyGin" || product?.name === "Erectaid Vacuum Therapy Device")?.map((product: ProductType) => (

                            <div className="relative rounded-xl overflow-hidden shadow-md group">

                                <img
                                    src={product?.image}
                                    alt={product?.name}
                                    loading="lazy"
                                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#25434E]/90 to-transparent" />


                                <div className="absolute bottom-6 left-6 z-20 text-white">

                                    <p className="text-sm font-medium">{"★".repeat(product?.rating)} {product?.rating}</p>
                                    <p className="font-semibold text-base mt-1 max-w-xs">
                                        {product?.name}
                                    </p>

                                    <Link to={`/productdetail/${product?.id}`}>
                                        <button className="mt-4 hover:cursor-pointer px-4 py-2 bg-white text-black text-sm font-semibold rounded shadow-md transition-all duration-300 transform hover:bg-gray-200 hover:scale-105 hover:shadow-lg">
                                            Buy Now
                                        </button>
                                    </Link>

                                </div>

                            </div>

                        ))
                    )}

                </div>
            ),
            transition: { duration: 200 },
            path: "path_end"

        },

        ed_option_3: {

            message: "It looks like you’re experiencing moderate erectile dysfunction, where maintaining a firm erection is frequently difficult.  This may be caused by factors like stress, early-stage vascular issues, low testosterone, or chronic fatigue. At this level, a combination approach is ideal: Start with Ligin, consider using the ErectAid Ultra device, and we highly recommend a free doctor consultation to explore safe and effective prescription options.",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "ligin_plus_erectaid_plus_consultation"

        },

        ligin_plus_erectaid_plus_consultation: {

            message: "Recommended Ligin + ErectAid Ultra + Doctor Consultation",
            chatDisabled: true,
            component: (

                <section className="w-full flex flex-col space-y-4">

                    <div className="w-full sm:px-24 pt-10 grid grid-cols-1 md:grid-cols-2 gap-4">

                        {isLoading || isFetching ? (

                            <CardSkelton length={2} />

                        ) : (

                            AllProducts?.filter((product: ProductType) => product?.name === "LyGin" || product?.name === "Erectaid Vacuum Therapy Device")?.map((product: ProductType) => (

                                <div className="relative rounded-xl overflow-hidden shadow-md group">

                                    <img
                                        src={product?.image}
                                        alt={product?.name}
                                        loading="lazy"
                                        className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#25434E]/90 to-transparent" />


                                    <div className="absolute bottom-6 left-6 z-20 text-white">

                                        <p className="text-sm font-medium">{"★".repeat(product?.rating)} {product?.rating}</p>
                                        <p className="font-semibold text-base mt-1 max-w-xs">
                                            {product?.name}
                                        </p>

                                        <Link to={`/productdetail/${product?.id}`}>
                                            <button className="mt-4 hover:cursor-pointer px-4 py-2 bg-white text-black text-sm font-semibold rounded shadow-md transition-all duration-300 transform hover:bg-gray-200 hover:scale-105 hover:shadow-lg">
                                                Buy Now
                                            </button>
                                        </Link>

                                    </div>

                                </div>

                            ))
                        )}

                    </div>


                    <div className="w-full sm:px-24 py-5">
                        <Link to={'/talktodoctor'}>
                            <button
                                type="submit"
                                className="w-full bg-[#145566] flex items-center justify-center text-white text-lg font-medium py-3 rounded-md transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-[#25434E] hover:scale-105"
                            >
                                Book Doctor Consultation <Stethoscope className="w-6 h-6 ml-2" />
                            </button>
                        </Link>
                    </div>

                </section>
            ),
            transition: { duration: 200 },
            path: "path_end"

        },

        ed_option_4: {

            message: "Your responses indicate signs of severe erectile dysfunction, where getting or maintaining an erection is rarely possible. This may be due to advanced vascular issues, diabetes, nerve damage, long-term psychological blocks, or hormonal imbalance. To ensure the right path, we recommend an immediate confidential consultation with our expert doctor.",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "doctor_consultation"

        },

        doctor_consultation: {

            message: "Recommended Doctor Consultation",
            chatDisabled: true,
            component: (

                <div className="w-full sm:px-24 py-10">
                    <Link to={'/talktodoctor'}>
                        <button
                            type="submit"
                            className="w-full bg-[#145566] flex items-center justify-center text-white text-lg font-medium py-3 rounded-md transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-[#25434E] hover:scale-105"
                        >
                            Book Doctor Consultation <Stethoscope className="w-6 h-6 ml-2" />
                        </button>
                    </Link>
                </div>
            ),
            transition: { duration: 200 },
            path: "path_end"

        },

        ed_option_5: {

            message: "You seem to have strong sexual desire, but your erection strength doesn’t match.  This pattern usually points to psychogenic erectile dysfunction, often linked to performance anxiety, overthinking, or fear of failure. This is highly treatable. We recommend Ligin therapy combined with stress relief support. You can also consult our doctor for added help.  Your confidence and strength can be restored — and we’re here to support you.",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "ligin_plus_consultation"

        },

        ligin_plus_consultation: {

            message: "Recommended Ligin + Doctor Consultation",
            chatDisabled: true,
            component: (

                <section className="w-full flex flex-col space-y-4">

                    <div className="w-full sm:px-24 pt-10 grid grid-cols-1 md:grid-cols-1 gap-4">

                        {isLoading || isFetching ? (

                            <CardSkelton length={2} />

                        ) : (

                            AllProducts?.filter((product: ProductType) => product?.name === "LyGin")?.map((product: ProductType) => (

                                <div className="relative rounded-xl overflow-hidden shadow-md group">

                                    <img
                                        src={product?.image}
                                        alt={product?.name}
                                        loading="lazy"
                                        className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#25434E]/90 to-transparent" />


                                    <div className="absolute bottom-6 left-6 z-20 text-white">

                                        <p className="text-sm font-medium">{"★".repeat(product?.rating)} {product?.rating}</p>
                                        <p className="font-semibold text-base mt-1 max-w-xs">
                                            {product?.name}
                                        </p>

                                        <Link to={`/productdetail/${product?.id}`}>
                                            <button className="mt-4 hover:cursor-pointer px-4 py-2 bg-white text-black text-sm font-semibold rounded shadow-md transition-all duration-300 transform hover:bg-gray-200 hover:scale-105 hover:shadow-lg">
                                                Buy Now
                                            </button>
                                        </Link>

                                    </div>

                                </div>

                            ))
                        )}

                    </div>

                    <div className="w-full sm:px-24 py-5">
                        <Link to={'/talktodoctor'}>
                            <button
                                type="submit"
                                className="w-full bg-[#145566] flex items-center justify-center text-white text-lg font-medium py-3 rounded-md transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-[#25434E] hover:scale-105"
                            >
                                Book Doctor Consultation <Stethoscope className="w-6 h-6 ml-2" />
                            </button>
                        </Link>
                    </div>

                </section>
            ),
            transition: { duration: 200 },
            path: "path_end"

        },


        ligin: {

            message: "Recommended Ligin",
            chatDisabled: true,
            component: (

                <section className="w-full">

                    <div className="w-full sm:px-24 pt-10 grid grid-cols-1 md:grid-cols-1 gap-4">

                        {isLoading || isFetching ? (

                            <CardSkelton length={2} />

                        ) : (

                            AllProducts?.filter((product: ProductType) => product?.name === "LyGin")?.map((product: ProductType) => (

                                <div className="relative rounded-xl overflow-hidden shadow-md group">

                                    <img
                                        src={product?.image}
                                        alt={product?.name}
                                        loading="lazy"
                                        className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#25434E]/90 to-transparent" />


                                    <div className="absolute bottom-6 left-6 z-20 text-white">

                                        <p className="text-sm font-medium">{"★".repeat(product?.rating)} {product?.rating}</p>
                                        <p className="font-semibold text-base mt-1 max-w-xs">
                                            {product?.name}
                                        </p>

                                        <Link to={`/productdetail/${product?.id}`}>
                                            <button className="mt-4 hover:cursor-pointer px-4 py-2 bg-white text-black text-sm font-semibold rounded shadow-md transition-all duration-300 transform hover:bg-gray-200 hover:scale-105 hover:shadow-lg">
                                                Buy Now
                                            </button>
                                        </Link>

                                    </div>

                                </div>

                            ))
                        )}

                    </div>

                </section>
            ),
            transition: { duration: 200 },
            path: "path_end"

        },


        pe_flow_start: {

            message: "Please describe your condition",
            options: ["I last less than 1 minute after penetration. (Severe PE)", "I last 1- 3 minutes. (Moderate PE)", "I can sometimes control it, but often finish too early", "I have good control over ejaculation. (No PE)", "I lose control due to excitement or anxiety. (psychogenic PE)"],
            chatDisabled: true,
            function: (params: any) => SetBotData({ ...BotData, pe_option: params.userInput }),
            path: async (params: any) => {

                const input = params.userInput;

                switch (input) {
                    case "I last less than 1 minute after penetration. (Severe PE)":
                        return "pe_option_1";
                    case "I last 1- 3 minutes. (Moderate PE)":
                        return "pe_option_2";
                    case "I can sometimes control it, but often finish too early":
                        return "pe_option_3";
                    case "I have good control over ejaculation. (No PE)":
                        return "pe_option_4";
                    case "I lose control due to excitement or anxiety. (psychogenic PE)":
                        return "pe_option_5";
                    default:
                        await params.injectMessage("❌ Please select a valid option.");
                        return "ed_flow_start";
                }
            }

        },

        pe_option_1: {

            message: "It seems you’re facing severe premature ejaculation, where intercourse may last less than 1 minute. This could be due to heightened arousal, nervous system sensitivity, or neurotransmitter imbalance.  The best step is to book a free doctor consultation — safe and effective prescription treatments are available to support you.",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "doctor_consultation"
        },

        pe_option_2: {

            message: "Your responses suggest moderate premature ejaculation, where you may finish within 1–3 minutes consistently.It could be linked to anxiety, reduced serotonin, or sensitivity. We suggest starting with Ligin, and optionally scheduling a doctor consultation for tailored medical options like Dapoxetil.  You’re on the right path by addressing this — let’s work together on lasting improvement.",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "ligin_plus_consultation"
        },

        pe_option_3: {

            message: "You may be experiencing mild premature ejaculation, where control is occasionally difficult. This often happens due to overstimulation, stress, or irregular sexual habits. Ligin, our herbal performance support, can help extend your control naturally. With a few adjustments, you can regain full control confidently.",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "ligin_plus_consultation"
        },

        pe_option_4: {

            message: "Excellent! Your responses show that you have good control over ejaculation. That’s a great sign of sexual health. If you ever feel the need for more stamina or energy, we have natural solutions like Ligin to support performance.For now, enjoy a healthy sexual life!",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "no_treatment_needed"
        },

        pe_option_5: {

            message: "Your early ejaculation may be driven by performance anxiety or mental stress. This is very common and fully reversible.We suggest combining stress management techniques with Ligin support to regain control. You’re closer to balance than you think.",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "ligin_plus_consultation"
        },

        low_interest_flow_start: {

            message: "How would you describe your interest in sex ?",
            options: ["I feel little or no desire", "I want sex but don’t feel aroused", "I feel interested sometimes, but it doesn’t last", "My desire depends on my mood or stress", "I have strong desire"],
            chatDisabled: true,
            function: (params: any) => SetBotData({ ...BotData, low_interest_option: params.userInput }),
            path: async (params: any) => {

                const input = params.userInput;

                switch (input) {
                    case "I feel little or no desire":
                        return "low_interest_option_1";
                    case "I want sex but don’t feel aroused":
                        return "low_interest_option_2";
                    case "I feel interested sometimes, but it doesn’t last":
                        return "low_interest_option_3";
                    case "My desire depends on my mood or stress":
                        return "low_interest_option_4";
                    case "I have strong desire":
                        return "low_interest_option_5";
                    default:
                        await params.injectMessage("❌ Please select a valid option.");
                        return "ed_flow_start";
                }
            }

        },

        low_interest_option_1: {

            message: "Your responses suggest severe low sexual desire, where interest in intimacy is nearly absent. This could relate to low testosterone, mental health challenges, or medication effects. We strongly recommend a confidential doctor consultation to help you find the right solution safely and effectively. With the right help, sexual well-being is always within reach.",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "doctor_consultation"
        },

        low_interest_option_2: {

            message: "It appears you’re going through moderate low sexual interest, where desire is noticeably reduced. This could stem from hormonal fluctuations, work stress, or emotional disconnection. We suggest starting with Ligin, and optionally speaking to our doctor to rule out deeper concerns.",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "ligin_plus_consultation"
        },

        low_interest_option_3: {

            message: "You may have mild reduction in sexual interest, which can happen due to stress, mental fatigue, or poor sleep. A natural supplement like Ligin, combined with lifestyle improvements, can help revive your energy and sexual  confidence.",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "ligin"
        },

        low_interest_option_4: {

            message: "If your desire fluctuates based on mood or stress, this is known as situational low desire. It’s common and often improves with better sleep, stress control, and energy support.Ligin can help, and so can mindfulness-based techniques. Let’s get you feeling your best again.",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "ligin_plus_consultation"
        },

        low_interest_option_5: {

            message: "That’s great! You seem to have a healthy level of sexual desire.Staying active, relaxed, and well-supported emotionally helps maintain this. If needed, our supplements can enhance stamina and vitality.",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "no_treatment_needed"
        },


        // Female Flow
        female_options: {

            message: "Choose your main concern",
            options: ["Sexual problems", "Stress or emotional wellness"],
            chatDisabled: true,
            function: (params: any) => SetBotData({ ...BotData, female_option: params.userInput }),
            path: async (params: any) => {

                const input = params.userInput;

                switch (input) {
                    case "Sexual problems":
                        return "sexual_flow_start";
                    case "Stress or emotional wellness":
                        return "stress_flow_start";
                    default:
                        await params.injectMessage("Please select a valid option.");
                        return "male_options";
                }
            }

        },

        sexual_flow_start: {

            message: "Please choose your specific concern",
            options: ["Low sexual desire", "Difficulty getting aroused", "Trouble reaching orgasm", "Pain or discomfort during sex (Dyspareunia)", "Fear, anxiety, or tightness preventing sex (Vaginismus)", "Post-Menopausal sexual issues"],
            chatDisabled: true,
            function: (params: any) => SetBotData({ ...BotData, sexual_option: params.userInput }),
            path: async (params: any) => {

                const input = params.userInput;

                switch (input) {
                    case "Low sexual desire":
                        return "sexual_option_1";
                    case "Difficulty getting aroused":
                        return "sexual_option_2";
                    case "Trouble reaching orgasm":
                        return "sexual_option_3";
                    case "Pain or discomfort during sex (Dyspareunia)":
                        return "sexual_option_4";
                    case "Fear, anxiety, or tightness preventing sex (Vaginismus)":
                        return "sexual_option_5";
                    case "Post-Menopausal sexual issues":
                        return "sexual_option_6";
                    default:
                        await params.injectMessage("❌ Please select a valid option.");
                        return "ed_flow_start";
                }
            }

        },

        sexual_option_1: {

            message: "Experiencing low sexual desire is common and may be caused by hormonal changes, emotional stress, relationship issues, or medical conditions. Many women face this at some point, and the right support can make a big difference.",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "sexual_option_1_ans"
        },

        sexual_option_1_ans: {

            message: "We recommend consulting a specialist to identify the underlying cause and create a personalized treatment plan.",
            chatDisabled: true,
            component: (

                <div className="w-full sm:px-24 py-10">
                    <Link to={'/talktodoctor'}>
                        <button
                            type="submit"
                            className="w-full bg-[#145566] flex items-center justify-center text-white text-lg font-medium py-3 rounded-md transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-[#25434E] hover:scale-105"
                        >
                            Book Free Doctor Consultation <Stethoscope className="w-6 h-6 ml-2" />
                        </button>
                    </Link>
                </div>
            ),
            transition: { duration: 200 },
            path: "path_end"

        },

        sexual_option_2: {

            message: "Difficulty becoming physically or mentally aroused can happen due to hormonal shifts, reduced blood flow, emotional barriers, or stress. It’s important to find the cause so that the  right solutions can be provided for a fulfilling experience.",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "sexual_option_2_ans"
        },

        sexual_option_2_ans: {

            message: "We recommend consulting a specialist for a detailed evaluation and care.",
            chatDisabled: true,
            component: (

                <div className="w-full sm:px-24 py-10">
                    <Link to={'/talktodoctor'}>
                        <button
                            type="submit"
                            className="w-full bg-[#145566] flex items-center justify-center text-white text-lg font-medium py-3 rounded-md transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-[#25434E] hover:scale-105"
                        >
                            Book Free Doctor Consultation <Stethoscope className="w-6 h-6 ml-2" />
                        </button>
                    </Link>
                </div>
            ),
            transition: { duration: 200 },
            path: "path_end"

        },

        sexual_option_3: {

            message: "Trouble reaching orgasm (anorgasmia) can be linked to psychological factors, stress, hormonal imbalances, medication side effects, or even lack of proper stimulation. Many women experience this, and treatments are available to help.",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "sexual_option_3_ans"
        },

        sexual_option_3_ans: {

            message: "We recommend consulting a specialist to explore supportive therapies and solutions.",
            chatDisabled: true,
            component: (

                <div className="w-full sm:px-24 py-10">
                    <Link to={'/talktodoctor'}>
                        <button
                            type="submit"
                            className="w-full bg-[#145566] flex items-center justify-center text-white text-lg font-medium py-3 rounded-md transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-[#25434E] hover:scale-105"
                        >
                            Book Free Doctor Consultation <Stethoscope className="w-6 h-6 ml-2" />
                        </button>
                    </Link>
                </div>
            ),
            transition: { duration: 200 },
            path: "path_end"

        },

        sexual_option_4: {

            message: "Pain during intercourse can result from vaginal dryness, infections, hormonal changes, or even anxiety-related muscle  tension. It’s important not to ignore it — relief and effective treatments are available with proper guidance.",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "sexual_option_4_ans"
        },

        sexual_option_4_ans: {

            message: "We recommend consulting a specialist to diagnose and treat the cause appropriately.",
            chatDisabled: true,
            component: (

                <div className="w-full sm:px-24 py-10">
                    <Link to={'/talktodoctor'}>
                        <button
                            type="submit"
                            className="w-full bg-[#145566] flex items-center justify-center text-white text-lg font-medium py-3 rounded-md transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-[#25434E] hover:scale-105"
                        >
                            Book Free Doctor Consultation <Stethoscope className="w-6 h-6 ml-2" />
                        </button>
                    </Link>
                </div>
            ),
            transition: { duration: 200 },
            path: "path_end"

        },

        sexual_option_5: {

            message: "Vaginismus involves involuntary tightening of vaginal muscles due to fear, anxiety, or past trauma, making penetration painful or difficult. With the right therapeutic approach, this condition can be treated successfully.",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "sexual_option_5_ans"
        },

        sexual_option_5_ans: {

            message: "We recommend consulting a specialist experienced in treating vaginismus for a supportive, step-by-step recovery.",
            chatDisabled: true,
            component: (

                <div className="w-full sm:px-24 py-10">
                    <Link to={'/talktodoctor'}>
                        <button
                            type="submit"
                            className="w-full bg-[#145566] flex items-center justify-center text-white text-lg font-medium py-3 rounded-md transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-[#25434E] hover:scale-105"
                        >
                            Book Free Doctor Consultation <Stethoscope className="w-6 h-6 ml-2" />
                        </button>
                    </Link>
                </div>
            ),
            transition: { duration: 200 },
            path: "path_end"

        },

        sexual_option_6: {

            message: "After menopause, hormonal changes can cause vaginal dryness, reduced sensitivity, low libido, and discomfort during  sex. These are very common and manageable with proper medical support and care.",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "sexual_option_6_ans"
        },

        sexual_option_6_ans: {

            message: "We recommend consulting a specialist to explore solutions that can restore your comfort and confidence.",
            chatDisabled: true,
            component: (

                <div className="w-full sm:px-24 py-10">
                    <Link to={'/talktodoctor'}>
                        <button
                            type="submit"
                            className="w-full bg-[#145566] flex items-center justify-center text-white text-lg font-medium py-3 rounded-md transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-[#25434E] hover:scale-105"
                        >
                            Book Free Doctor Consultation <Stethoscope className="w-6 h-6 ml-2" />
                        </button>
                    </Link>
                </div>
            ),
            transition: { duration: 200 },
            path: "path_end"

        },

        path_end: {

            message: "🩺 Start self-assessment again ?",
            options: ["Yes", "No"],
            chatDisabled: true,
            path: async (params: any) => {

                const input = params.userInput;

                switch (input) {
                    case "Yes":
                        return "ask_phone";
                    case "No":
                        return "end_no";
                    default:
                        await params.injectMessage("❌ Please select a valid option.");
                        return "path_end";
                }
            }

        },

        end_no: {

            message: "😊 No worries at all !. Feel free to come back anytime. Have a great day and take care!",
            chatDisabled: true,
        },


        // Stress flow
        stress_flow_start: {

            message: "Stress can significantly impact your emotional, physical, and sexual wellness.Let’s quickly assess your current stress level and connect you with the right expert support.",
            chatDisabled: true,
            transition: { duration: 200 },
            path: "trouble_sleeping"
        },

        trouble_sleeping: {

            message: "Do you have trouble sleeping ?",
            options: ["Yes", "No"],
            chatDisabled: true,
            function: (params: any) => SetBotData({ ...BotData, trouble_sleeping: params.userInput }),
            path: "stressed_or_anxious"

        },

        stressed_or_anxious: {

            message: "How often do you feel stressed or anxious ?",
            options: ["Rarely", "Sometimes", "Frequently"],
            chatDisabled: true,
            function: (params: any) => SetBotData({ ...BotData, stressed_or_anxious: params.userInput }),
            path: "tired_low_in_energy_or_demotivated"

        },

        tired_low_in_energy_or_demotivated: {

            message: "How often do you feel tired, low in energy, or demotivated ?",
            options: ["Rarely", "Sometimes", "Often"],
            chatDisabled: true,
            function: (params: any) => SetBotData({ ...BotData, tired_low_in_energy_or_demotivated: params.userInput }),
            path: ""

        },


    }



    // handle error
    if (isError) return <ServerError />



    return (

        <main className="w-full h-auto pb-5 pt-3 sm:pt-5 sm:py-10 flex justify-center items-center ">

            <ChatBot settings={settings} flow={flow} />

        </main >

    )


}
