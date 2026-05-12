import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 mt-10 px-5 sm:px-6 md:px-10 lg:px-16 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
      
        <div className="mb-10 md:mb-12 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Wanderlust
          </h1>

          <p className="mt-4 max-w-xl mx-auto md:mx-0 text-sm sm:text-base">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
          <div>
            <h3 className="text-white mb-3 tracking-wide text-sm">
              NEWSLETTER
            </h3>

            <p className="mb-4 text-sm leading-relaxed">
              Subscribe for exclusive travel deals and inspiration.
            </p>

            <div className="flex items-center bg-gray-800 px-4 py-3 rounded-md">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent outline-none flex-1 text-sm w-full"
              />

              <span className="text-white text-lg cursor-pointer">↗</span>
            </div>
          </div>

          <div>
            <h3 className="text-white mb-3 tracking-wide text-sm">
              QUICK LINKS
            </h3>

            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer transition">
                Home
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Destinations
              </li>

              <li className="hover:text-white cursor-pointer transition">
                My Bookings
              </li>

              <li className="hover:text-white cursor-pointer transition">
                My Profile
              </li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-white mb-3 tracking-wide text-sm">SUPPORT</h3>

            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer transition">
                Help Center
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Terms of Service
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Privacy Policy
              </li>
            </ul>
          </div>

     
          <div>
            <h3 className="text-white mb-3 tracking-wide text-sm">
              CONTACT US
            </h3>

            <ul className="space-y-2 text-sm">
              <li>786 901 1622</li>
              <li className="break-all">info@wandarland.com</li>
            </ul>
          </div>
        </div>

     
        <div className="border-t border-gray-800 mt-10 md:mt-12 pt-6 flex flex-col gap-4 md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm">© 2026 Wanderlust. All rights reserved.</p>

          <div className="flex gap-5 text-white text-lg">
            <span className="cursor-pointer hover:opacity-70 transition">
              X
            </span>

            <span className="cursor-pointer hover:opacity-70 transition">
              in
            </span>

            <span className="cursor-pointer hover:opacity-70 transition">
              ◎
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
