import { LockKeyhole } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';



// Utils
const today = new Date();
const formatDate = (date: Date) => date.toISOString().split("T")[0];



// Dynamic Time Slot Generator
const generateTimeSlots = (isToday: boolean) => {

    const now = new Date();
    const slots: string[] = [];

    for (let hour = 9; hour < 21; hour++) {

        const slotStart = new Date();
        slotStart.setHours(hour, 0, 0, 0);

        if (!isToday || slotStart > now) {

            const nextHour = hour + 1;
            const formatHour = (h: number) => {
                const suffix = h >= 12 ? "PM" : "AM";
                const displayHour = h > 12 ? h - 12 : h;
                return `${displayHour}:00 ${suffix}`;
            };
            slots.push(`${formatHour(hour)} - ${formatHour(nextHour)}`);
        }
    }

    return slots;

};




// Form Schema
const formSchema = z.object({
    name: z.string().nonempty("Name is required"),
    phone: z.string()
        .nonempty("Phone number is required")
        .transform(val => val.replace(/[^+\d]/g, ""))  // Clean input by removing non-numeric characters (except +)
        .refine(val => /^\+\d{10,15}$/.test(val), {  // Validate that it follows the international format
            message: "Enter a valid phone number",
        }),
    email: z.string().refine((value) => value === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), { message: "Please enter a valid email address", }).optional(),
    date: z.string().nonempty("Please select a date").refine((val) => {
        const selected = new Date(val);
        const minDate = new Date(formatDate(today));
        return selected >= minDate;
    }, { message: "Please select a date" }),
    time: z.string().nonempty("Please select a time"),
    health: z.string().optional(),
});




type FormData = z.infer<typeof formSchema>;



export default function DocForm() {



    // use form
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            date: formatDate(today),
            time: "",
            health: "",
        },
    });



    // Get selected date
    const selectedDate = form.watch("date");



    // Time Slots
    const [timeSlots, setTimeSlots] = useState<string[]>([]);



    // Update time slots when date changes
    useEffect(() => {
        const selected = new Date(selectedDate);
        const isToday =
            selected.toDateString() === new Date().toDateString();
        setTimeSlots(generateTimeSlots(isToday));
    }, [selectedDate]);




    // Form submit 
    const onSubmit = (values: FormData) => {
        console.log("Form Data =>", values);
    };



    // Get selected time
    const selectedTime = form.watch("time");




    return (


        <form className="mt-10 space-y-12 sm:space-y-10" onSubmit={form.handleSubmit(onSubmit)}>



            {/* Name */}
            <div>
                <label className="block text-left text-[#145566] mb-1">Name</label>
                <input
                    type="text"
                    {...form.register("name")}
                    placeholder="Full Name"
                    autoComplete="name"
                    className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#145566]"
                />
                {form.formState.errors.name && <p className="text-red-500 text-sm text-start mt-2">{form.formState.errors.name.message}</p>}
            </div>



            <div>
                <label className="block text-left text-[#145566] mb-1">
                    Phone Number (WhatsApp preferred)
                </label>
                <PhoneInput
                    country={"in"}
                    value={form.watch("phone")}
                    onChange={(value) => form.setValue("phone", value, { shouldValidate: true })}
                    placeholder="Eg: 1234567890"
                    enableSearch
                    containerClass="w-full"
                    inputClass="!w-full !h-[44px] !pl-14 !pr-3 !border !border-gray-400 !rounded-md !bg-white focus:!outline-none focus:!ring-2 focus:!ring-[#145566] text-sm"
                    buttonClass="!border-none !bg-transparent !left-3 !top-1/2 !-translate-y-1/2"
                    inputProps={{
                        name: "phone",
                        required: true,
                        autoFocus: false,
                        autoComplete: "tel",
                    }}
                    dropdownClass="!text-left" // This is where the alignment change happens
                />
                {form.formState.errors.phone && (
                    <p className="text-red-500 text-sm text-start mt-2">
                        {form.formState.errors.phone.message}
                    </p>
                )}
            </div>



            {/* Email */}
            <div>
                <label className="block text-left text-[#145566] mb-1">Email ID (Optional)</label>
                <input
                    type="email"
                    autoComplete="email"
                    {...form.register("email")}
                    placeholder="email@example.com"
                    className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#145566]"
                />
                {form.formState.errors.email && <p className="text-red-500 text-sm text-start mt-2">{form.formState.errors.email.message}</p>}
            </div>




            {/* Date & Time */}
            <div>

                <label className="block text-left text-[#145566] mb-1">Preferred Date & Time to Call</label>

                <div className="grid grid-cols-2 gap-4">

                    <input
                        type="date"
                        {...form.register("date")}
                        min={formatDate(today)}
                        className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#145566]"
                    />


                    <select
                        {...form.register("time")}
                        className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#145566]"
                    >
                        <option value="" disabled>Select Time</option>
                        {timeSlots.map((slot, idx) => (
                            <option key={idx} value={slot}>
                                {slot}
                            </option>
                        ))}
                    </select>

                </div>


                {form.formState.errors.date && <p className="text-red-500 text-sm text-start">{form.formState.errors.date.message}</p>}


                {form.formState.errors.time && <p className="text-red-500 text-sm text-end mt-2">{form.formState.errors.time.message}</p>}


                {/* Live Preview */}
                {selectedDate && selectedTime && (
                    <p className="text-green-600 mt-2 text-md font-medium">
                        Selected {selectedDate} at {selectedTime}
                    </p>
                )}

            </div>



            {/* Health Concern */}
            <div>
                <label className="block text-left text-[#145566] mb-1">
                    Health Concern (Optional, Helps Us Assign the Right Doctor)
                </label>
                <select
                    {...form.register("health")}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#145566]"
                >
                    <option value="" disabled>Select Concern</option>
                    <option value="Erectile dysfunction">Erectile dysfunction</option>
                    <option value="Low libido">Low libido</option>
                    <option value="Relationship support">Relationship support</option>
                    <option value="Others">Others</option>
                </select>
                {form.formState.errors.health && <p className="text-red-500 text-sm text-start">{form.formState.errors.health.message}</p>}
            </div>




            {/* Payment */}
            <div>
                <label className="block text-left text-[#145566] mb-1">
                    Make Payment - ₹300 (Secure Razorpay or UPI integration)
                </label>
                <button
                    type="submit"
                    className="w-full bg-[#145566] hover:cursor-pointer flex items-center justify-center text-white text-lg font-medium py-3 rounded-md transition-all duration-300 ease-in-out hover:bg-[#0e404d] hover:scale-105"
                >
                    Pay Now <LockKeyhole size={20} className="ml-2" />
                </button>
                <p className="text-sm text-gray-400 mt-2">
                    Note: Your ₹300 will be completely refunded if you choose to proceed with any treatment plan suggested after consultation
                </p>
            </div>


        </form>

    );

}
