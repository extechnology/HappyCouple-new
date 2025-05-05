import { LogIn, UserPlus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Auth() {


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



          <form className="space-y-5">


            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Example@email.com"
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#25758A]"
              />
            </div>


            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="At least 8 characters"
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#25758A]"
              />
            </div>


            {!isLogin && (
              <div>
                <label className="block text-gray-700 mb-1">Re-enter Password</label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#25758A]"
                />
              </div>
            )}



            {isLogin && (
              <div className="text-right text-sm text-blue-600 hover:underline cursor-pointer">
                Forgot Password?
              </div>
            )}



            <button
              type="submit"
              className="w-full bg-[#145566] text-white py-2 rounded-md text-lg font-medium 
             flex items-center justify-center gap-2 
             transition-all duration-300 transform hover:scale-105 hover:bg-[#0f444f] cursor-pointer"
            >
              {isLogin ? <LogIn size={20} /> : <UserPlus size={20} />}
              {isLogin ? 'Sign in' : 'Sign up'}
            </button>



            <div className="flex items-center gap-2 my-4">
              <div className="flex-grow border-t border-gray-300" />
              <span className="text-gray-500 text-sm">Or</span>
              <div className="flex-grow border-t border-gray-300" />
            </div>



            {/* Google Button */}
            <button
              type="button"
              className="w-full border bg-[#F3F9FA] border-[#25758A] flex items-center justify-center py-3 rounded-xl text-sm font-medium 
             hover:bg-gray-100 transition-all duration-200 ease-in-out cursor-pointer"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-5 w-5 mr-2"
              />
              Sign in with Google
            </button>




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


          </form>


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
