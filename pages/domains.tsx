import React, { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui-patterns/Button';
import AnimatedContent from '@/components/AnimatedContent';
import DarkVeil from '@/components/ui-patterns/Darkveil'; // ✅ Background import

// Domain data with enhanced descriptions and green accents (3 domains only)
const domainItems = [
  {
    name: "Technical",
    icon: "💻",
    description: "Core development and technical implementation team. Lead community projects, create workshops, mentor developers, contribute to open source, and drive technical innovation.",
    skills: ["Programming Fundamentals", "Web Technologies", "Database Knowledge", "API Development", "Problem Solving", "Git Proficiency"],
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-400",
    bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&crop=center"
  },
  {
    name: "Corporate",
    icon: "💼",
    description: "Business development and external relations powerhouse. Manage partnerships, organize corporate events, handle sponsorships, coordinate with industry professionals, and develop business strategies.",
    skills: ["Communication Skills", "Networking Abilities", "Project Management", "Business Processes", "Event Planning"],
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-400",
    bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center"
  },
  {
    name: "Creative",
    icon: "🎨",
    description: "Design, content creation, and creative direction team. Design community branding, create social media content, develop marketing campaigns, design event materials, and maintain visual consistency.",
    skills: ["UI/UX Design", "Graphic Design", "Content Creation", "Creative Thinking", "Design Tools", "Brand Awareness"],
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-400",
    bgImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&crop=center"
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
      
      {/* ✅ Foreground content with proper z-index */}
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
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-product-bungee text-green-400 mb-6">
                ✨ Our Domains
              </h3>
              <p className="text-product-text-light font-product-manrope text-lg">
                Choose the domain that matches your skills and interests
              </p>
            </div>
            
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {domainItems.map((domain, index) => (
                  <AnimatedContent
                    key={index}
                    distance={50}
                    direction="vertical"
                    reverse={false}
                    duration={1.0}
                    ease="power2.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={0.9}
                    threshold={0.1}
                    delay={index * 0.2}
                  >
                    <div className="group relative overflow-hidden rounded-2xl border-2 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 min-h-[600px] flex flex-col">
                      {/* Background Image with Overlay */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                        style={{ backgroundImage: `url(${domain.bgImage})` }}
                      ></div>
                      
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      
                      {/* Border Glow Effect */}
                      <div className={`absolute inset-0 rounded-2xl border-2 ${domain.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg`}></div>
                      
                      {/* Content */}
                      <div className="relative z-10 p-8 h-full flex flex-col">
                        {/* Header */}
                        <div className="text-center mb-6">
                          <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                            {domain.icon}
                          </div>
                          <h3 className="text-3xl md:text-4xl font-product-bungee text-green-400 font-bold">
                            {domain.name}
                          </h3>
                        </div>
                        
                        {/* Description */}
                        <div className="flex-grow">
                          <p className="text-product-text-light text-base md:text-lg font-product-manrope leading-relaxed text-center mb-6">
                            {domain.description}
                          </p>
                          
                          {/* Skills Section */}
                          <div className="mt-auto">
                            <h4 className="text-lg font-product-bungee text-green-300 mb-4 text-center">
                              Key Skills
                            </h4>
                            <div className="flex flex-wrap gap-2 justify-center">
                              {domain.skills.map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="px-3 py-1 bg-gray-800/50 border border-gray-600 rounded-full text-sm text-product-text-light font-product-manrope group-hover:border-green-400/50 group-hover:bg-green-400/10 transition-all duration-300"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {/* CTA Button */}
                        <div className="mt-6 text-center">
                          <div className="w-full group-hover:scale-105 transition-transform duration-300">
                            <Button 
                              type="primary" 
                              shade="product-purple-light"
                            >
                              Join {domain.name} Team
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedContent>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          {/* <AnimatedContent
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
          </AnimatedContent> */}
        </main>
      </div>
    </React.Fragment>
  );
};

export default DomainsPage; 
