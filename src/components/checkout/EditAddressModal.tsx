import { UserAddressTypes } from "@/services/checkout/types";
import { useEditUserAddress } from "@/services/checkout/mutations";
import { Dialog, DialogContent } from "../ui/dialog";
import { Loader2, MapPinHouse, Save} from "lucide-react";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import indianStatesCities from '..//../Data/indian-states-cities.json';
import { useEffect, useState } from "react";
import { toast } from "sonner";




// Props Types
interface EditAddressModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    AddressData: UserAddressTypes
}



// Zod Schema
const addressSchema = z.object({
    name: z.string().nonempty("Name is required"),
    phone: z.string().nonempty("Phone number is required").refine((value) => /^[0-9]{12}$/.test(value), { message: "Please enter a valid phone number", }),
    pincode: z.string().regex(/^[0-9]{6}$/, "Please enter a valid pincode"),
    landmark: z.string().nonempty("Please enter a valid landmark"),
    addressLine: z.string().nonempty("Please enter a valid address"),
    state: z.string().nonempty("Please select a state"),
    city: z.string().nonempty("Please select a city"),
    addressType: z.union([z.enum(["HOME", "WORK"]), z.string()]),
});



type AddressFormData = z.infer<typeof addressSchema>;



export default function EditAddressModal({ isOpen, setIsOpen, AddressData }: EditAddressModalProps) {



    // Mutations For Edit Address
    const { mutate: EditUserAddress, isPending: isEditPending } = useEditUserAddress()




    // City
    const [cities, setCities] = useState<string[]>([]);




    // Use form 
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        formState: { errors },
    } = useForm<AddressFormData>({
        resolver: zodResolver(addressSchema),
        mode: "onChange",
        defaultValues: {
            addressType: AddressData?.address_type ?? "HOME",
            addressLine: AddressData?.street_address ?? "",
            city: AddressData?.city ?? "",
            landmark: AddressData?.landmark ?? "",
            name: AddressData?.name ?? "",
            phone: AddressData?.phone ?? "",
            pincode: AddressData?.pin_code ?? "",
            state: AddressData?.state ?? "",
        },
    });



    const selectedState = watch("state");



    // Update cities on state change
    useEffect(() => {
        const stateData = indianStatesCities.states.find((item: any) => item.name === selectedState);
        setCities(stateData ? stateData.cities : []);
    }, [selectedState]);





    // Handle Submit Edit
    const onSubmit = (data: AddressFormData) => {


        const formdata = new FormData();


        formdata.append("id", AddressData?.id.toString() ?? "");
        formdata.append("name", data.name);
        formdata.append("phone", data.phone);
        formdata.append("pin_code", data.pincode);
        formdata.append("landmark", data.landmark);
        formdata.append("street_address", data.addressLine);
        formdata.append("state", data.state);
        formdata.append("city", data.city);
        formdata.append("address_type", data.addressType);


        EditUserAddress(formdata, {

            onSuccess: (response) => {

                if (response.status >= 200 && response.status <= 300) {

                    toast.success("Successfully Updated", { description: "You have successfully Updated Your Address", duration: 5000 })
                    setIsOpen(false);
                    reset()

                } else {

                    toast.error("Oops..!", { description: "Something went wrong Please try again", duration: 5000 })
                    console.error(response);
                    reset()

                }

            }

        });

    };



    return (


        <>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>


                <DialogContent className="p-0 max-h-[100vh] overflow-auto !max-w-4xl sm:rounded-3xl bg-white border-0 animate-scale-in">



                    <section className="p-4 sm:p-10 pt-6 sm:pt-8 w-full">


                        <h2 className="text-xl sm:text-3xl font-semibold text-[#25434E] mb-8">Manage Your Address <MapPinHouse className="w-7 h-7 inline-block" /></h2>


                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">


                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-[#145566]">Full Name</Label>
                                    <Input id="name" placeholder="Name" {...register("name")} className="border border-gray-400 p-5 focus:!ring-2 focus:!ring-[#25434E]" />
                                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="text-[#145566]">Phone Number</Label>
                                    <PhoneInput
                                        country={"in"}
                                        value={watch("phone")}
                                        onChange={(value) => setValue("phone", value, { shouldValidate: true })}
                                        placeholder="Eg: 1234567890"
                                        enableSearch
                                        containerClass="w-full"
                                        inputClass="!w-full !h-[44px] !pl-14 !pr-3 !border !border-gray-400 !rounded-md !bg-transparent focus:!outline-none focus:!ring-2 focus:!ring-[#145566] text-sm"
                                        buttonClass="!border-none !bg-transparent !left-3 !top-1/2 !-translate-y-1/2"
                                        inputProps={{
                                            name: "phone",
                                            required: true,
                                            autoFocus: false,
                                            autoComplete: "tel",
                                        }}
                                        dropdownClass="!text-left"
                                    />
                                    {errors.phone && (
                                        <p className="text-red-500 text-sm text-start mt-2">
                                            {errors.phone.message}
                                        </p>
                                    )}
                                </div>

                            </div>



                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                <div className="space-y-2">
                                    <Label htmlFor="pincode" className="text-[#145566]">Pincode</Label>
                                    <Input id="pincode" placeholder="Pincode" {...register("pincode")} className="border border-gray-400 p-5 focus:!ring-2 focus:!ring-[#25434E]" />
                                    {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode.message}</p>}
                                </div>


                                <div className="space-y-2">
                                    <Label htmlFor="landmark" className="text-[#145566]">LandMark</Label>
                                    <Input id="landmark" placeholder="Landmark" {...register("landmark")} className="border border-gray-400 p-5 focus:!ring-2 focus:!ring-[#25434E]" />
                                    {errors.landmark && <p className="text-red-500 text-sm">{errors.landmark.message}</p>}
                                </div>

                            </div>



                            <div className="space-y-2">
                                <Label htmlFor="addressLine" className="text-[#145566]">Address (Area and Street)</Label>
                                <Input id="addressLine" placeholder="Address (Area and Street)" {...register("addressLine")} className="border border-gray-400 p-5 focus:!ring-2 focus:!ring-[#25434E]" />
                                {errors.addressLine && <p className="text-red-500 text-sm">{errors.addressLine.message}</p>}
                            </div>




                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


                                <div className="space-y-2">
                                    <Label className="text-[#145566]">State</Label>
                                    <select {...register("state")} className="w-full border border-gray-400 p-2 focus:!ring-2 focus:!ring-[#25434E] rounded">
                                        <option value="" disabled>--Select State--</option>
                                        {indianStatesCities.states.map((item: any) => (
                                            <option key={item.name} value={item.name}>
                                                {item.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
                                </div>


                                <div className="space-y-2">
                                    <Label className="text-[#145566]">District/City</Label>
                                    <select {...register("city")} className="w-full border border-gray-400 p-2 focus:!ring-2 focus:!ring-[#25434E] rounded" disabled={!selectedState}>
                                        <option value="" disabled>{selectedState ? "--Select City--" : "--Select state first--"}</option>
                                        {cities.map((city) => (
                                            <option key={city} value={city}>
                                                {city}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
                                </div>

                            </div>



                            <RadioGroup
                                className="flex gap-4"
                                value={watch("addressType") || "HOME"}
                                onValueChange={(value) => setValue("addressType", value as "HOME" | "WORK", { shouldValidate: true })}
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="HOME"
                                        id="home"
                                        className="ring-1 ring-gray-400 ring-offset-2 focus:ring-2 focus:ring-[#25434E] checked:ring-[#25434E] checked:ring-2 checked:ring-offset-2"
                                    />
                                    <Label htmlFor="home" className="cursor-pointer">Home (All day delivery)</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="WORK"
                                        id="work"
                                        className="ring-1 ring-gray-400 ring-offset-2 focus:ring-2 focus:ring-[#25434E] checked:ring-[#25434E] checked:ring-2 checked:ring-offset-2"
                                    />
                                    <Label htmlFor="work" className="cursor-pointer">Work (Delivery between 10 AM - 5 PM)</Label>
                                </div>
                            </RadioGroup>




                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between pt-4">


                                <Button
                                    type="button"
                                    className="bg-white hover:cursor-pointer text-[#25434E] p-5 border border-[#25434E] hover:bg-[#f0fafa] hover:text-[#1d3c44] hover:shadow-md hover:scale-[1.02] transition-all duration-200 ease-in-out focus:ring-2 focus:ring-[#25434E] focus:ring-offset-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    CANCEL
                                </Button>


                                <Button
                                    type="submit"
                                    disabled={isEditPending}
                                    className={`${isEditPending && "cursor-not-allowed opacity-50"} bg-[#25434E] hover:cursor-pointer text-white p-5 hover:bg-[#1d3c44] hover:shadow-md hover:scale-[1.02] transition-all duration-200 ease-in-out focus:ring-2 focus:ring-[#25434E] focus:ring-offset-2`}
                                >

                                    {isEditPending ? (

                                        <>

                                            Saving...<Loader2 className="animate-spin" />

                                        </>

                                    ) : (

                                        <>

                                            Save Changes <Save className="ml-2" />

                                        </>

                                    )}

                                </Button>

                            </div>


                        </form>


                    </section>


                </DialogContent>

            </Dialog>


        </>


    )


}
