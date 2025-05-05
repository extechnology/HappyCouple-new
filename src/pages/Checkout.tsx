import ShippingDetails from "@/components/checkout/ShippingDetails";
import OrderSummary from "@/components/checkout/OrderSummary";


export default function checkout() {


    return (


        <main className="bg-white rounded-lg py-5 sm:py-8">


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:px-10 px-2">


                {/* ─── Right: Order Summary (Mobile First) ─── */}
                <div className="order-1 md:order-2">
                    <OrderSummary />
                </div>


                {/* ──────────── Left: Shipping Details ─────── */}
                <div className="order-2 md:order-1">
                    <ShippingDetails />
                </div>


            </div>


        </main>


    );
}
