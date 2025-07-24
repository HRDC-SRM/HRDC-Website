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
      <section className="footer-section my-24 py-12 max-sm:mb-8 max-sm:mt-0 max-sm:py-0">
        <div className="footer-content-wrapper wrapped-view border-b border-gray-600 pb-6">
          <div className="logo-wrapper flex flex-row items-start justify-start w-fit h-auto gap-3 max-sm:items-center max-sm:mx-auto ">
            <Image src="/hackerrank-logo.svg" alt="hackerrank" width="60" height="60" />
            <span className="hekors-title-tagline-wrapper flex flex-col items-start justify-start w-fit h-auto">
              <span className="hekors-title font-product-bungee text-product-text-light text-3xl">
                {"Hackerrank Developers Community"}
              </span>
              <span className="hekors-tagline font-product-manrope text-gray-300 text-sm font-semibold w-[24ch]">
                {"Your Space to Learn, Build, and Level Up."}
              </span>
            </span>
          </div>
          <div className="footer-links-content-wrapper mt-20 flex flex-row items-start justify-between max-sm:flex-col max-sm:items-center">
            <div className="discord-cta-container max-sm:text-center">
              <h2 className="font-semibold font-product-bungee text-2xl w-[280px] mb-6">
                <span className="text-product-text-light">
                  {"make sure you join our"}
                </span>
                <span className="text-product-purple-light">{" community"}</span>
              </h2>
              <Button type="secondary" shade="product-purple-light">
                {"Join Discord"}
              </Button>
            </div>
            <div className="footer-links-sections-wrapper max-sm:pt-24">
              <div className="flex flex-row items-start justify-end gap-12 max-sm:justify-center">
                <div className="footer-links__community-links-wrapper">
                  <h2 className="leading-snug font-product-bungee text-lg text-product-blue">
                    {"Community"}
                  </h2>
                  <ul className="footer-options-list flex flex-col items-start justify-start gap-1 mt-3">
                    {communityLinks?.map(
                      (
                        footerOption: FooterOptionType,
                        footerOptionIndex: number
                      ) => (
                        <li
                          className="footer-option-list-item list-none text-sm text-gray-300 hover:text-white"
                          key={footerOptionIndex}
                        >
                          {footerOption?.link && (
                            <Link href={footerOption?.link} target="_blank">
                              <span className="list-item-title-wrapper">
                                {footerOption?.title}
                              </span>
                            </Link>
                          )}
                          {footerOption?.path && (
                            <Link href={footerOption?.path}>
                              <span className="list-item-wrapper">
                                {footerOption?.title}
                              </span>
                            </Link>
                          )}
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div className="footer-links__direct-links-wrapper">
                  <h2 className="leading-snug font-product-bungee text-lg text-product-blue">
                    {"Governing Bodies"}
                  </h2>
                  <ul className="footer-options-list flex flex-col items-start justify-start gap-1 mt-3">
                    {directLinks?.map(
                      (
                        footerOption: FooterOptionType,
                        footerOptionIndex: number
                      ) => (
                        <li
                          className="footer-option-list-item list-none text-sm text-gray-300 hover:text-white"
                          key={footerOptionIndex}
                        >
                          {footerOption?.link && (
                            <Link href={footerOption?.link} target="_blank">
                              <span className="list-item-title-wrapper">
                                {footerOption?.title}
                              </span>
                            </Link>
                          )}
                          {footerOption?.path && (
                            <Link href={footerOption?.path}>
                              <span className="list-item-title-wrapper">
                                {footerOption?.title}
                              </span>
                            </Link>
                          )}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
              <div className="social-links-layer-wrapper mt-24 flex flex-row items-center justify-end gap-2 max-sm:justify-center">
                {socialLinks?.map(
                  (socialLink: SocialLinkType, socialLinkIndex: number) => (
                    <Link
                      href={socialLink?.link || ""}
                      target="_blank"
                      key={socialLinkIndex}
                    >
                      <span className="social-link-icon-wrapper">
                        <Image
                          src={`/social/${socialLink?.iconPath}`}
                          alt={socialLink?.label || "icon"}
                          title={socialLink?.label}
                          className="scale-100 hover:scale-105 transition-all"
                          width="60"
                          height="60"
                        />
                      </span>
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-gray-400 cursor-default select-none">
            &copy;{" "}
            {"Hackerrank Developers Community " +
              new Date().getFullYear() +
              "-" +
              Number(new Date().getFullYear() + 1)}
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Footer;
