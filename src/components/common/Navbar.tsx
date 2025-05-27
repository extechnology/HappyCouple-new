import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {


  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const location = useLocation(); // Get the current route


  // Menu Items
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "AI Consultant", href: "/aiconsult" },
    { label: "Explore Treatments", href: "/treatmentplans" },
    { label: "About Us", href: "/aboutus" },
  ];



  return (

    <header className="w-full bg-transparent px-2 sm:px-4 py-2">


      <nav className="mx-auto h-20 flex flex-wrap lg:flex-nowrap items-center justify-between bg-[#25434E] rounded-[14px] px-6 sm:px-10 py-4 sm:py-3 lg:py-5 relative z-50">


        {/* Logo and Mobile Toggle */}
        <div className="flex items-center justify-between w-full lg:w-auto">


          <Link to="/" aria-label="Home" className="flex items-center">
            <img src="/Foot-Logo.png" className="sm:w-52 w-40" alt="Logo" loading="lazy" />
          </Link>


          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <Menu size={28} />
          </button>

        </div>



        {/* Menu Container */}
        <div
          className={`${isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            } lg:max-h-full lg:opacity-100 lg:flex flex-col lg:flex-row w-full lg:w-auto gap-6 lg:gap-10 transition-all duration-500 ease-in-out overflow-hidden lg:overflow-visible bg-[#25434E] lg:bg-transparent rounded-xl lg:rounded-none mt-4 lg:mt-0 text-center lg:text-left`}
        >


          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`block px-1 py-2 text-[16px] sm:text-[17px] tracking-wide hover:text-[#A7E8E0] transition duration-200 hover:scale-105 
                ${location.pathname === item.href ? "text-[#A7E8E0]" : "text-[#EAF5F6]"}`}
              onClick={() => setIsMenuOpen(false)} // close on link click
            >
              {item.label}
            </Link>
          ))}


          {/* Mobile CTA Button Inside Dropdown */}
          <div className="block lg:hidden px-4 pb-2">
            <Link to={'/talktodoctor'}  onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full mt-2 text-black hover:cursor-pointer font-semibold text-lg bg-[#A7E8E0] hover:bg-[#8CD8D0] px-4 py-3 rounded-[12px] transition-transform hover:scale-105">
                BOOK CONSULTATION
              </Button>
            </Link>
          </div>


        </div>


        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <Link to={'/talktodoctor'}>
            <Button className="bg-[#A7E8E0] hover:bg-[#8CD8D0] hover:cursor-pointer text-black font-semibold text-[14px] sm:text-[16px] px-5 py-6 rounded-[12px] transition-transform hover:scale-105">
              BOOK CONSULTATION
            </Button>
          </Link>
        </div>


      </nav>
    </header>
  );
};

export default Navbar;
