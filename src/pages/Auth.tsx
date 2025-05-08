import { useState } from "react";
import { Link } from "react-router-dom";
import GoogleButton from "@/components/auth/GoogleButton";
import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";



export default function Auth() {



  //  Login and Register state
  const [isLogin, setIsLogin] = useState(true);



  return (



    <main className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://img.freepik.com/free-photo/plain-smooth-green-wall-texture_53876-129746.jpg?semt=ais_hybrid&w=740')" }}>



      <div className="flex w-full h-[100vh] sm:h-[95vh] max-w-5xl bg-white shadow-md rounded-lg overflow-hidden">



        {/* Form Side */}
        <div className="w-full md:w-1/2 p-8 pt-5 sm:pt-8">



          {/* Logo */}
          <div className="flex justify-center mb-5">
            <Link to={'/'}>
              <img src="/NAV-LOGO.png" className="w-64" alt="Logo" loading="lazy" />
            </Link>
          </div>




          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'} <span>👋</span>
          </h2>



          {/* Login and Register */}
          {isLogin ? <Login /> : <Register />}



          <div className="flex items-center gap-2 my-4">
            <div className="flex-grow border-t border-gray-300" />
            <span className="text-gray-500 text-sm">Or</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>



          {/* Google Button */}
          <GoogleButton />


          <p className="text-center text-sm text-gray-600 mt-4">
            {isLogin ? (
              <>
                Don’t have an account?{' '}
                <span
                  className="text-teal-700 font-medium cursor-pointer hover:underline"
                  onClick={() => setIsLogin(false)}
                >
                  Sign up
                </span>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <span
                  className="text-teal-700 font-medium cursor-pointer hover:underline"
                  onClick={() => setIsLogin(true)}
                >
                  Sign in
                </span>
              </>
            )}
          </p>



        </div>



        {/* Image Side */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://img.freepik.com/free-photo/medium-shot-couple-posing-together_23-2148755739.jpg?w=360"
            alt="Couple"
            className="w-full h-full object-cover"
          />
        </div>



      </div>


    </main>



  )




}
