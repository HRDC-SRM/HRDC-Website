"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { cn } from "@/public/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardLength = content.length;

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const scrollPosition = container.scrollTop + (container.clientHeight / 3);
    const sectionHeight = container.scrollHeight / cardLength;
    const currentSection = Math.floor(scrollPosition / sectionHeight);
    
    if (currentSection !== activeCard && currentSection < cardLength) {
      setActiveCard(currentSection);
    }
  }, [activeCard, cardLength]);

  const [backgroundGradient, setBackgroundGradient] = useState(
    "linear-gradient(to bottom right, rgb(6 182 212), rgb(16 185 129))"
  );

  const gradients = [
    "linear-gradient(to bottom right, rgb(6 182 212), rgb(16 185 129))",
    "linear-gradient(to bottom right, rgb(236 72 153), rgb(99 102 241))",
    "linear-gradient(to bottom right, rgb(249 115 22), rgb(234 179 8))"
  ];
  
  // Update gradient immediately when active card changes
  const currentGradient = gradients[activeCard % gradients.length];
  if (backgroundGradient !== currentGradient) {
    setBackgroundGradient(currentGradient);
  }

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 1023px)");
    setIsMobile(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Mobile layout
  if (isMobile) {
    return (
      <div className="p-4 md:p-8">
        {content.map((item, index) => (
          <div key={item.title + index} className="my-12">
            <h2 className="text-3xl font-bold text-white font-product-bungee mb-4">
              {item.title}
            </h2>
            <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg mb-4">
              {React.isValidElement(item.content) ? (
                React.cloneElement(item.content as React.ReactElement, {
                  className: "w-full h-full object-cover",
                })
              ) : (
                item.content
              )}
            </div>
            <p className="text-lg text-product-text-light font-product-manrope">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    );
  }

  // Desktop layout
  return (
    <div className="relative w-full h-screen flex overflow-hidden">
      {/* Left column for scrollable text content */}
      <div 
        ref={containerRef}
        className="flex-1 min-w-0 lg:w-1/2 overflow-y-auto snap-y snap-mandatory scrollbar-hide"
        onScroll={handleScroll}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <div>
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="h-screen flex flex-col justify-center px-6 md:px-8 lg:px-10 snap-start"
            >
              <h2 
                className={`text-4xl md:text-5xl font-bold mb-6 transition-opacity duration-200 ${
                  activeCard === index ? 'text-white opacity-100' : 'text-gray-500 opacity-30'
                }`}
              >
                {item.title}
              </h2>
              <p 
                className={`text-xl md:text-2xl max-w-2xl leading-relaxed transition-opacity duration-200 ${
                  activeCard === index ? 'text-gray-300 opacity-100' : 'text-gray-500 opacity-30'
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right column for sticky image */}
      <div className="hidden lg:flex lg:w-1/2 sticky top-0 h-screen items-center justify-center p-10">
        <div
          className={cn(
            "w-full max-w-[36rem] h-[28rem] rounded-2xl bg-white overflow-hidden shadow-2xl border-2 border-green-400/20",
            contentClassName
          )}
          style={{ background: backgroundGradient }}
        >
          <div className="relative w-full h-full">
            {content.map((item, index) => (
              <div 
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-0 ${
                  activeCard === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                {item.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};