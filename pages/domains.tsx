import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '@/components/ui-patterns/Button';
import DarkVeil from '@/components/ui-patterns/Darkveil';
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Domain data for the sticky scroll
const DOMAIN_CONTENT = [
  {
    title: "TECHNICAL",
    description:
      "Core development and technical implementation team. Lead community projects, create workshops, mentor developers, contribute to open source, and drive technical innovation. Build the future of technology with cutting-edge solutions.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&crop=center"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Technical domain"
        />
      </div>
    ),
  },
  {
    title: "CORPORATE",
    description:
      "Business development and external relations powerhouse. Manage partnerships, organize corporate events, handle sponsorships, coordinate with industry professionals, and develop business strategies that drive growth.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Corporate domain"
        />
      </div>
    ),
  },
  {
    title: "CREATIVE",
    description:
      "Design, content creation, and creative direction team. Design community branding, create social media content, develop marketing campaigns, design event materials, and maintain visual consistency across all platforms.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&crop=center"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Creative domain"
        />
      </div>
    ),
  },
];

const DomainsPage: React.FC = () => {
  const [showReadyToJoin, setShowReadyToJoin] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show "Ready to Join" when user has scrolled 60% of the page
      const scrollPercentage = (scrollPosition + windowHeight) / documentHeight;
      
      if (scrollPercentage > 0.6) {
        setShowReadyToJoin(true);
      }
    };

    // Create an intersection observer for the sticky scroll container
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the sticky scroll container is 80% visible, show the popup
          if (entry.intersectionRatio > 0.8) {
            setShowReadyToJoin(true);
          }
        });
      },
      { threshold: [0.8] }
    );

    // Initial check
    setTimeout(handleScroll, 100);
    
    // Observe the sticky scroll container
    const stickyScrollElement = document.querySelector('.sticky-scroll-container');
    if (stickyScrollElement) {
      observer.observe(stickyScrollElement);
    }
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
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
      
      {/* Foreground content with proper z-index */}
      <div className="relative z-10">
        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-8 pt-4">
            <div className="mb-8 flex justify-start">
              {/* <Link href="/">
                <Button type="secondary" shade="product-purple-light">
                  ← Back to Home
                </Button>
              </Link> */}
            </div>
            <h1 className="font-product-bungee text-7xl max-sm:text-4xl mb-6 flex flex-col items-center gap-3 tracking-tight">
              <span className="text-white drop-shadow-md">{"Choose Your Domain"}</span>
              <span className="text-green-400 text-6xl max-sm:text-3xl bg-gradient-to-r from-green-400 to-emerald-300 text-transparent bg-clip-text">
                {"Join the Team"}
              </span>
            </h1>
            <p className="text-lg text-gray-200 text-center max-w-2xl mx-auto font-product-manrope leading-relaxed">
              {"Explore our different domains and find where your skills and passion align. "}
              <span className="font-medium text-white">
                {"Each domain plays a crucial role in our community's success."}
              </span>
            </p>
          </div>

          {/* Domain Cards Section - Removed extra spacing */}
          <div className="-mt-8">
            <div className="w-full">
              <StickyScroll content={DOMAIN_CONTENT} />
            </div>
          </div>

          {/* Ready to Join Section */}
          <AnimatePresence>
            {showReadyToJoin && (
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.9 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center pt-8 md:pt-12 lg:pt-16 pb-12 md:pb-16 lg:pb-20 relative"
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-5">
                      <motion.div 
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                        className="text-9xl font-product-bungee text-green-400"
                      >
                        🌟
                      </motion.div>
                    </div>
                    <motion.h2 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="text-5xl max-sm:text-3xl font-product-bungee text-white mb-8 relative z-10 tracking-tight"
                    >
                      <span className="bg-gradient-to-r from-green-300 to-emerald-400 text-transparent bg-clip-text">
                        Ready to Join?
                      </span>
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="text-lg text-gray-200 mb-12 font-product-manrope max-w-2xl mx-auto relative z-10 leading-relaxed"
                    >
                      <span className="font-medium">
                        Choose the domain that best fits your skills and interests. 
                      </span>
                      <span className="font-semibold text-white">
                        We&apos;re looking for passionate individuals who want to make a difference in the tech community.
                      </span>
                    </motion.p>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      className="flex flex-col md:flex-row gap-4 justify-center items-center flex-wrap relative z-10"
                    >
                      <Button type="secondary" shade="product-purple-light">
                        Apply Now
                      </Button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
        </main>
      </div>
    </React.Fragment>
  );
};

export default DomainsPage; 
