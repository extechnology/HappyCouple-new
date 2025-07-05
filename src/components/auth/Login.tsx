import { useState } from "react";
import { Eye, EyeOff, Loader2, LogIn } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner";
import { useUserLogin } from "@/services/auth/mutations";
import { useAuth } from "@/context/Authcontext";
import { useLocation, useNavigate } from "react-router-dom";
import ForgetPassword from "./ForgetPassword";





// Form Schema
const passwordSchema = z.string().min(8, "Password must be at least 8 characters").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, "Password must include uppercase, lowercase, number, and special character");


const formSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: passwordSchema,
})




export default function Login() {


    // Show Password
    const [showPassword, setShowPassword] = useState(false)




    // Forgot Password Modal
    const [forgotModal, setForgotModal] = useState(false);




    // Navigation
    const Navigate = useNavigate()




    // Get the current path
    const location = useLocation();




    // Register Mutation
    const { mutate: mutateLogin, isPending: isLoginPending } = useUserLogin();




    // Login Context
    const { login } = useAuth()




    // Use form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        defaultValues: {

            email: "",
            password: "",

        },
    });




    // Submit Login
    const SubmitLogin = (values: z.infer<typeof formSchema>) => {


        const formdata = new FormData()

        formdata.append("username", values.email)
        formdata.append("password", values.password)


        // Mutate
        mutateLogin(formdata, {

            onSuccess: (response) => {

                if (response.status >= 200 && response.status <= 300) {

                    const from = location.state?.from?.pathname || "/";

                    login(response.data.access)
                    toast.success("Login Success", { description: "You have successfully Logged in", duration: 5000 })
                    form.reset()

                    Navigate(from, { replace: true })
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

                toast.error("Oops..!", { description: "Something went wrong Please try again.", duration: 5000 })
                return;

            }
            if (typeof errors === "string") {

                toast.error("Oops..!", { description: errors, duration: 5000 })

            } else if (errors.detail) {

                toast.error("Oops..!", { description: errors.detail, duration: 5000 })

            } else if (Array.isArray(errors)) {

                errors.forEach((message: string) => {
                    toast.error("Oops..!", { description: message, duration: 5000 })
                });

            } else if (typeof errors === "object") {

                Object.entries(errors).forEach(([key, value]) => {
                    if (Array.isArray(value)) {
                        console.log(key);
                        value.forEach((message: string) => toast.error("Oops..!", { description: message, duration: 5000 }));
                    } else {

                        toast.error("Oops..!", { description: value as string, duration: 5000 })
                    }
                });

            } else {

                toast.error("Oops..!", { description: "An unknown error occurred.", duration: 5000 })
            }
        };

    }








    return (


        <section className="w-full">


            <form className="space-y-5" onSubmit={form.handleSubmit(SubmitLogin)}>


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




                <div onClick={() => { setForgotModal(!forgotModal) }} className="text-right text-sm text-blue-600 hover:underline cursor-pointer">
                    Forgot Password?
                </div>


                <button
                    type="submit"
                    disabled={isLoginPending}
                    className={`w-full bg-[#145566] text-white py-2 rounded-md text-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 hover:bg-[#0f444f] ${isLoginPending ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                >
                    <LogIn size={20} /> Sign In {isLoginPending && <Loader2 className="animate-spin" />}

                </button>


            </form>



            {/* Forget Password Modal */}
            <ForgetPassword isOpen={forgotModal} setIsOpen={setForgotModal} />


        </section>




    )



}
