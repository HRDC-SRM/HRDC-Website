import React, { useState, useEffect, useRef } from 'react';

interface LoadingAnimationProps {
  videoSrc?: string;
  onLoadingComplete?: () => void;
  loadingDuration?: number;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({
  videoSrc = '/loading.mp4',
  onLoadingComplete,
  loadingDuration = 20000
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Start fade out animation slightly before the timer ends
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, loadingDuration - 1000); // Start fade 1 second before end

    // Complete the loading after fade animation
    const completeTimer = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete?.();
    }, loadingDuration);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
    };
  }, [loadingDuration, onLoadingComplete]);

  if (!isLoading) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 z-50 bg-black transition-all duration-1000 ease-in-out ${
        isFadingOut ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        style={{ width: '100vw', height: '100vh' }}
      >
        <source src={videoSrc} type="video/mp4" />
        Video not supported
      </video>

      {/* Text Overlay with fade effect */}
      {/* <div 
        className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
          isFadingOut ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'
        }`}
      >
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4 font-product-bungee">HRDC SRMIST</h1>
          <p className="text-xl">Where developers level up and stand out</p>
        </div>
      </div> */}

      {/* Optional: Add a subtle background blur effect during fade */}
      {isFadingOut && (
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-1000" />
      )}
    </div>
  );
};

export default LoadingAnimation;
