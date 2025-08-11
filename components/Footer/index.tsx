// Basic Imports
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Components Imports
import Button from "@/components/ui-patterns/Button";
import { communityLinks, directLinks, socialLinks } from "./footer-data";

// Types Imports
import { FooterOptionType, SocialLinkType } from "@/types/footer-option-type";

type Props = FooterOptionType | SocialLinkType;

const Footer: React.FunctionComponent<Props> = () => {
  return (
    <React.Fragment>
            <section className="footer-section py-10 max-sm:py-8">
        <div className="footer-content-wrapper wrapped-view">
          {/* Logo and Tagline Section */}
          <div className="logo-section text-center mb-10 max-sm:mb-8">
            <div className="logo-wrapper flex flex-row items-center justify-center gap-3 mb-4">
              <div className="logo-container relative">
                <Image 
                  src="/hackerrank-logo.svg" 
                  alt="hackerrank" 
                  width="70" 
                  height="70"
                  className="max-sm:w-14 max-sm:h-14"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl"></div>
              </div>
              <div className="title-container">
                <h1 className="hekors-title font-product-bungee text-product-text-light text-4xl mb-1 max-sm:text-xl">
                  {"Hackerrank Developers Community"}
                </h1>
                <p className="hekors-tagline font-product-manrope text-gray-300 text-base text-2xl max-sm:text-sm">
                  {"Your Space to Learn, Build, and Level Up."}
                </p>
              </div>
            </div>
            

          </div>

                    {/* Main Footer Content */}
          <div className="footer-main-content flex flex-col lg:flex-row items-center justify-center gap-16 mb-10 max-sm:mb-8 max-sm:gap-12">
            {/* Community Links */}
            <div className="community-section text-center">
              <div className="section-header mb-4">
                <h3 className="text-lg font-product-bungee text-product-blue mb-2">
                  {"Community"}
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
              </div>
              <ul className="space-y-2">
                {communityLinks?.map(
                  (footerOption: FooterOptionType, footerOptionIndex: number) => (
                    <li key={footerOptionIndex}>
                      {footerOption?.link && (
                        <Link 
                          href={footerOption?.link} 
                          target="_blank"
                          className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                        >
                          {footerOption?.title}
                        </Link>
                      )}
                      {footerOption?.path && (
                        <Link 
                          href={footerOption?.path}
                          className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                        >
                          {footerOption?.title}
                        </Link>
                      )}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Governing Bodies */}
            <div className="governing-section text-center">
              <div className="section-header mb-4">
                <h3 className="text-lg font-product-bungee text-product-blue mb-2">
                  {"Governing Bodies"}
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-green-500 to-blue-600 mx-auto"></div>
              </div>
              <ul className="space-y-2">
                {directLinks?.map(
                  (footerOption: FooterOptionType, footerOptionIndex: number) => (
                    <li key={footerOptionIndex}>
                      {footerOption?.link && (
                        <Link 
                          href={footerOption?.link} 
                          target="_blank"
                          className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                        >
                          {footerOption?.title}
                        </Link>
                      )}
                      {footerOption?.path && (
                        <Link 
                          href={footerOption?.path}
                          className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                        >
                          {footerOption?.title}
                        </Link>
                      )}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="social-section text-center mb-8">
            <div className="section-header mb-6 pt-8">
              <h3 className="text-lg font-product-bungee text-product-blue mb-2">
                {"Connect With Us"}
              </h3>
              <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 mx-auto"></div>
            </div>
            <div className="social-icons flex items-center justify-center gap-4 flex-wrap">
              {socialLinks?.map(
                (socialLink: SocialLinkType, socialLinkIndex: number) => (
                  <Link
                    href={socialLink?.link || ""}
                    target="_blank"
                    key={socialLinkIndex}
                    className="social-link group"
                  >
                                       <div className="social-icon-container relative p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-200 hover:scale-110">
                     <Image
                       src={`/social/${socialLink?.iconPath}`}
                       alt={socialLink?.label || "icon"}
                       title={socialLink?.label}
                       className="w-6 h-6 max-sm:w-5 max-sm:h-5 transition-transform duration-200 group-hover:scale-110"
                       width="24"
                       height="24"
                     />
                     <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-200 blur-sm"></div>
                   </div>
                  </Link>
                )
              )}
              {/* Discord icon in social icons */}
                             {/* <Link href="https://discord.com" target="_blank" className="social-link group">
                 <div className="social-icon-container relative p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-200 hover:scale-110">
                   <Image
                     src="/social/discord-icon.svg"
                     alt="Discord"
                     title="Join Discord"
                     className="w-6 h-6 max-sm:w-5 max-sm:h-5 transition-transform duration-200 group-hover:scale-110"
                     width="24"
                     height="24"
                   />
                   <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-200 blur-sm"></div>
                 </div>
               </Link> */}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="bottom-bar border-t border-gray-700 pt-6">
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                &copy;{" "}
                {"Hackerrank Developers Community " +
                  new Date().getFullYear() +
                  "-" +
                  Number(new Date().getFullYear() + 1)}
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Footer;
