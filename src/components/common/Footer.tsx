import { Link } from "react-router-dom";


export default function Footer() {


  return (


    <footer className="bg-[#25434E] text-white text-sm py-10">


      <div className="mx-auto px-4 md:px-14">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">


          {/* Column 1 - Company Info */}
          <div className="space-y-2">


            <div className="flex items-start">
              <img src="/Foot-Logo.png" alt="foot-logo" className="w-auto h-20" loading="lazy" />
            </div>


            <p>MEDICARE PHARMA</p>
            <p>An initiative of</p>
            <p>Medresearch India Pvt. Ltd.</p>
            <p>
              RKP.3/569C, Parammal Road, Ramanatukara, Kozhikode - 673 634
            </p>
            <a href="mailto:info@happycouplesolution.com" className="block hover:underline">
              info@happycouplesolution.com
            </a>
            <a href="tel:+919020200100" className="block hover:underline">
              +91 9020200100
            </a>
            <a href="tel:+919072399100" className="block hover:underline">
              +91 9072399100, +91 9072377100
            </a>

          </div>


          {/* Column 2 - Center Links */}
          <div className="grid grid-cols-2 gap-6">

            <div className="space-y-2">
              <Link to={"/"} className="block hover:underline">Home</Link>
              <Link to={'/'} className="block hover:underline">AI Consultant</Link>
              <Link to={'/treatmentplans'} className="block hover:underline">Explore Treatments</Link>
              <Link to={"/talktodoctor"} className="block hover:underline">Talk To Doctor</Link>
            </div>

            <div className="space-y-2">
              <Link to={"/talktodoctor"} className="block hover:underline">Book Consultation</Link>
              <Link to={"/talktoexpert"} className="block hover:underline">Talk To Expert</Link>
              <Link to={"/auth"} className="block hover:underline">Login/Signup</Link>
              <Link to={"/"} className="block hover:underline">My Orders</Link>
            </div>

          </div>



          {/* Column 3 - Contact Links */}
          <div className="space-y-2">
            <Link to={"/aboutus"} className="block hover:underline">About Us</Link>
            <Link to={"/contactus"} className="block hover:underline">Contact Us</Link>
            <Link to={"/"} className="block hover:underline">Location</Link>
            <Link to={"/"} className="block hover:underline">Support</Link>
          </div>


        </div>



        {/* Bottom Section */}
        <div className="mt-10 pt-6 border-t border-gray-500 flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
          
          <p className="text-center md:text-left">
            © 2025 Happy Couple Solutions. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">Refund Policy</a>
            <a href="#" className="hover:underline">Shipping Policy</a>
          </div>

          <div className="flex justify-center md:justify-end space-x-8">
            <a href="#" className="hover:text-gray-300"><i className="fab fa-facebook-f fa-lg"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fa-brands fa-x-twitter fa-lg"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-instagram fa-lg"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-linkedin-in fa-lg"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-youtube fa-lg"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fa-brands fa-pinterest fa-lg"></i></a>
          </div>
          
        </div>


      </div>

    </footer>

  );
}
