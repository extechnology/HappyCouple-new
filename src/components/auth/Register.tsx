import { useState } from 'react'
import { UserPlus, Eye, EyeOff, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner";
import { useUserRegister } from "@/services/auth/mutations";
import EmailOtp from './EmailOtp';



// Form Schema
const passwordSchema = z.string().min(8, "Password must be at least 8 characters").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, "Password must include uppercase, lowercase, number, and special character");


const formSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: passwordSchema,
    password_reenter: z.string().min(8, "Password must be at least 8 characters"),
}).refine((data) => data.password === data.password_reenter, {
    path: ["password_reenter"],
    message: "Password do not match",
});




export default function Register() {


    // Show Password
    const [showPassword, setShowPassword] = useState(false)
    const [showReenterPassword, setShowReenterPassword] = useState(false)



    // Register Data
    const [RegisterData, setRegisterData] = useState({});



    // Otp Modal
    const [otpModal, setOtpModal] = useState(false);




    // Register Mutation
    const { mutate: mutateRegister, isPending: isRegisterPending } = useUserRegister();



    // Use form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        defaultValues: {

            email: "",
            password: "",
            password_reenter: ""

        },
    });



    // Submit Register
    const SubmitRegister = (values: z.infer<typeof formSchema>) => {

        setRegisterData(values)

        const formdata = new FormData()

        formdata.append("email", values.email)
        formdata.append("username", values.email)
        formdata.append("password", values.password)
        formdata.append("password_confirm", values.password_reenter)


        // Mutate
        mutateRegister(formdata, {

            onSuccess: (response) => {

                if (response.status >= 200 && response.status <= 300) {

                    setOtpModal(true)
                }
                else {

                    console.log(response)
                    handleErrors(response?.response?.data);

                }

            }

        })


        // Function to handle and display errors
        const handleErrors = (errors: any) => {
            if (!errors) {

                toast.error("Ops..!", { description: "Something went wrong Please try again.", duration: 5000 })
                return;

            }
            if (typeof errors === "string") {

                toast.error("Ops..!", { description: errors, duration: 5000 })

            } else if (errors.detail) {

                toast.error("Ops..!", { description: errors.detail, duration: 5000 })

            } else if (Array.isArray(errors)) {

                errors.forEach((message: string) => {
                    toast.error("Ops..!", { description: message, duration: 5000 })
                });

            } else if (typeof errors === "object") {

                Object.entries(errors).forEach(([key, value]) => {
                    if (Array.isArray(value)) {
                        console.log(key);
                        value.forEach((message: string) => toast.error("Ops..!", { description: message, duration: 5000 }));
                    } else {

                        toast.error("Ops..!", { description: value as string, duration: 5000 })
                    }
                });

            } else {

                toast.error("Ops..!", { description: "An unknown error occurred.", duration: 5000 })
            }
        };

    }








    return (


        <section className="w-full">


            <form className="space-y-5" onSubmit={form.handleSubmit(SubmitRegister)}>


                <div>
                    <label className="block text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        {...form.register("email")}
                        placeholder="Example@email.com"
                        className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#25758A]"
                    />
                    {form.formState.errors.email && (
                        <p className="text-red-500 text-xs mt-1 p-1">
                            {form.formState.errors.email.message}
                        </p>
                    )}
                </div>



                <div className="relative">
                    <label className="block text-gray-700 mb-1">Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        {...form.register("password")}
                        autoComplete='current-password'
                        placeholder="At least 8 characters"
                        className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#25758A]"
                    />
                    <div
                        className="absolute top-9 right-3 cursor-pointer text-gray-500"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </div>
                    {form.formState.errors.password && (
                        <p className="text-red-500 text-xs mt-1 p-1">
                            {form.formState.errors.password.message}
                        </p>
                    )}
                </div>



                <div className="relative mt-4">
                    <label className="block text-gray-700 mb-1">Re-enter Password</label>
                    <input
                        type={showReenterPassword ? "text" : "password"}
                        {...form.register("password_reenter")}
                        autoComplete='current-password'
                        placeholder="Confirm password"
                        className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#25758A]"
                    />
                    <div
                        className="absolute top-9 right-3 cursor-pointer text-gray-500"
                        onClick={() => setShowReenterPassword(!showReenterPassword)}
                    >
                        {showReenterPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </div>
                    {form.formState.errors.password_reenter && (
                        <p className="text-red-500 text-xs mt-1 p-1">
                            {form.formState.errors.password_reenter.message}
                        </p>
                    )}
                </div>


                <button
                    type="submit"
                    disabled={isRegisterPending}
                    className={`w-full bg-[#145566] text-white py-2 rounded-md text-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 hover:bg-[#0f444f] ${isRegisterPending ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                >
                    <UserPlus size={20} /> Sign up {isRegisterPending && <Loader2 className="animate-spin" />}

                </button>


            </form>


            {/* Email Verification Modal */}
            <EmailOtp isOpen={otpModal} setIsOpen={setOtpModal} RegisterData={RegisterData} reset={form.reset} />


        </section>


    )


}
