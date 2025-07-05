import { useGoogleLogin } from "@react-oauth/google";
import { toast } from "sonner";
import { useGoogleAuth } from "@/services/auth/mutations";
import { useAuth } from "@/context/Authcontext";
import { useNavigate, useLocation } from "react-router-dom";
import { Loader } from "lucide-react";


export default function GoogleButton() {


    // Mutations Google Auth
    const { mutate: mutateGoogleLogin, isPending: isGoogleLoginPending } = useGoogleAuth()


    // Auth context
    const { login } = useAuth()


    // Navigation
    const Navigate = useNavigate()
    const location = useLocation()



    // Google Login
    const GoogleLogin = useGoogleLogin({

        onSuccess: async (tokenResponse) => {

            try {

                const AccessToken = tokenResponse.access_token


                // Getting User Info Form Google
                const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
                    headers: {
                        Authorization: `Bearer ${AccessToken}`,
                    },
                });


                if (!userInfoResponse.ok) {

                    toast.error("Oops..!", { description: "Something went wrong Please try again.", duration: 5000 })

                    throw new Error('Failed to fetch user info');

                }
                else {

                    const userInfo = await userInfoResponse.json();

                    const formdata = new FormData()

                    formdata.append("username", userInfo.name)
                    formdata.append("email", userInfo.email)


                    // Mutate
                    mutateGoogleLogin(formdata, {

                        onSuccess: (response) => {

                            if (response.status >= 200 && response.status <= 300) {

                                // Get previous route or default to home
                                const from = location.state?.from?.pathname || "/";

                                login(response.data.access)

                                toast.success("Login Success", { description: "You have successfully Logged in", duration: 5000 })

                                Navigate(from, { replace: true })

                            }
                            else {

                                console.log(response)

                                toast.error("Oops..!", { description: "Something went wrong Please try again.", duration: 5000 })

                            }

                        }

                    })

                }

            } catch (err) {

                console.log(err);

            }

        },
        onError(errorResponse) {

            console.log(errorResponse);
            toast.error("Oops..!", { description: "Google Login Failed. Please try again.", duration: 5000 })

        },

    })





    return (



        <section>


            <button
                type="button"
                disabled={isGoogleLoginPending}
                onClick={() => GoogleLogin()}
                className={`w-full border bg-[#F3F9FA] border-[#25758A] flex items-center justify-center py-3 rounded-xl text-sm font-medium  hover:bg-gray-100 transition-all duration-200 ease-in-out ${isGoogleLoginPending ? "opacity-50 cursor-not-allowed"  : "cursor-pointer"}`}
            >
                <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="h-5 w-5 mr-2"
                />
                Sign in with Google {isGoogleLoginPending && <Loader className="animate-spin duration-1000 " size={20} />}
            </button>


        </section>



    )



}
