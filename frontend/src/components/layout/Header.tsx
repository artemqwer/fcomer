"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Search, ChevronDown } from "lucide-react";

export default function Header() {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("ENG");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languages = [
    { code: "ENG", label: "ENG" },
    { code: "UA", label: "UA" },
    { code: "FR", label: "FR" },
    { code: "HE", label: "עב" },
  ];

  return (
    <header 
      className="sticky top-0 w-full z-50 bg-white border-b-2 border-[#F5F5F5] transition-all duration-300 shadow-sm"
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-12 lg:px-[160px]">
        <div className="flex justify-between items-center py-4 md:py-5">
          
          {/* Mobile Header Left: Hamburger Menu */}
          <div className="md:hidden flex-1 flex items-center">
            <button className="text-gray-900" aria-label="Menu">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
               </svg>
            </button>
          </div>

          {/* Desktop Left Navigation */}
          <nav className="hidden md:flex space-x-12 items-center flex-1">
            <Link href="/" className="text-xs font-medium tracking-widest text-gray-900 uppercase hover:text-gray-500 transition-colors">
              Home
            </Link>
            
            <div 
              className="relative group"
              onMouseEnter={() => setIsCatalogOpen(true)}
              onMouseLeave={() => setIsCatalogOpen(false)}
            >
              <Link href="/catalog" className="flex items-center text-xs font-medium tracking-widest text-gray-900 uppercase hover:text-gray-500 transition-colors py-8">
                Catalog <ChevronDown className="ml-1 w-3 h-3" />
              </Link>

              {/* Mega Menu Dropdown */}
              {isCatalogOpen && (
                <div className="absolute top-full left-0 w-[600px] bg-white border border-gray-100 shadow-lg p-8 grid grid-cols-4 gap-6 animate-in slide-in-from-top-2">
                  <div className="flex flex-col space-y-3">
                    <Link href="#" className="text-sm text-gray-800 hover:text-gray-500">Усі товари</Link>
                    <Link href="#" className="text-sm text-gray-800 hover:text-gray-500">Бестселери</Link>
                    <Link href="#" className="text-sm text-gray-800 hover:text-gray-500">Кепі</Link>
                  </div>
                  <div className="flex flex-col space-y-3">
                    <Link href="#" className="text-sm text-gray-800 hover:text-gray-500">Капелюхи</Link>
                    <Link href="#" className="text-sm text-gray-800 hover:text-gray-500">Берети</Link>
                    <Link href="#" className="text-sm text-gray-800 hover:text-gray-500">Шапки</Link>
                  </div>
                  <div className="flex flex-col space-y-3">
                    <Link href="#" className="text-sm text-gray-800 hover:text-gray-500">Кепки</Link>
                    <Link href="#" className="text-sm text-gray-800 hover:text-gray-500">Панами</Link>
                    <Link href="#" className="text-sm text-gray-800 hover:text-gray-500">Хустки</Link>
                  </div>
                  <div className="flex flex-col space-y-3">
                    <Link href="#" className="text-sm text-gray-800 hover:text-gray-500">Шарфи</Link>
                    <Link href="#" className="text-sm text-gray-800 hover:text-gray-500">Пов&apos;язки</Link>
                    <Link href="#" className="text-sm text-gray-800 hover:text-gray-500">Комплекти</Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/popular" className="text-xs font-medium tracking-widest text-gray-900 uppercase hover:text-gray-500 transition-colors">
              Popular
            </Link>
          </nav>

          {/* Logo Center */}
          <div className="shrink-0 flex items-center justify-center flex-1 md:flex-none">
            <Link href="/" className="flex items-center justify-center">
                 <Image 
                   src="/logo-image.png" 
                   alt="Ester Wugman Logo" 
                   width={148}
                   height={140}
                   className="w-[80px] md:w-[148px] h-auto object-contain transition-all duration-300"
                   priority
                 />
            </Link>
          </div>

          {/* Mobile Header Right: Cart Icon */}
          <div className="md:hidden flex-1 flex items-center justify-end">
             <button className="text-gray-900 relative">
               <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
               </svg>
            </button>
          </div>

          {/* Desktop Right Navigation */}
          <div className="hidden md:flex space-x-10 items-center justify-end flex-1">
            {/* Language Selector */}
            <div className="relative group cursor-pointer py-8 text-xs font-medium tracking-widest text-gray-900 uppercase hover:text-gray-500 flex items-center transition-colors">
              {activeLang === "HE" ? "עב" : activeLang.slice(0, 2)} <ChevronDown className="ml-1 w-3 h-3" />
              <div className="absolute top-full right-0 w-24 bg-white border border-gray-100 shadow-lg hidden group-hover:flex flex-col py-2 animate-in slide-in-from-top-2">
                 {languages.map((lang) => (
                   <span
                     key={lang.code}
                     onClick={() => setActiveLang(lang.code)}
                     className={`px-4 py-2 hover:bg-gray-50 text-[13px] tracking-widest transition-colors ${
                       activeLang === lang.code 
                         ? "text-[#f04f98] border-l-2 border-[#f04f98] text-center" 
                         : "text-[#546a81] text-center border-l-2 border-transparent"
                     }`}
                   >
                     {lang.label}
                   </span>
                 ))}
              </div>
            </div>

            <button className="text-xs font-medium tracking-widest text-gray-900 uppercase hover:text-gray-500 transition-colors flex items-center">
              Search
            </button>

            <button className="text-xs font-medium tracking-widest text-gray-900 uppercase hover:text-gray-500 transition-colors flex items-center">
              Cart <span className="text-pink-500 ml-1">(0)</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
