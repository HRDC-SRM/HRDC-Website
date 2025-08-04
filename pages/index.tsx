// Basic Imports
import React from "react";
import Link from "next/link";
import { NextPage } from "next";

// Components Imports
import Callout from "@/components/ui-patterns/Callout";
import EmojiLayer from "@/components/EmojiLayer";
import GetStarted from "@/components/GetStarted";
import HackathonCTA from "@/components/HackathonCTA";
import OrganizeWithUs from "@/components/OrganizeWithUs";
import Team from "@/components/Team";
import Button from "@/components/ui-patterns/Button";
import MetaHead from "@/components/MetaHead";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <MetaHead title="Hackerrank Developers Community SRMISTT" description="Your Space to Learn, Build, and Level Up" />
      <div className="home max-sm:overflow-hidden">
        <main className="checks-container">
          <div className="hero-section-wrapper w-fit h-auto mx-auto flex flex-col items-center justify-between mb-16">
            <Callout>{"Our Vision"}</Callout>
            <h1 className="font-product-bungee text-7xl mt-6 flex flex-col items-center justify-between gap-4 max-sm:text-4xl">
              <span>{"Where developers level"}</span>
              <span>{"up and stand out"}</span>
            </h1>
            <Link
              href="https://discord.com"
              className="mt-12"
              target="_blank"
            >
              <Button shade="product-purple-light">{"Join us"}</Button>
            </Link>
          </div>
          <EmojiLayer />
        </main>
        <GetStarted />
        <OrganizeWithUs />
        <Team />
        <HackathonCTA />
        {/* REMOVING COMMUNITY NARRATIVES SECTION UNTIL FURTHER UPDATES */}
        {/* <CommunityNarratives /> */}
      </div>
    </React.Fragment>
  );
};

export default Home;
