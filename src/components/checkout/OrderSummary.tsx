

export default function OrderSummary() {


    return (

        <section className="space-y-6 bg-[#EAF5F6] sm:p-10 p-5 rounded-2xl">


            <h3 className="text-lg font-semibold text-gray-800">Order Summary</h3>


            <div className="bg-transparent overflow-hidden">
                <img
                    src="/Lygin.png"
                    loading='lazy'
                    alt="Product"
                    className="w-full h-60 object-cover"
                />
            </div>


            <div className="space-y-2 text-gray-700">
                <p className="font-medium">
                    VitalCore Solution – Nutraceutical Therapy (1470 for 1‑Month Supply)
                </p>
                <p className="text-xl font-bold text-gray-900">₹320.45</p>
            </div>

            <div className="border-t border-gray-200 pt-4 space-y-2 text-gray-700">
                <div className="flex justify-between">
                    <span>Sub total</span>
                    <span>₹316.55</span>
                </div>
                <div className="flex justify-between">
                    <span>Tax</span>
                    <span>₹3.45</span>
                </div>
                <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>—</span>
                </div>
                <div className="flex justify-between font-semibold text-gray-900">
                    <span>Total</span>
                    <span>₹320.45</span>
                </div>
            </div>


        </section>


    )




}
