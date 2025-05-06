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
    { label: "AI Consultant", href: "/ai-consultant" },
    { label: "Talk to Doctor", href: "/talktodoctor" },
    { label: "About Us", href: "/aboutus" },
  ];



  return (

    <header className="w-full bg-[#EAF5F6] px-2 sm:px-4 py-2">


      <nav className="mx-auto h-20 flex flex-wrap md:flex-nowrap items-center justify-between bg-[#25434E] rounded-[14px] px-6 sm:px-10 py-4 sm:py-5 relative z-50">


        {/* Logo and Mobile Toggle */}
        <div className="flex items-center justify-between w-full md:w-auto">


          <Link to="/" aria-label="Home" className="flex items-center">
            <img src="/Foot-Logo.png" className="sm:w-52 w-40" alt="Logo" loading="lazy" />
          </Link>


          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <Menu size={28} />
          </button>

        </div>



        {/* Menu Container */}
        <div
          className={`${isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            } md:max-h-full md:opacity-100 md:flex flex-col md:flex-row w-full md:w-auto gap-6 md:gap-10 transition-all duration-500 ease-in-out overflow-hidden md:overflow-visible bg-[#25434E] md:bg-transparent rounded-xl md:rounded-none mt-4 md:mt-0 text-center md:text-left`}
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
          <div className="block md:hidden px-4 pb-2">
            <Button className="w-full mt-2 text-black font-semibold text-lg bg-[#A7E8E0] hover:bg-[#8CD8D0] px-4 py-3 rounded-[12px] transition-transform hover:scale-105">
              BOOK CONSULTATION
            </Button>
          </div>


        </div>


        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link to={'/consultation'}>
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
