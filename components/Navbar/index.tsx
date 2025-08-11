// Basic Imports
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useRouter } from "next/router";

// Components Imports
import Button from "@/components/ui-patterns/Button";
import NavbarOptionsData from "./navbar-options.json";

// Types Imports
import { NavbarOptionType } from "@/types/navbar-option-type";

const Navbar: React.FunctionComponent<NavbarOptionType> = () => {
  const navbarOptionsRef = useRef<Array<NavbarOptionType>>(NavbarOptionsData);
  const router = useRouter();
  const isAboutUsPage = router.pathname === "/aboutUs";
  const isDomainsPage = router.pathname === "/domains";
  
  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when navigating
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="navbar wrapped-view py-8 flex flex-row items-center justify-between max-sm:pt-8 pb-2">
        <div className="flex flex-row items-center justify-start gap-8">
          <span className="navbar-logo-wrapper flex flex-row items-center justify-center w-fit h-fit gap-2 max-sm:pl-2">
            <Link href="/">
              <Image
                src="/hackerrank-logo.svg"
                alt="hrdc"
                width="50"
                height="50"
                priority
              />
            </Link>
          </span>
          <span className="navbar-options-wrapper flex flex-row items-center justify-start gap-4 max-sm:hidden">
            {navbarOptionsRef.current?.map(
              (navbarOption: NavbarOptionType, navbarOptionIndex: number) => (
                <Link href={navbarOption?.path} key={navbarOptionIndex}>
                  <span className="navbar-option-text font-bold text-gray-300">
                    {navbarOption?.label}
                  </span>
                </Link>
              )
            )}
          </span>
        </div>
        <div className="flex flex-row items-center justify-end gap-8 max-sm:mx-4">
          <Link
            href={isAboutUsPage ? "/" : "/aboutUs"}
            className="max-sm:hidden"
          >
            <span className="avengers-text-wrapper text-product-gradient brightness-110 hover:brightness-105">
              {isAboutUsPage ? (
                <span className="font-product-bungee font-bold">{"HOME"}</span>
              ) : (
                <>
                  <span className="font-product-manrope font-semibold">{"meet"}</span>
                  <span className="font-product-bungee">{" the team"}</span>
                </>
              )}
            </span>
          </Link>
          {isDomainsPage ? (
            <Link href="/" className="max-sm:hidden">
              <Button type="secondary" shade="#1BA94C">{"HOME"}</Button>
            </Link>
          ) : (
            <Link href="/events" className="max-sm:hidden">
              <Button type="secondary" shade="#1BA94C">{"Events"}</Button>
            </Link>
          )}
          
          {/* Hamburger Menu Button - Mobile Only */}
          <button
            onClick={toggleMobileMenu}
            className="hidden max-sm:flex flex-col justify-center items-center w-8 h-8 cursor-pointer z-50"
            aria-label="Toggle mobile menu"
          >
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 max-sm:block hidden">
          {/* Transparent Background */}
          <div 
            className="absolute inset-0 bg-black/20"
            onClick={closeMobileMenu}
          ></div>
          
          {/* Mobile Menu Content */}
          <div className="absolute top-0 right-0 w-64 h-full bg-white/10 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col p-6 space-y-6">
              {/* Navigation Links */}
              <div className="flex flex-col space-y-4">
                {/* Meet the Team Link */}
                <Link 
                  href={isAboutUsPage ? "/" : "/aboutUs"}
                  onClick={closeMobileMenu}
                  className="text-white hover:text-gray-300 transition-colors py-2"
                >
                  <span className="text-product-gradient brightness-110 hover:brightness-105">
                    {isAboutUsPage ? (
                      <span className="font-product-bungee font-bold text-lg">{"HOME"}</span>
                    ) : (
                      <>
                        <span className="font-product-manrope font-semibold">{"meet"}</span>
                        <span className="font-product-bungee">{" the team"}</span>
                      </>
                    )}
                  </span>
                </Link>
                
                {/* Events Link */}
                {isDomainsPage ? (
                  <Link 
                    href="/"
                    onClick={closeMobileMenu}
                    className="text-white hover:text-gray-300 transition-colors py-2"
                  >
                    <span className="font-product-bungee font-bold text-lg">{"HOME"}</span>
                  </Link>
                ) : (
                  <Link 
                    href="/events"
                    onClick={closeMobileMenu}
                    className="text-white hover:text-gray-300 transition-colors py-2"
                  >
                    <span className="font-product-bungee font-bold text-lg">{"Events"}</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
