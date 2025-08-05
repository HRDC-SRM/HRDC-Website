import React, { useState } from 'react';
import Link from 'next/link';
import Callout from '@/components/ui-patterns/Callout';
import Button from '@/components/ui-patterns/Button';
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack';
import AnimatedContent from '@/components/AnimatedContent';

// Domain data with enhanced descriptions and green accents (3 domains only)
const domainItems = [
  {
    name: "Technical",
    description: "💻 Core development and technical implementation team. Lead community projects, create workshops, mentor developers, contribute to open source, and drive technical innovation. Requires strong programming fundamentals, web technologies expertise, database knowledge, API development skills, problem-solving abilities, and Git proficiency."
  },
  {
    name: "Corporate",
    description: "💼 Business development and external relations powerhouse. Manage partnerships, organize corporate events, handle sponsorships, coordinate with industry professionals, and develop business strategies. Needs excellent communication skills, networking abilities, project management experience, business process understanding, and event planning capabilities."
  },
  {
    name: "Creative",
    description: "🎨 Design, content creation, and creative direction team. Design community branding, create social media content, develop marketing campaigns, design event materials, and maintain visual consistency. Requires design skills (UI/UX, graphic design), content creation abilities, creative thinking, design tools experience (Figma, Adobe), and brand awareness."
  }
];

const DomainsPage: React.FC = () => {
  const [hasScrolledThroughStack, setHasScrolledThroughStack] = useState(false);

  const handleStackComplete = () => {
    setHasScrolledThroughStack(true);
  };

  const handleStackIncomplete = () => {
    setHasScrolledThroughStack(false);
  };

  return (
    <div className="min-h-screen bg-product-dark">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16 pt-8">
          <div className="mb-8 flex justify-start">
            <Link href="/">
              <Button type="secondary" shade="product-purple-light">
                ← Back to Home
              </Button>
            </Link>
          </div>
          <Callout>{"Our Domains"}</Callout>
          <h1 className="font-product-bungee text-5xl md:text-7xl mt-8 mb-4 flex flex-col items-center justify-between gap-4">
            <span className="text-white">{"Choose Your Domain"}</span>
            <span className="text-green-500">{"Join the Team"}</span>
          </h1>
          <span className="mt-6 text-lg md:text-xl text-product-text-light text-center max-w-3xl mx-auto font-product-manrope leading-relaxed">
            {"Explore our different domains and find where your skills and passion align. Each domain plays a crucial role in our community's success."}
          </span>
        </div>

        {/* Domain Cards Section */}
        <div className="mb-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-product-bungee text-green-400 mb-6">
              ✨ Our Domains
            </h3>
            <p className="text-product-text-light font-product-manrope text-lg">
              Choose the domain that matches your skills and interests
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto" style={{ height: '95vh' }}>
            <ScrollStack
              itemDistance={200}
              itemScale={0.05}
              itemStackDistance={60}
              stackPosition="25%"
              scaleEndPosition="15%"
              baseScale={0.8}
              rotationAmount={2}
              blurAmount={1}
              onStackComplete={handleStackComplete}
              onStackIncomplete={handleStackIncomplete}
              className="scroll-stack-no-scrollbar"
            >
              {domainItems.map((domain, index) => (
                <ScrollStackItem key={index} itemClassName="group relative overflow-hidden rounded-2xl border-2 border-green-500 bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 min-h-[500px]">
                  {/* Background Image */}
                  <div className={`absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300 ${
                    domain.name === "Technical" 
                      ? "bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&crop=center')]"
                      : domain.name === "Corporate"
                      ? "bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center')]"
                      : "bg-[url('https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&crop=center')]"
                  }`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                    <h3 className="text-3xl md:text-4xl font-product-bungee text-green-400 mb-6 text-center font-bold">
                      {domain.name}
                    </h3>
                    <p className="text-product-text-light text-base md:text-lg font-product-manrope leading-relaxed text-center">
                      {domain.description}
                    </p>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </div>

        {/* Call to Action Section - Only visible after scrolling through stack */}
        {hasScrolledThroughStack && (
          <AnimatedContent
            distance={0}
            direction="vertical"
            reverse={false}
            duration={2.0}
            ease="power2.out"
            initialOpacity={0}
            animateOpacity
            scale={0.6}
            threshold={0.2}
            delay={1.5}
          >
            <div className="text-center mb-16 relative">
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
        )}
      </main>
    </div>
  );
};

export default DomainsPage; 
