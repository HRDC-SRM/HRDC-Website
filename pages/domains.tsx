import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui-patterns/Button';
import AnimatedContent from '@/components/AnimatedContent';
import DarkVeil from '@/components/ui-patterns/Darkveil';
import CircularGallery from '@/components/CircularGallery';

// Domain data for the circular gallery
const DOMAIN_ITEMS = [
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&crop=center",
    text: "Technical",
    description: "Core development and technical implementation team. Lead community projects, create workshops, mentor developers, contribute to open source, and drive technical innovation."
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center",
    text: "Corporate",
    description: "Business development and external relations powerhouse. Manage partnerships, organize corporate events, handle sponsorships, coordinate with industry professionals, and develop business strategies."
  },
  {
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&crop=center",
    text: "Creative",
    description: "Design, content creation, and creative direction team. Design community branding, create social media content, develop marketing campaigns, design event materials, and maintain visual consistency."
  }
];

const DomainsPage: React.FC = () => {
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
      <div className="min-h-screen relative z-10">
        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-16 pt-8">
            <div className="mb-8 flex justify-start">
              {/* <Link href="/">
                <Button type="secondary" shade="product-purple-light">
                  ← Back to Home
                </Button>
              </Link> */}
            </div>
            <h1 className="font-product-bungee text-5xl md:text-7xl mt-8 mb-4 flex flex-col items-center justify-between gap-4">
              <span className="text-white">{"Choose Your Domain"}</span>
              <span className="text-green-500">{"Join the Team"}</span>
            </h1>
            <span className="mt-6 text-lg md:text-xl text-product-text-light text-center max-w-3xl mx-auto font-product-manrope leading-relaxed">
              {"Explore our different domains and find where your skills and passion align. Each domain plays a crucial role in our community's success."}
            </span>
          </div>

          {/* Domain Cards Section */}
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              <div style={{ height: '600px', position: 'relative' }}>
                <CircularGallery 
                  items={DOMAIN_ITEMS}
                  bend={0} 
                  textColor="#ffffff" 
                  borderRadius={0} 
                  scrollEase={0.02}
                />
              </div>
              
              {/* Ready to Join Animation Section */}
              <AnimatedContent
                distance={50}
                direction="vertical"
                reverse={false}
                duration={1.5}
                ease="power2.out"
                initialOpacity={0}
                animateOpacity
                scale={0.9}
                threshold={0.2}
                delay={0.8}
              >
                <div className="text-center mt-20 mb-16 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-5">
                    <div className="text-9xl font-product-bungee text-green-400">🌟</div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-product-bungee text-white mb-6 relative z-10">
                    Ready to Join?
                  </h2>
                  <p className="text-product-text-light text-lg md:text-xl mb-10 font-product-manrope max-w-3xl mx-auto relative z-10 leading-relaxed">
                    Choose the domain that best fits your skills and interests. We&apos;re looking for passionate individuals who want to make a difference in the tech community.
                  </p>
                  <div className="flex gap-4 justify-center flex-wrap relative z-10">
                    <Button type="primary" shade="product-purple-light">
                      Apply Now
                    </Button>
                    <Link href="/">
                      <Button type="secondary" shade="product-purple-light">
                        Learn More About Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default DomainsPage; 
