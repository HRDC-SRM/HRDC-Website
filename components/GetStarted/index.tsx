// Basic Imports
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

// Component Imports
import GetStartedData from "./get-started-data.json";

// Types Imports
import { GetStartedItemType } from "@/types/get-started-item-type";

const GetStarted: React.FunctionComponent<GetStartedItemType> = () => {
  const getStartedRef = useRef<Array<GetStartedItemType>>(GetStartedData);

  // Auto-scroll functionality
  useEffect(() => {
    const carousel = document.querySelector('.get-started-items-carousel-wrapper');
    if (!carousel) return;

    const scrollStep = 1;
    const scrollInterval = setInterval(() => {
      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
        // Reset to beginning when reaching the end
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += scrollStep;
      }
    }, 50); // Adjust speed here (lower = faster)

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <React.Fragment>
      <section className="get-started-section bg-black bg-opacity-40 relative py-24 my-12 max-sm:mt-0 max-sm:mb-2 max-sm:px-2.5 max-sm:pr-5 overflow-hidden">
        {/* Background gradient */}
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32  rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-product-blue rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-product-purple-light rounded-full opacity-10 blur-2xl animate-pulse delay-500"></div>
        
        <div className="get-started-content-wrapper relative z-10 wrapped-view max-sm:ml-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-product-[#05c770] to-product-blue/20 rounded-full border border-product- mb-6">
              <span className="text-[#05c770] text-sm font-semibold tracking-wider uppercase">
                {"Who are we?"}
              </span>
            </div>
            
            <h1 className="get-started-headline font-product-bungee text-6xl flex flex-col items-center justify-center w-fit mx-auto max-sm:text-4xl">
              <span className="text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {"Preparing Tomorrow's Tech Leaders,"}
              </span>
              <span className="bg-gradient-to-r from-[#05C770] to-[#05C771] bg-clip-text text-transparent">
  Today.
</span>

            </h1>
            
            <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              Join our vibrant community of developers, designers, and tech enthusiasts. 
              {/* Learn, grow, and build the future together. */}
            </p>
          </div>

          {/* Cards Grid */}
          <div 
            className="get-started-items-carousel-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-sm:gap-6 scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            {getStartedRef.current?.map(
              (getStartedItem: GetStartedItemType, getStartedIndex: number) => (
                <GetStartedItem
                  key={getStartedIndex}
                  title={getStartedItem?.title}
                  bgColor={getStartedItem?.bgColor}
                  description={getStartedItem?.description}
                  hasNewTab={getStartedItem?.hasNewTab}
                  path={getStartedItem?.path}
                />
              )
            )}
          </div>
          
          {/* Call to Action
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors cursor-pointer group">
              <span className="text-sm font-medium">Ready to get started?</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div> */}
        </div>
      </section>
    </React.Fragment>
  );
};

function GetStartedItem(
  {
    title,
    bgColor = "bg-white",
    description,
    path,
    hasNewTab,
  }: GetStartedItemType,
  props: any
) {
  const [backgroundColor, setBackgroundColor] = useState<string>(bgColor);
  const [cardTextColor, setCardTextColor] = useState<string>("text-black");
  const [isHovered, setIsHovered] = useState(false);

  // AI-generated image URLs based on card title
  const getAIImage = (titleText: string | undefined) => {
    if (!titleText) return "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center";
    
    const imageMap: { [key: string]: string } = {
      "Community Events": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop&crop=center",
      "Industry-Driven Workshops": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center",
      "Compete. Collaborate. Conquer": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center",
      "Open Source": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center"
    };
    
    return imageMap[titleText] || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center";
  };

  useEffect(() => {
    switch (bgColor) {
      case "bg-product-red":
        setBackgroundColor("bg-product-red");
        break;
      case "bg-product-purple-light":
        setBackgroundColor("bg-product-purple-light");
        break;
      case "bg-product-purple-dark":
        setBackgroundColor("bg-product-purple-dark");
        break;
      case "bg-product-yellow":
        setBackgroundColor("bg-product-yellow");
        break;
      case "bg-product-pink":
        setBackgroundColor("bg-product-pink");
        break;
      case "bg-white":
        setBackgroundColor("bg-product-dark-light");
        break;
      case "bg-product-blue":
        setBackgroundColor("bg-product-blue");
        break;
      case "bg-product-brown":
        setBackgroundColor("bg-product-brown");
        break;
    }
  }, [bgColor]);

  useEffect(() => {
    if (
      [
        "bg-product-red",
        "bg-product-purple-light",
        "bg-product-purple-dark",
        "bg-product-brown",
        "bg-product-pink",
        "bg-product-dark-light",
      ].includes(backgroundColor)
    ) {
      setCardTextColor("text-white");
    }
  }, [backgroundColor]);

  return (
    <React.Fragment>
      <div className="get-started-item group" {...props}>
        <Link href={path} target={hasNewTab ? "_blank" : "_self"}>
          <div
            className={`get-started-item__card-wrapper relative overflow-hidden rounded-2xl border border-gray-800/50 
                    bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm
                    hover:border-gray-600/50 hover:shadow-2xl hover:shadow-product-red/20
                    transform hover:-translate-y-2 transition-all duration-500 cursor-pointer select-none
                    h-80 max-sm:h-72`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* AI-generated background image */}
            <div 
              className={`absolute inset-0 w-full h-full transition-all duration-500 ${
                isHovered ? 'opacity-30 scale-110' : 'opacity-20 scale-100'
              }`}
              style={{
                backgroundImage: `url(${getAIImage(title?.text)})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-6">
              {/* Top section with emoji */}
              <div className="flex items-center justify-between">
                <div className={`w-12 h-12 rounded-xl ${backgroundColor} flex items-center justify-center text-2xl shadow-lg`}>
                  {title?.emoji}
                </div>
                <div className={`w-8 h-8 rounded-full ${backgroundColor} opacity-20 group-hover:opacity-40 transition-opacity`}></div>
              </div>
              
              {/* Bottom section with title and description */}
              <div className="space-y-3">
                <h3 className="text-white font-bold text-xl leading-tight group-hover:text-product-red transition-colors">
                  {title?.text}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {description?.[0]}
                </p>
                
                {/* Action indicator */}
                {/* <div className="flex items-center space-x-2 pt-2">
                  <span className="text-product-[#05C770] text-xs font-semibold uppercase tracking-wider">
                    Get Started
                  </span>
                  <svg className="w-4 h-4 text-product-red transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div> */}
              </div>
            </div>
            
            {/* Hover effect border */}
            <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-product-red/50 to-product-blue/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default GetStarted;
