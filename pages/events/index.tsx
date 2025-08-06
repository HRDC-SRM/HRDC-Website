// Basic Imports
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";

// Components Imports
import OrganizeWithUs from "@/components/OrganizeWithUs";
import Button from "@/components/ui-patterns/Button";
import UpcomingHackathons from "@/components/UpcomingHackathons";
import UpcomingSessions from "@/components/UpcomingSessions";
import MetaHead from "@/components/MetaHead";

const Events: NextPage = () => {
  return (
    <React.Fragment>
      <MetaHead title={`${new Date().getFullYear()} Season`} description="Hackathons, Sessions & Events" />
      
      {/* Coming Soon Overlay */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
        <div className="text-center">
          <h1 className="font-product-bungee text-6xl md:text-8xl text-white mb-4 animate-pulse">
            Coming Soon
          </h1>
          <p className="font-product-manrope text-xl md:text-2xl text-product-text-light animate-bounce">
            🚀 We&apos;re working on something amazing!
          </p>
        </div>
      </div>

      {/* Blurred Content */}
      <div className="events pointer-events-none" style={{ filter: 'blur(50px)' }}>
        <div className="checks-container">
          <div className="wrapped-view flex flex-row items-center justify-evenly max-sm:flex-col">
            <div className="hero-section-wrapper w-fit h-auto flex flex-col items-start justify-between mb-16 max-sm:items-center">
              <h1 className="font-product-bungee text-5xl mt-6 flex flex-col items-start justify-between gap-4 max-sm:items-center max-sm:text-4xl max-sm:gap-1 max-sm:mt-10 " >
                <span>{"Events in season"}</span>
                <span>
                  {new Date().getFullYear() +
                    "-" +
                    Number(new Date().getFullYear() + 1)}
                </span>
              </h1>
              <Link href="/events/past-events" className="mt-12">
                <Button shade="#1BA94C">{"See Past Events"}</Button>
              </Link>
            </div>
            <div className="illustration-wrapper">
              <Image
                className="w-[300px]"
                src="/skills-illustration_updated.svg"
                width="366"
                height="380"
                alt="skills-illustration"
              />
            </div>
          </div>
        </div>
        <div className="upcoming-hackathons-section-wrapper">
          <UpcomingSessions />
          <UpcomingHackathons />
          <OrganizeWithUs />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Events;
