// Basic Imports
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";

// Components Imports
import Button from "@/components/ui-patterns/Button";
import MetaHead from "@/components/MetaHead";
import DarkVeil from "@/components/ui-patterns/Darkveil";

const NotFound: NextPage = () => {
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
      <MetaHead title="404 - Page Not Found" description="Oops! The page you're looking for doesn't exist." />
      
      {/* Foreground content */}
      <div className="home max-sm:overflow-hidden relative z-10">
        <div className="invalid-page py-24 my-12 max-sm:py-16 max-sm:my-8">
          <section className="invalid-page-content-wrapper text-center w-fit h-fit mx-auto flex flex-col items-center justify-start gap-8 max-sm:gap-6">
            <h1 className="leading-snug font-product-bungee text-6xl max-sm:text-4xl text-white">
              {"Error 404"}
            </h1>
            <h2 className="leading-snug font-product-bungee text-3xl max-sm:text-2xl text-white text-opacity-80">
              {"Don't worry, we got you!"}
            </h2>
            <div className="error-message-wrapper">
              <p className="text-white text-opacity-90 text-xl max-sm:text-lg font-medium">
                {"😔 Sorry for the error! Our team is looking into it!"}
              </p>
            </div>
            <div className="cta-buttons-layer-wrapper flex flex-row items-center justify-center gap-6 w-fit h-fit max-sm:flex-col max-sm:gap-4">
              <Link href="/">
                <Button type="primary" shade="product-blue">
                  {"Go to Home Page"}
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
