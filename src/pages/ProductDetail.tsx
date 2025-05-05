import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Link } from "react-router-dom"




export default function ProductDetail() {


    return (



        <main className="bg-white">

            <div className="max-w-7xl mx-auto px-4 pt-5 sm:pt-16 pb-20">



                {/* Product Details */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">



                    {/* Left - Image */}
                    <div className="flex justify-center">
                        <img
                            src="/Lygin.png"
                            alt="LyGin M"
                            loading="lazy"
                            className="rounded-md object-contain"
                        />
                    </div>



                    {/* Right - Details */}
                    <div>


                        {/* title */}
                        <h2 className="text-2xl font-semibold text-gray-900 leading-snug">
                            VitalCore Solution – Nutraceutical Therapy (₹1470 for 1-Month Supply)
                        </h2>



                        {/* Rating & Price */}
                        <div className="text-xl text-yellow-600 mt-1">★★★★☆ 4.5</div>
                        <p className="text-green-600 font-bold text-xl mt-2">₹ 1470</p>



                        {/* Discription */}
                        <div className="mt-3 text-md text-gray-700 text-justify">

                            <p><strong>For Concerned of :</strong></p>

                            <p>
                                Scientifically formulated nutraceutical support (LyGin-M). Supports hormonal balance,
                                energy levels, and overall vitality. Natural, safe, and effective for improving physical well-being in relationships.
                            </p>

                            <p className="mt-4"><strong>Description :</strong></p>

                            <p>
                                Those experiencing low energy, stress-related fatigue, or mild performance issues.
                                Couples looking for a holistic, non-invasive approach to wellness.
                            </p>

                        </div>

                        <Link to={'/checkout'}>
                            <button className="mt-5 px-16 py-2 font-semibold border-2 hover:cursor-pointer border-[#25758A] text-[#25758A] rounded hover:bg-teal-50 transition">
                                BUY NOW
                            </button>
                        </Link>


                    </div>


                </section>




                {/* Tabs Section */}
                <section className="mt-12">


                    <Tabs defaultValue="benefits" className="w-full">


                        <TabsList className="flex flex-wrap gap-4 bg-transparent p-2 rounded-md justify-center">
                            <TabsTrigger value="benefits" className="px-10 py-6 bg-[#F2F4F7] data-[state=active]:bg-teal-700 data-[state=active]:text-white font-semibold hover:cursor-pointer">KEY BENEFITS</TabsTrigger>
                            <TabsTrigger value="how" className="px-10 py-6 bg-[#F2F4F7] data-[state=active]:bg-teal-700 data-[state=active]:text-white font-semibold hover:cursor-pointer">HOW TO USE</TabsTrigger>
                            <TabsTrigger value="reviews" className="px-10 py-6 bg-[#F2F4F7] data-[state=active]:bg-teal-700 data-[state=active]:text-white font-semibold hover:cursor-pointer">CUSTOMER REVIEWS</TabsTrigger>
                            <TabsTrigger value="faqs" className="px-10 py-6 bg-[#F2F4F7] data-[state=active]:bg-teal-700 data-[state=active]:text-white font-semibold hover:cursor-pointer">FAQS</TabsTrigger>
                        </TabsList>


                        <TabsContent value="benefits" className="mt-[15rem] sm:mt-10 text-gray-800 space-y-2 list-disc list-inside">
                            <ul className="space-y-6 pl-4 list-disc">
                                <li><strong>Enhanced Stamina:</strong> Boosts energy and endurance for improved performance.</li>
                                <li><strong>Hormonal Balance:</strong> Supports healthy testosterone levels for optimal vitality.</li>
                                <li><strong>Improved Blood Flow:</strong> Promotes better circulation for enhanced arousal and function.</li>
                                <li><strong>Stress Reduction:</strong> Helps manage stress, improving overall sexual well-being.</li>
                                <li><strong>Holistic Support:</strong> Combines natural ingredients like LyGin M for overall physical and performance health.</li>
                            </ul>
                        </TabsContent>


                        <TabsContent value="how" className="mt-[15rem] sm:mt-10">
                            <p>Take 1 capsule daily after breakfast or as prescribed by your doctor. Do not exceed the recommended dosage.</p>
                        </TabsContent>


                        <TabsContent value="reviews" className="mt-[15rem] sm:mt-10">
                            <p>⭐️⭐️⭐️⭐️⭐️ - "Really effective, noticed improvement in energy within a week!"</p>
                        </TabsContent>


                        <TabsContent value="faqs" className="mt-[15rem] sm:mt-10">
                            <p><strong>Q:</strong> Is it safe for long-term use?</p>
                            <p><strong>A:</strong> Yes, it's formulated with natural ingredients and safe for long-term use. Consult a physician for personalized advice.</p>
                        </TabsContent>


                    </Tabs>


                </section>


            </div>

        </main>
    )
}
