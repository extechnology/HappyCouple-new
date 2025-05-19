import { useProduct } from "@/context/Productcontext"
import { useplaceOrder } from "@/services/checkout/mutations";
import { Button } from "../ui/button";
import { Loader2, ShoppingCart, Truck } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { UserAddressTypes } from "@/services/checkout/types";





export default function OrderSummary({ selectedAddress }: { selectedAddress: UserAddressTypes | null }) {


    // Get the Order product
    const { product, clearProduct } = useProduct();



    // Place Order muation
    const { mutate: placeOrder, isPending: isPlaceOrderPending } = useplaceOrder();



    // Navigate
    const navigate = useNavigate();



    // Check Product
    useEffect(() => {
        if (!product) {
            toast.error("Oops..!", { description: "No Product Found....!", duration: 7000 })
            navigate("/treatmentplans");
        }
    }, [product]);

    


    // Place Order
    const Order = () => {


        if(!selectedAddress) return toast.error("Oops..!", { description: "Please select a delivery address.", duration: 7000 })


        const formData = new FormData();


        formData.append("product", product?.id.toString() ?? "");
        formData.append("price", product?.price.toString() ?? "");
        formData.append("address", selectedAddress?.id.toString() ?? "");



        placeOrder(formData, {

            onSuccess: (response) => {

                if (response.status >= 200 && response.status <= 300) {


                    // Payment URL
                    const paymentUrl = response?.data?.payment_data?.payment_url;


                    if (paymentUrl) {

                        window.location.href = paymentUrl;

                    } else {

                        toast.error("Payment URL Missing", { description: "Unable to proceed to payment, please contact support.", duration: 9000 });

                    }

                    clearProduct();

                } else {

                    console.error("Failed to Place Order", response);
                    toast.error("Oops..!", { description: "Something went wrong Please try again.", duration: 7000 })

                }

            }
        })
    }



    return (

        <section className="space-y-6 bg-[#EAF5F6] sm:p-10 p-5 rounded-2xl sticky top-4">


            <h3 className="text-lg font-semibold text-gray-800 flex items-center">Order Summary <Truck className="ml-2" /></h3>



            {/*  Product Image  */}
            <div className="bg-transparent overflow-hidden">
                <img
                    src={product?.image ?? "https://via.placeholder.com/400"}
                    loading='lazy'
                    alt={product?.name}
                    className="w-full h-auto object-cover"
                />
            </div>



            {/* Product Details */}
            <div className="space-y-2 text-gray-700">
                <p className="font-medium">
                    {product?.name ?? "Not Found"}
                </p>
                <p className="text-xl font-bold text-gray-900">₹{product?.price ?? "0.00"}</p>
            </div>



            <div className="border-t border-gray-200 pt-4 space-y-2 text-gray-700">
                <div className="flex justify-between">
                    <span>Sub total</span>
                    <span>₹{product?.price ?? "0.00"}</span>
                </div>
                <div className="flex justify-between">
                    <span>Tax</span>
                    <span>₹0</span>
                </div>
                <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="flex justify-between font-semibold text-gray-900">
                    <span>Total</span>
                    <span>₹{product?.price ?? "0.00"}</span>
                </div>
            </div>



            <div className="p-4">
                <Button
                    disabled={isPlaceOrderPending}
                    onClick={() => Order()}
                    className={`w-full border-2 py-6 flex items-center justify-center gap-2 bg-[#25434E] text-white font-semibold text-base transition-all duration-300 ease-in-out ${isPlaceOrderPending ? "cursor-not-allowed opacity-50" : "hover:scale-[1.02] hover:shadow-lg hover:bg-[#2b444e] hover:cursor-pointer"}`}
                >
                    {isPlaceOrderPending ? (
                        <>
                            Placing Order...
                            <Loader2 className="animate-spin ml-2" />
                        </>
                    ) : (
                        <>
                            Place Order
                            <ShoppingCart size={24} className="ml-2" />
                        </>
                    )}

                </Button>
            </div>



        </section>


    )




}
