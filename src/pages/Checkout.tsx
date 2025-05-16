import OrderSummary from "@/components/checkout/OrderSummary";
import { AddressSection } from "@/components/checkout/AddressSection";
import { UserAddressTypes } from "@/services/checkout/types";
import { useState } from "react";
import { toast } from "sonner";




export default function checkout() {



    // Selected Address
    const [selectedAddress, setSelectedAddress] = useState<UserAddressTypes | null>(null);



    // Handle Address Selection
    const handleAddressSelect = (address: UserAddressTypes) => {

        if (!address) return;

        setSelectedAddress(address);
        toast.success("Delivery address selected", { description: `Delivering to ${address?.name} in ${address?.city}`, duration: 5000 });

    };



    return (


        <main className="bg-white rounded-lg py-5 sm:py-8">


            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:px-10 px-2">


                {/* ─── Right: Order Summary (Mobile First) ─── */}
                <div className="order-1 md:order-2 col-span-full md:col-span-4">
                    <OrderSummary selectedAddress={selectedAddress} />
                </div>


                {/* ──────────── Left: Shipping Details ─────── */}
                <div className="order-2 md:order-1 col-span-full md:col-span-8">
                    <AddressSection onAddressSelect={handleAddressSelect} selectedAddress={selectedAddress} />
                </div>


            </div>


        </main>


    );
}
