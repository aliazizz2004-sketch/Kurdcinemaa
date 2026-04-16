import React, { useState, useEffect } from 'react';
import { Search, Bell, User, Play } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-netflix-dark' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="px-12 h-[70px] flex items-center justify-between">
        <div className="flex items-center gap-10">
          <h1 className="text-netflix-red text-[28px] font-[900] tracking-[-1px] uppercase cursor-pointer">KURDSUB</h1>
          <div className="hidden lg:flex items-center gap-5 text-sm font-light text-[#e5e5e5]">
            <a href="#" className="hover:text-white transition-colors font-bold text-white">Home</a>
            <a href="#" className="hover:text-white transition-colors">TV Shows</a>
            <a href="#" className="hover:text-white transition-colors">Movies</a>
            <a href="#" className="hover:text-white transition-colors">New & Popular</a>
            <a href="#" className="hover:text-white transition-colors rtl">ژێرنووسی کوردی</a>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <button className="text-white hover:text-gray-300">
            <Search size={20} />
          </button>
          <div className="hidden sm:block text-white hover:text-gray-300 cursor-pointer">
            <Bell size={20} />
          </div>
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center overflow-hidden">
             <User size={20} className="text-white" />
            </div>
            <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-white transition-transform group-hover:rotate-180"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
