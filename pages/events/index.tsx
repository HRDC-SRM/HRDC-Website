// Basic Imports
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";

// Components Imports
import OrganizeWithUs from "@/components/OrganizeWithUs";
import Button from "@/components/ui-patterns/Button";
import UpcomingSessions from "@/components/UpcomingSessions";
import MetaHead from "@/components/MetaHead";
import DarkVeil from "@/components/ui-patterns/Darkveil"; // ✅ Background import

const Events: NextPage = () => {
  // Disable scrolling when component mounts
  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, []);

  return (
    <React.Fragment>
      <div className="dark-veil-wrapper">
        <DarkVeil
          hueShift={131}
          noiseIntensity={0.00}
          scanlineIntensity={0.0}
          speed={0.6}
          scanlineFrequency={60}
          warpAmount={0.0}
          resolutionScale={1}
        />
      </div>
      
      <MetaHead title={`${new Date().getFullYear()} Season`} description="Hackathons, Sessions & Events" />
      
      {/* Cross Button - Top Right Corner */}
      <Link href="/" className="fixed top-6 right-6 z-[60]">
        <button className="w-12 h-12 bg-gray-800/80 hover:bg-gray-700/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 border border-gray-600/50">
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
      </Link>

      {/* Coming Soon Overlay */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
        <div className="text-center">
          <h1 className="font-product-bungee text-6xl md:text-8xl text-white mb-4 animate-pulse">
            Coming Soon
          </h1>
          <p className="font-product-manrope text-xl md:text-2xl text-product-text-light animate-bounce">
            🚀 We&apos;re working on something amazing!
          </p>
           <Link href="/" className="z-50">

    {/* <Button shade="#1BA94C" hoverShade="#1BA94C" className="shadow-lg hover:scale-105 transition-transform duration-200 mt-12 px-6 py- 8 mt-8">
      ← Back to Home
    </Button> */}
  </Link>
        </div>
      </div>

      {/* Blurred Content - Constrained to viewport height */}
      <div className="events pointer-events-none relative z-10 h-screen overflow-hidden" style={{ filter: 'blur(80px)' }}>
        <div className="checks-container h-full">
          <div className="wrapped-view flex flex-row items-center justify-evenly max-sm:flex-col h-full">
            <div className="hero-section-wrapper w-fit h-auto flex flex-col items-start justify-between mb-16 max-sm:items-center">
              <h1 className="font-product-bungee text-5xl mt-6 flex flex-col items-start justify-between gap-4 max-sm:items-center max-sm:text-4xl max-sm:gap-1 max-sm:mt-10 " >
                <span>{"Events in season"}</span>
                <span>
                  {new Date().getFullYear() +
                    "-" +
                    Number(new Date().getFullYear() + 1)}
                </span>
              </h1>
              <Link href="/events/past-events" className="mt-12">
                <Button shade="#1BA94C">{"See Past Events"}</Button>
              </Link>
            </div>
            <div className="illustration-wrapper">
              <Image
                className="w-[300px]"
                src="/skills-illustration_updated.svg"
                width="366"
                height="380"
                alt="skills-illustration"
              />
            </div>
          </div>
        </div>
        <div className="upcoming-hackathons-section-wrapper">
          <UpcomingSessions />
          <OrganizeWithUs />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Events;
