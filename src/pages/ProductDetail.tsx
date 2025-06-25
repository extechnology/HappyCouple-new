import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs"
import { useGetSingleProducts } from "@/services/products/queries"
import { useParams } from "react-router-dom"
import ServerError from "@/components/common/Error"
import { DetailSkelton } from "@/components/Loaders/DetailSkelton"
import DetailCard from "@/components/productDetail/DetailCard"
import RelatedProducts from "@/components/productDetail/RelatedProducts"



export default function ProductDetail() {



    // Get the product id form the params
    const { id } = useParams()



    // Get Single Product Data
    const { data: ProductData, isLoading, isFetching, isError } = useGetSingleProducts(id as string)



    // Handle Loading
    if (isLoading || isFetching || !ProductData) return <DetailSkelton />



    // Handle Error
    if (isError) return <ServerError />



    return (



        <main className="bg-white">


            <div className="max-w-7xl mx-auto px-4 pt-5 sm:pt-16 pb-20">


                {/* Product Details */}
                <DetailCard productData={ProductData} />



                {/* Tabs Section */}
                <section className="mt-12 border-b border-gray-200/90 pb-8">


                    <Tabs defaultValue="benefits" className="w-full">


                        <TabsList className="flex flex-wrap gap-4 bg-transparent p-2 rounded-md justify-center">
                            <TabsTrigger value="benefits" className="px-10 py-6 bg-[#F2F4F7] data-[state=active]:bg-[#145566] data-[state=active]:text-white font-semibold hover:cursor-pointer">KEY BENEFITS</TabsTrigger>
                            <TabsTrigger value="how" className="px-10 py-6 bg-[#F2F4F7] data-[state=active]:bg-[#145566] data-[state=active]:text-white font-semibold hover:cursor-pointer">HOW TO USE</TabsTrigger>
                            <TabsTrigger value="reviews" className="px-10 py-6 bg-[#F2F4F7] data-[state=active]:bg-[#145566] data-[state=active]:text-white font-semibold hover:cursor-pointer">CUSTOMER REVIEWS</TabsTrigger>
                            <TabsTrigger value="faqs" className="px-10 py-6 bg-[#F2F4F7] data-[state=active]:bg-[#145566] data-[state=active]:text-white font-semibold hover:cursor-pointer">FAQS</TabsTrigger>
                        </TabsList>



                        {/* Benfits */}
                        <TabsContent value="benefits" className="mt-[15rem] sm:mt-10 text-gray-800 space-y-2 list-disc list-inside">
                            <ul className="space-y-6 pl-4 list-disc">
                                {ProductData?.benefits?.map((benefit: { id: number, benefit: string }) => {

                                    // Split the benefit string into two parts: before and after the colon
                                    const [title, description] = benefit?.benefit?.split(':');

                                    return (
                                        <li key={benefit?.id}>
                                            <strong>{title}:</strong> {description}
                                        </li>
                                    );

                                })}
                            </ul>
                        </TabsContent>



                        {/* How to use */}
                        <TabsContent value="how" className="mt-[15rem] sm:mt-10">
                            <ul className="space-y-6 pl-4 list-disc">
                                {ProductData?.how_to_use?.map((how: { id: number, how_to_use: string }) => {

                                    return (
                                        <li key={how?.id}>
                                            {how?.how_to_use}
                                        </li>
                                    );
                                })}
                            </ul>
                        </TabsContent>



                        {/* Reviews */}
                        <TabsContent value="reviews" className="mt-[15rem] sm:mt-10">

                            <p className="text-black font-medium mb-5">(Note: Names have been changed in accordance with our privacy policy.)</p>

                            <ul className="space-y-6 pl-4 list-disc">
                                {ProductData?.reviews?.map((review: { id: number, review: string, rating: number }) => {

                                    const stars = "★".repeat(review?.rating)

                                    return (
                                        <li key={review.id} className="text-gray-800">
                                            <span className="font-semibold text-yellow-500 text-lg">{stars} - </span>
                                            <span className="italic">{review?.review}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </TabsContent>


                        {/* Faqs */}
                        <TabsContent value="faqs" className="mt-[15rem] sm:mt-10">
                            {ProductData?.faq?.map((item: { id: number, question: string, answer: string }) => {
                                return (
                                    <div key={item?.id} className="mb-6 p-2">
                                        <p className="font-semibold text-gray-900 mb-2"><strong>Q:</strong> {item?.question} ?</p>
                                        <p className="text-gray-700"><strong>A:</strong> {item?.answer}</p>
                                    </div>
                                );
                            })}
                        </TabsContent>


                    </Tabs>


                </section>


                {/* Related Products */}
                <RelatedProducts id={Number(id)} />


            </div>

        </main>
    )
}
