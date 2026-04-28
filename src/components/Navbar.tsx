"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    
    if (isMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setIsMenuOpen(false);
    }
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 h-16 bg-white border-b border-gray-100 text-[#111827]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="text-xl font-semibold tracking-tight hover:text-gray-600 transition-colors active:scale-95">
          SmartCalc
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-gray-500 transition-colors active:scale-95">
            Home
          </Link>
          <Link href="/health" className="text-sm font-medium hover:text-gray-500 transition-colors active:scale-95">
            Health
          </Link>
          <Link href="/money" className="text-sm font-medium hover:text-gray-500 transition-colors active:scale-95">
            Money
          </Link>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-2 md:gap-4">
          <form onSubmit={handleSearch} className={`relative flex items-center transition-all duration-300 ${isSearchOpen ? 'w-48 md:w-64 opacity-100' : 'w-0 opacity-0 overflow-hidden md:w-64 md:opacity-100'}`}>
            <input 
              type="text" 
              placeholder="Search calculators..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 md:py-1.5 text-sm bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
            <svg className="w-4 h-4 text-gray-400 absolute left-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </form>

          <button 
            aria-label="Toggle Search" 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="md:hidden p-2 hover:bg-gray-50 rounded-full transition-colors text-gray-600 hover:text-gray-900 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
          
          {/* Auth Links (Desktop) */}
          <div className="hidden md:flex items-center gap-4 ml-2 pl-4 border-l border-gray-200">
            <Link href="/login" className="text-sm font-medium hover:text-gray-500 transition-colors active:scale-95">
              Login
            </Link>
            <Link href="/signup" className="text-sm font-medium bg-indigo-600 text-white px-4 py-1.5 rounded-full hover:bg-indigo-700 transition-colors active:scale-95">
              Signup
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            aria-label="Toggle Menu" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-50 rounded-full transition-colors text-gray-600 hover:text-gray-900 active:scale-95"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-white shadow-lg md:hidden overflow-y-auto">
          <div className="flex flex-col px-6 py-6 gap-6">
            <Link href="/" onClick={closeMenu} className="text-lg font-medium text-gray-900 hover:text-indigo-600 transition-colors active:scale-95 border-b border-gray-100 pb-3">
              Home
            </Link>
            <Link href="/health" onClick={closeMenu} className="text-lg font-medium text-gray-900 hover:text-indigo-600 transition-colors active:scale-95 border-b border-gray-100 pb-3">
              Health
            </Link>
            <Link href="/money" onClick={closeMenu} className="text-lg font-medium text-gray-900 hover:text-indigo-600 transition-colors active:scale-95 border-b border-gray-100 pb-3">
              Money
            </Link>
            <Link href="/about" onClick={closeMenu} className="text-lg font-medium text-gray-900 hover:text-indigo-600 transition-colors active:scale-95 border-b border-gray-100 pb-3">
              About
            </Link>
            <div className="flex flex-col gap-4 mt-4">
              <Link href="/login" onClick={closeMenu} className="flex justify-center items-center w-full min-h-[44px] text-base font-medium text-gray-700 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors active:scale-95">
                Login
              </Link>
              <Link href="/signup" onClick={closeMenu} className="flex justify-center items-center w-full min-h-[44px] text-base font-medium text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-colors active:scale-95">
                Signup
              </Link>
            </div>
          </div>
          
          {/* Invisible overlay area to close when clicking outside the links */}
          <div className="flex-grow h-full w-full" onClick={closeMenu}></div>
        </div>
      )}
    </nav>
  );
}
