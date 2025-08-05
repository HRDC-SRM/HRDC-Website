// Basic Imports
import React from "react";
import Link from "next/link";
import { NextPage } from "next";

// Component Imports
import Callout from "@/components/ui-patterns/Callout";
import EmojiLayer from "@/components/EmojiLayer";
import GetStarted from "@/components/GetStarted";
// import HackathonCTA from "@/components/HackathonCTA";
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
        title="Hackerrank Developers Community SRMIST"
        description="Your Space to Learn, Build, and Level Up"
      />

      {/* ✅ Animated background */}
      

      {/* ✅ Foreground content unchanged */}
      <div className="home max-sm:overflow-hidden relative z-10">
        <main className="checks-container">
          <div className="hero-section-wrapper w-fit h-auto mx-auto flex flex-col items-center justify-between mb-16">
            <h1 className="mt-6 flex flex-col items-center justify-between gap-4 max-sm:text-4xl text-7xl font-product-bungee text-center">
              Where<GradientText>developers level</GradientText>
              up and<GradientText>stand out</GradientText>
            </h1>

            <Link href="https://discord.com" className="mt-12" target="_blank">
              <Button shade="product-purple-light">Join us</Button>
            </Link>
          </div>

          <EmojiLayer />
        </main>

        <GetStarted />
        <OrganizeWithUs />
        <Team />
        {/* <HackathonCTA /> */}
        {/* <CommunityNarratives /> */}
      </div>
    </React.Fragment>
  );
};

export default Home;
