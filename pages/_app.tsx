// Basic Imports
import React, { useState, useEffect } from "react";
import type { AppProps } from "next/app";

// Components Imports
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingAnimation from "@/components/LoadingAnimation";

// Styles Imports
import "@/styles/globals.css";

const App: React.FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    // Hide loading animation after initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Add a small delay before showing content for smooth transition
      setTimeout(() => {
        setIsContentVisible(true);
      }, 100);
    }, 17000); // 18 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.Fragment>
      {isLoading && (
        <LoadingAnimation
          videoSrc="/loading.mp4"
          onLoadingComplete={() => setIsLoading(false)}
          loadingDuration={17000}
        />
      )}
      
      {/* Main Website Content with smooth fade-in */}
      <div 
        className={`transition-all duration-1000 ease-in-out ${
          isContentVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-4'
        }`}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
