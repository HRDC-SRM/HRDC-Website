// Basic Imports
import React from "react";
import Link from "next/link";
import { NextPage } from "next";

// Component Imports
import GetStarted from "@/components/GetStarted";
import OrganizeWithUs from "@/components/OrganizeWithUs";
import Team from "@/components/Team";
import Button from "@/components/ui-patterns/Button";
import MetaHead from "@/components/MetaHead";
import DarkVeil from "@/components/ui-patterns/Darkveil"; // ✅ Background import

// Gradient Text with Animation
const GradientText: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ className, children }) => (
  <span
    className={`animated-gradient-text ${className}`}
    style={{
      background: `linear-gradient(270deg, #00EA64, #ffffff, #00EA64)`,
      backgroundSize: "200% auto",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      display: "inline-block",
      animation: "shine 3s linear infinite",
    }}
  >
    {children}
  </span>
);

const Home: NextPage = () => {
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
      <MetaHead
        title="HRDC SRMIST"
        description="Your Space to Learn, Build, and Level Up"
      />      

      {/* ✅ Foreground content unchanged */}
      <div className="home max-sm:overflow-hidden relative z-10">
        <main className="checks-container">
          <div className="hero-section-wrapper w-fit h-auto mx-auto flex flex-col items-center justify-center min-h-screen">
            <h1 className="flex flex-col items-center justify-center gap-4 max-sm:text-3xl max-sm:gap-2 text-7xl font-product-bungee text-center -mt-24 max-sm:-mt-12 max-sm:px-2 max-sm:pt-[40px] sm:pt-[40px]">
              <span className="max-sm:break-words max-sm:text-center">Where</span>
              <GradientText className="max-sm:break-words max-sm:text-center">developers level</GradientText>
              <span className="max-sm:break-words max-sm:text-center">up and</span>
              <GradientText className="max-sm:break-words max-sm:text-center">stand out</GradientText>
            </h1>

            <Link href="https://discord.com" className="mt-12" target="_blank">
              <Button shade="product-purple-light">Join us</Button>
            </Link>

            {/* Floating code blocks */}
            <div className="mt-16 relative">
              <div className="flex items-center justify-center space-x-8 max-sm:grid max-sm:grid-cols-3 max-sm:gap-4 max-sm:space-x-0 max-sm:space-y-0 max-sm:p-2.5">
                <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg p-6 transform -rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-105 max-sm:transform-none max-sm:hover:scale-100 max-sm:p-4 max-sm:overflow-hidden cursor-pointer">
                  <div className="text-green-400 text-sm font-mono max-sm:text-xs max-sm:break-words max-sm:whitespace-normal">const</div>
                  <div className="text-blue-400 text-sm font-mono max-sm:text-xs max-sm:break-words max-sm:whitespace-normal">developer</div>
                  <div className="text-white text-sm font-mono max-sm:text-xs max-sm:break-words max-sm:whitespace-normal">=</div>
                  <div className="text-yellow-400 text-sm font-mono max-sm:text-xs max-sm:break-words max-sm:whitespace-normal">&quot;HRDC&quot;</div>
                </div>
                
                <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg p-6 transform rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-105 max-sm:transform-none max-sm:hover:scale-100 max-sm:p-4 max-sm:overflow-hidden cursor-pointer">
                  <div className="text-green-400 text-sm font-mono max-sm:text-xs max-sm:break-words max-sm:whitespace-normal">if</div>
                  <div className="text-white text-sm font-mono max-sm:text-xs max-sm:break-words max-sm:whitespace-normal">(</div>
                  <div className="text-blue-400 text-sm font-mono max-sm:text-xs max-sm:break-words max-sm:whitespace-normal">passion</div>
                  <div className="text-white text-sm font-mono max-sm:text-xs max-sm:break-words max-sm:whitespace-normal">) {'{'}</div>
                  <div className="text-purple-400 text-sm font-mono ml-2 max-sm:text-xs max-sm:ml-1 max-sm:break-words max-sm:whitespace-normal">join()</div>
                  <div className="text-white text-sm font-mono max-sm:text-xs max-sm:break-words max-sm:whitespace-normal">{'}'}</div>
                </div>
                
                <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg p-6 transform -rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 max-sm:transform-none max-sm:hover:scale-100 max-sm:p-4 max-sm:overflow-hidden cursor-pointer">
                  <div className="text-green-400 text-sm font-mono max-sm:text-xs max-sm:break-words max-sm:whitespace-normal">while</div>
                  <div className="text-white text-sm font-mono max-sm:text-xs max-sm:break-words max-sm:whitespace-normal">(</div>
                  <div className="text-blue-400 text-sm font-mono max-sm:text-xs max-sm:break-words max-sm:whitespace-normal">learning</div>
                  <div className="text-white text-sm font-mono max-sm:text-xs max-sm:break-words max-sm:whitespace-normal">) {'{'}</div>
                  <div className="text-purple-400 text-sm font-mono ml-2 max-sm:text-xs max-sm:ml-1 max-sm:break-words max-sm:whitespace-normal">grow()</div>
                  <div className="text-white text-sm font-mono max-sm:text-xs max-sm:break-words max-sm:whitespace-normal">{'}'}</div>
                </div>

                <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg p-6 transform rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-105 max-sm:transform-none max-sm:hover:scale-100 max-sm:p-4 max-sm:overflow-hidden cursor-pointer">
                  <div className="text-green-400 text-sm font-mono max-sm:text-xs max-sm:break-words max-sm:whitespace-normal">function</div>
                  <div className="text-blue-400 text-sm font-mono max-sm:text-xs max-sm:break-words max-sm:whitespace-normal">build() {'{'}</div>
                  <div className="text-purple-400 text-sm font-mono ml-2 max-sm:text-xs max-sm:ml-1 max-sm:break-words max-sm:whitespace-normal">return</div>
                  <div className="text-yellow-400 text-sm font-mono max-sm:text-xs max-sm:break-words max-sm:whitespace-normal">&quot;future&quot;</div>
                  <div className="text-white text-sm font-mono max-sm:text-xs max-sm:break-words max-sm:whitespace-normal">{'}'}</div>
                </div>

                <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg p-6 transform -rotate-9 hover:rotate-0 transition-all duration-500 hover:scale-105 max-sm:transform-none max-sm:hover:scale-100 max-sm:p-4 max-sm:overflow-hidden cursor-pointer">
                  <div className="text-green-400 text-sm font-mono max-sm:text-xs max-sm:break-words max-sm:whitespace-normal">class</div>
                  <div className="text-blue-400 text-sm font-mono max-sm:text-xs max-sm:break-words max-sm:whitespace-normal">Community {'{'}</div>
                  <div className="text-purple-400 text-sm font-mono ml-2 max-sm:text-xs max-sm:ml-1 max-sm:break-words max-sm:whitespace-normal">constructor() {'{'}</div>
                  <div className="text-cyan-400 text-sm font-mono ml-4 max-sm:text-xs max-sm:ml-2 max-sm:break-words max-sm:whitespace-normal">this.name = &quot;HRDC&quot;</div>
                  <div className="text-purple-400 text-sm font-mono max-sm:text-xs max-sm:ml-1 max-sm:break-words max-sm:whitespace-normal">{'}'}</div>
                  <div className="text-white text-sm font-mono max-sm:text-xs max-sm:break-words max-sm:whitespace-normal">{'}'}</div>
                </div>

                <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg p-6 transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 max-sm:transform-none max-sm:hover:scale-100 max-sm:p-4 max-sm:overflow-hidden cursor-pointer">
                  <div className="text-green-400 text-sm font-mono max-sm:text-xs max-sm:break-words max-sm:whitespace-normal">const</div>
                  <div className="text-blue-400 text-sm font-mono max-sm:text-xs max-sm:break-words max-sm:whitespace-normal">skills =</div>
                  <div className="text-yellow-400 text-sm font-mono max-sm:text-xs max-sm:break-words max-sm:whitespace-normal">[</div>
                  <div className="text-cyan-400 text-sm font-mono ml-2 max-sm:text-xs max-sm:ml-1 max-sm:break-words max-sm:whitespace-normal">&quot;coding&quot;,</div>
                  <div className="text-cyan-400 text-sm font-mono ml-2 max-sm:text-xs max-sm:ml-1 max-sm:break-words max-sm:whitespace-normal">&quot;collaboration&quot;,</div>
                  <div className="text-cyan-400 text-sm font-mono ml-2 max-sm:text-xs max-sm:ml-1 max-sm:break-words max-sm:whitespace-normal">&quot;innovation&quot;</div>
                  <div className="text-yellow-400 text-sm font-mono max-sm:text-xs max-sm:break-words max-sm:whitespace-normal">]</div>
                </div>
              </div>
            </div>

          </div>
        </main>
        <GetStarted />
        <OrganizeWithUs />
        <Team />
      </div>
    </React.Fragment>
  );
};

export default Home;
