import { UserAddressTypes } from "@/services/checkout/types";
import { cn } from "@/lib/utils";




// Address Card Props
interface AddressCardProps {
    address: UserAddressTypes;
    isSelected: boolean;
    onSelect: () => void;
}



export const AddressCard = ({ address, isSelected, onSelect, }: AddressCardProps) => {


    return (

        <div
            className={cn(
                "rounded-md border p-4 cursor-pointer transition-all",
                isSelected ? "border-primary bg-[#25434E] shadow-sm text-white" : "border-[#25434E] hover:border-gray-300 hover:bg-accent/10"
            )}
            onClick={onSelect}
        >


            <div className="flex items-start">


                <div className="inline-flex items-center justify-center mr-3 mt-1">
                    <input
                        type="radio"
                        checked={isSelected}
                        onChange={onSelect}
                        className="h-4 w-4 border-gray-300 accent-[#6edde8] focus:ring-2 focus:ring-[#25434E]"
                    />
                </div>


                <div className="flex-1">

                    <div className="flex items-center justify-between mb-1">

                        <div className="flex items-center gap-2">
                            <span className="font-semibold">{address?.name?.toUpperCase()}</span>
                            {address?.address_type && (
                                <span className={`px-2 py-0.5 text-xs rounded-full ${isSelected ? "text-gray-900 bg-muted" : "text-white bg-[#25434E]"}`}>{address?.address_type.toUpperCase()}</span>
                            )}
                        </div>

                        <span className={` ${isSelected ? "text-white" : "text-muted-foreground"} text-sm`}>{address?.phone}</span>

                    </div>


                    <p className={` ${isSelected ? "text-white" : "text-muted-foreground"} text-sm line-clamp-2 mb-1`}>
                        {address?.street_address}
                    </p>


                    <p className="text-sm font-medium">
                        {address?.city}, {address?.state} - {address?.pin_code}
                    </p>


                </div>


            </div>


        </div>


    );

};