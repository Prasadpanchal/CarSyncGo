import React from 'react';
import { User } from 'lucide-react'; // 'Search' removed
import './Navbar.css'; 

const Navbar = () => {
  return (
    <header id='header' className="fixed top-0 left-0 right-0 z-50 w-full bg-zinc-100 py-4 px-4 md:px-8 lg:px-12 shadow-md">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div id='logo' className="text-neutral-700 text-3xl sm:text-4xl lg:text-5xl font-normal font-['Jomhuria'] flex-shrink-0">
          CarSyncGo
        </div>

        {/* Navigation Links / Buttons */}
        <nav className="flex items-center space-x-4 sm:space-x-8">
          <div className="hidden sm:block bg-white rounded-2xl px-4 py-2">
            <span className="text-black text-sm sm:text-base font-bold">Home</span>
          </div>
          <button className="hidden sm:block text-black text-sm sm:text-base font-bold px-4 py-2 rounded-2xl">
            Publish a ride
          </button>
          {/* User Icon */}
          <User className="w-6 h-6 text-black" />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
