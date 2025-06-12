import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AddressForm } from "./AddressForm";
import { AddressCard } from "./AddressCard";
import { Loader2, MapPin, ChevronDown, ChevronUp, CirclePlus, MapPinHouse, AlertTriangle } from "lucide-react";
import { useGetUserAddress } from "@/services/checkout/queries";
import { UserAddressTypes } from "@/services/checkout/types";



// Props
interface AddressSectionProps {
    onAddressSelect: (address: UserAddressTypes) => void;
    selectedAddress: UserAddressTypes | null;
}



export const AddressSection: React.FC<AddressSectionProps> = ({ onAddressSelect, selectedAddress }) => {


    const [showAddForm, setShowAddForm] = useState(false);
    const [showAllAddresses, setShowAllAddresses] = useState(false);



    // Get User Address Data
    const { data: userAddress, isFetching, isLoading, isSuccess, isError } = useGetUserAddress();




    // Select Default Address
    useEffect(() => {

        if (!isSuccess || !userAddress) return;

        const defaultAddress = userAddress?.find((address: UserAddressTypes) => address?.default) || userAddress[0];
        onAddressSelect(defaultAddress);

    }, [isSuccess, userAddress]);





    // Determine which addresses to show
    const visibleAddresses = showAllAddresses || (userAddress?.length ?? 0) <= 3
        ? userAddress
        : userAddress?.slice(0, 3);

    const hasMoreAddresses = (userAddress?.length ?? 0) > 3;




    return (

        <section>

            <Card className="shadow-md bg-[#EAF5F6]">


                <CardHeader className="bg-[#EAF5F6]/70">
                    <CardTitle className="flex items-center gap-2 text-xl border-b border-gray-200 pb-4">
                        <MapPin className="h-5 w-5" />
                        DELIVERY ADDRESS
                    </CardTitle>
                </CardHeader>



                <CardContent className="p-0">

                    {isLoading || isFetching || !userAddress ? (

                        <div className="flex justify-center items-center p-10">
                            <Loader2 className="h-6 w-6 animate-spin" />
                        </div>

                    ) : isError ? (

                        <div className="flex flex-col justify-center items-center p-10 space-y-4 animate-fade-in">

                            <div className="h-16 w-16 flex items-center justify-center animate-float">
                                <AlertTriangle className="h-10 w-10 text-red-500 animate-bounce-slow" />
                            </div>

                            <p className="text-base text-red-600 font-semibold text-center animate-fade-in-up transition-all duration-1000 ease-in-out">
                                Failed to load addresses.<br />
                                <span className="text-sm font-medium opacity-80">Please try again.</span>
                            </p>

                        </div>

                    ) : (

                        <>

                            {userAddress?.length > 0 ? (

                                <>

                                    <div className="md:p-4 p-1 pt-0">
                                        <div className="space-y-4">
                                            {visibleAddresses?.map((address: UserAddressTypes) => (
                                                <AddressCard
                                                    key={address?.id}
                                                    address={address}
                                                    isSelected={selectedAddress?.id === address?.id}
                                                    onSelect={() => onAddressSelect(address)}
                                                />
                                            ))}
                                        </div>
                                    </div>


                                    {hasMoreAddresses && (

                                        <div className="px-4 pb-4">

                                            <Button
                                                className="w-full bg-transparent hover:bg-[#d5ecf8] py-6 hover:cursor-pointer flex items-center justify-center text-sm text-primary hover:text-foreground"
                                                onClick={() => setShowAllAddresses(!showAllAddresses)}
                                            >
                                                {showAllAddresses ? (
                                                    <>View Less <ChevronUp className="ml-1 h-4 w-4" /></>
                                                ) : (
                                                    <>View More ({userAddress?.length - 3} more) <ChevronDown className="ml-1 h-4 w-4" /></>
                                                )}
                                            </Button>

                                        </div>

                                    )}


                                </>

                            ) : (

                                <div className="p-6 flex flex-col items-center justify-center bg-transparent animate-fade-in space-y-4">

                                    <div className="h-16 w-16 text-[#25434E] animate-float flex items-center justify-center">
                                        <MapPinHouse className="h-16 w-16 text-[#25434E] animate-bounce-slow" />
                                    </div>

                                    <p className="text-md text-[#25434E] font-semibold text-center animate-fade-in-up transition-all duration-1000 ease-in-out">
                                        No address found.<br />
                                        <span className="text-sm font-medium opacity-80">Please add an address to continue.</span>
                                    </p>

                                </div>

                            )}



                            {!showAddForm && (

                                <div className="p-4">
                                    <Button

                                        className="w-full bg-[#25434E] border-2 py-6 flex items-center justify-center gap-2 hover:bg-[#2b444e] hover:cursor-pointer"
                                        onClick={() => setShowAddForm(true)}
                                    >
                                        <CirclePlus size={20} />
                                        ADD A NEW ADDRESS
                                    </Button>
                                </div>

                            )}


                        </>

                    )}

                </CardContent>

            </Card>



            {showAddForm && (

                <Card className="shadow-md bg-[#EAF5F6] mt-5">

                    <CardHeader className="bg-[#EAF5F6]/70">
                        <CardTitle className="flex items-center gap-2 text-xl border-b border-gray-200 pb-4">
                            <CirclePlus size={20} />
                            ADD DELIVERY ADDRESS
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="p-0">

                        <div className="md:p-4 p-1">
                            <AddressForm
                                onCancel={() => setShowAddForm(false)}
                            />
                        </div>

                    </CardContent>

                </Card>

            )}


        </section>



    );

};
