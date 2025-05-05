import { BlurFade } from "@/components/magicui/blur-fade"
import { Send } from "lucide-react"





export default function Consultation() {


  return (


    <main className="bg-white w-full min-h-screen">


      <BlurFade delay={0.25} blur="12px" inView>



        <section className="max-w-7xl mx-auto px-4 py-5 sm:py-12 text-center">


          {/* Heading */}
          <h2 className="text-3xl font-semibold sm:font-light sm:text-6xl mb-6">Book Appointment</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-12">
            Schedule your next appointment effortlessly. We will contact you to confirm your request or change the time or day if unavailable.
          </p>



          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">


            {/* Call */}
            <div className="flex flex-col items-center text-center">

              <img src="/svgs/Call-icon.svg" loading="lazy" alt="Call-icon" className="w-10 mb-4" />

              <h4 className="font-semibold">Give us a call</h4>

              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet sit dignissim pellentesque</p>

              <a href="tel:+1234567890" className="text-[#145566] mt-2">(12) 345-67890</a>

            </div>



            {/* Email */}
            <div className="flex flex-col items-center text-center">

              <img src="/svgs/Email-icon.svg" alt="Email icon" className="w-10 mb-4" />

              <h4 className="font-semibold">Send us an email</h4>

              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet sit dignissim pellentesque</p>

              <a href="mailto:contact@example.com" className="text-[#145566] mt-2">contact@example.com</a>

            </div>



            {/* Clinic Visit */}
            <div className="flex flex-col items-center text-center">

              <img src="/svgs/Clinic-icon.svg" alt="Clinic icon" className="w-10 mb-4" />

              <h4 className="font-semibold">Visit to clinic</h4>

              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet sit dignissim pellentesque</p>

              <a href="#" className="text-[#145566] mt-2">Cooks mill road halifax</a>

            </div>


          </div>


          <hr className="mb-12" />



          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-7xl mx-auto">


            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
            </div>


            <div>
              <label className="block mb-1 text-sm font-medium">Phone Number</label>
              <input
                type="text"
                placeholder="(123) 456 7890"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
            </div>


            <div>
              <label className="block mb-1 text-sm font-medium">Email Address</label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
            </div>


            <div>
              <label className="block mb-1 text-sm font-medium">Service</label>
              <input
                type="text"
                placeholder="Ex. Dental Implants"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
            </div>


            <div className="md:col-span-2">
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                placeholder="Please describe what service you are interested in"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                rows={4}
              ></textarea>
            </div>


            <div className="md:col-span-2 text-center flex justify-center items-center">
              <button
                type="submit"
                className="bg-[#145566] hover:cursor-pointer flex items-center justify-center text-white px-8 py-3 rounded-md transition-all duration-300 ease-in-out hover:bg-[#0f3f4c] hover:shadow-lg hover:scale-105"
              >
                <Send className="mr-2" size={20} />
                Submit
              </button>

            </div>


          </form>


        </section>

      </BlurFade>

    </main>


  )


}
