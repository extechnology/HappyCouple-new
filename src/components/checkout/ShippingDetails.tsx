import { Check, LockKeyhole } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';



export default function ShippingDetails() {


    return (


        <section className="space-y-6 bg-[#EAF5F6] sm:p-10 p-5 rounded-2xl">


            {/* Step Indicator */}
            <div className="flex justify-center items-center text-gray-700 font-medium">
                <span>Shipping</span>
                <span className="px-2">—</span>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-700 text-white">
                    <Check size={14} />
                </span>
                <span className="px-2">—</span>
                <span>Payment</span>
            </div>


            <h3 className="text-lg font-semibold text-gray-800">Shipping details</h3>


            {/* Saved address */}
            <div>
                <label className="block text-gray-500 mb-1">Use Saved Address</label>
                <Select>
                    <SelectTrigger className="w-full h-16 border border-gray-400 rounded-md px-3 py-5 pr-4 focus:outline-none focus:ring-2 focus:ring-[#25434E]">
                        <SelectValue placeholder="Select Address" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#EAF5F6] dark:bg-gray-800">
                        <SelectItem value="online">Ramanattukara Kozhikode kerala India</SelectItem>

                    </SelectContent>
                </Select>
            </div>

            {/* Address lines */}
            <div>
                <label className="block text-gray-500 mb-1">First line of address</label>
                <div className="relative">
                    <input
                        type="text"
                        defaultValue="123"
                        className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#25434E]"
                    />
                </div>
            </div>


            <div>
                <label className="block text-gray-500 mb-1">Street name</label>
                <div className="relative">
                    <input
                        type="text"
                        defaultValue="ramanattukara"
                        className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#25434E]"
                    />
                </div>
            </div>


            {/* Postcode & Shipping method */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>
                    <label className="block text-gray-500 mb-1">Postcode</label>
                    <input
                        type="text"
                        defaultValue="234 123"
                        className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#25434E]"
                    />
                </div>


                <div>
                    <label className="block text-gray-500 mb-1">Payment Mode</label>
                    <Select>
                        <SelectTrigger className="w-full h-16 border border-gray-400 rounded-md px-3 py-5 pr-4 focus:outline-none focus:ring-2 focus:ring-[#25434E]">
                            <SelectValue placeholder="Select Payment Method" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#EAF5F6] dark:bg-gray-800">
                            <SelectItem value="online">Online Payment</SelectItem>
                            <SelectItem value="cod">Cash on Delivery (COD)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>


            </div>


            {/* Actions */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-200">

                <button className="text-gray-700 hover:underline hover:cursor-pointer">Cancel order</button>

                <button className="bg-[#25434E] hover:cursor-pointer text-white px-6 py-2 rounded-md hover:bg-teal-900 transition flex justify-center items-center">
                    Payment <LockKeyhole size={18} className='ml-2' />
                </button>

            </div>


        </section>




    )




}
