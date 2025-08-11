// Basic Imports
import Image from "next/image";
import React from "react";

// JSON Imports
import TeamMembersData from "@/common/dataSource/team-data.json";

// Components Imports
import { TeamMemberCardSkeleton } from "@/components/ui-patterns/Skeleton";

// Types Imports
import { TeamMemberCardType } from "@/types/team-type";

// Icon Imports
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import DarkVeil from "@/components/ui-patterns/Darkveil";
import MetaHead from "@/components/MetaHead";

const AboutUs: React.FC = () => {
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

      {/* ✅ Foreground content unchanged */}
      <div className="home max-sm:overflow-hidden relative z-10">
      {/* Founders Section */}
      <section className="founders-section py-24 my-12">
        <div className="founders-section-content-wrapper wrapped-view">
          {/* <h3 className="get-started-title font-semibold tracking-wider text-sm uppercase flex flex-row text-white text-opacity-50 max-sm:items-center max-sm:justify-center max-sm:mx-auto">
            {"The Core Team"}
          </h3> */}
          <h1 className="get-started-headline font-product-bungee mt-4 text-4xl flex flex-row items-center justify-center w-fit h-fit gap-2 mx-auto max-sm:text-3xl">
            <span className="text-white">{"The "}</span>
            <span style={{ color: "#ff4e4e" }}>{" Core Team "}</span>
            <span className="text-white">{" of HRDC SRM"}</span>
          </h1>

          <div className="founders-list-wrapper mt-12 flex flex-row items-start justify-start gap-12 max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:mx-auto">
            {TeamMembersData?.length > 0 ? (
              TeamMembersData?.map(
                (teamMember: TeamMemberCardType, teamMemberIndex: number) => (
                  <FounderCard
                    picture={teamMember?.picture}
                    fullName={{
                      firstName: teamMember?.fullName?.firstName,
                      lastName: teamMember?.fullName?.lastName,
                    }}
                    isAvenger={teamMember?.isAvenger}
                    directWebsite={teamMember?.directWebsite}
                    socialProfile={{
                      twitterUsername:
                        teamMember?.socialProfile?.twitterUsername,
                      instagramUsername:
                        teamMember?.socialProfile?.instagramUsername,
                      linkedInUsername:
                        teamMember?.socialProfile?.linkedInUsername,
                      githubUsername: teamMember?.socialProfile?.githubUsername,
                    }}
                    description={teamMember?.description}
                    key={teamMemberIndex}
                  />
                )
              )
            ) : (
              <div className="skeleton-loading-cards-wrapper grid grid-cols-4 items-start justify-start gap-12">
                <TeamMemberCardSkeleton visibility={20} />
                <TeamMemberCardSkeleton visibility={20} />
                <TeamMemberCardSkeleton visibility={20} />
                <TeamMemberCardSkeleton visibility={20} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="domains-section py-24 my-12 ">
        <div className="domains-section-content-wrapper wrapped-view">
          <h1 className="domains-headline font-product-bungee text-4xl flex flex-col items-center justify-center w-fit h-fit mx-auto max-sm:text-3xl">
            <span className="text-white">{"Our"}</span>
            <span style={{ color: "#ff4e4e" }}>{" Domains Leads"}</span>
          </h1>

          <div className="domains-grid-wrapper mt-16 grid grid-cols-1 gap-16 max-sm:gap-12">
            {/* Creatives Domain */}
            <div className="domain-card-wrapper flex flex-col items-center justify-start gap-6">
              <h2 className="domain-title font-product-bungee text-2xl text-[#05c770] text-center">
                Creatives
              </h2>
              <div className="domain-images-wrapper flex flex-row gap-6 max-sm:gap-4">
                <div className="domain-lead-card-wrapper flex flex-col items-stretch justify-start gap-3 w-fit max-w-[280px] max-sm:max-w-[200px]">
                  <div className="domain-lead-picture-container relative border-2 border-white w-[280px] h-[370px] max-sm:w-[200px] max-sm:h-[260px] bg-gray-700">
                    {/* <div className="w-16 h-16 max-sm:w-12 max-sm:h-12 bg-gray-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div> */}
                    <Image
                      src="/team/shagun.jpg"
                      alt="Shagun Upman"
                      width={1500}
                      height={2100}
                      className="relative border-2 border-white -top-2 -left-2 hover:-top-1 hover:-left-1 transition-all w-full h-[370px]"
                      priority
                    />
                  </div>
                  <div className="domain-lead-card-details-wrapper max-sm:text-center">
                    <div className="flex flex-row items-start justify-between max-sm:flex-col max-sm:items-center max-sm:justify-center">
                      <div className="max-sm:text-center">
                        <h3 className="domain-lead__fullName-wrapper font-semibold text-white text-lg leading-tight">
                          Shagun Upman
                        </h3>
                      </div>
                    </div>
                    <div className="domain-lead__socialsWrapper w-fit h-auto mt-4 flex flex-row items-center justify-start gap-2 text-2xl text-white text-opacity-80 max-sm:justify-center max-sm:mx-auto">
                      <a href="https://www.instagram.com/shagun_upman/" target="_blank" rel="noreferrer" className="hover:rotate-12 transition-transform duration-200">
                        <FaInstagram />
                      </a>
                      <a href="https://www.linkedin.com/in/shagun-upman-7086a034b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="hover:rotate-12 transition-transform duration-200">
                        <FaLinkedinIn />
                      </a>
                    </div>

                  </div>
                </div>
                <div className="domain-lead-card-wrapper flex flex-col items-stretch justify-start gap-3 w-fit max-w-[280px] max-sm:max-w-[200px]">
                  <div className="domain-lead-picture-container relative border-2 border-white w-[280px] h-[370px] max-sm:w-[200px] max-sm:h-[260px] bg-gray-700">
                    {/* <div className="w-16 h-16 max-sm:w-12 max-sm:h-12 bg-gray-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div> */}
                      <Image
                      src="/team/aarushi.jpeg"
                      alt="Aarushi Sarkar"
                      width={1500}
                      height={2100}
                      className="relative border-2 border-white -top-2 -left-2 hover:-top-1 hover:-left-1 transition-all w-full h-[370px]"
                      priority
                    />
                  </div>
                  <div className="domain-lead-card-details-wrapper max-sm:text-center">
                    <div className="flex flex-row items-start justify-between max-sm:flex-col max-sm:items-center max-sm:justify-center">
                      <div className="max-sm:text-center">
                        <h3 className="domain-lead__fullName-wrapper font-semibold text-white text-lg leading-tight">
                          Aarushi Sarkar
                        </h3>
                      </div>
                    </div>
                    <div className="domain-lead__socialsWrapper w-fit h-auto mt-4 flex flex-row items-center justify-start gap-2 text-2xl text-white text-opacity-80 max-sm:justify-center max-sm:mx-auto">
                      <a href="https://www.instagram.com/aarushiisarkar/" target="_blank" rel="noreferrer" className="hover:rotate-12 transition-transform duration-200">
                        <FaInstagram />
                      </a>
                      <a href="#" target="_blank" rel="noreferrer" className="hover:rotate-12 transition-transform duration-200">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

                        {/* Technical Domain */}
            <div className="domain-card-wrapper flex flex-col items-center justify-start gap-6">
              <h2 className="domain-title font-product-bungee text-2xl text-[#05c770] text-center">
                Technical
              </h2>
              <div className="domain-images-wrapper flex flex-row gap-6 max-sm:gap-4">
                <div className="domain-lead-card-wrapper flex flex-col items-stretch justify-start gap-3 w-fit max-w-[280px] max-sm:max-w-[200px]">
                  <div className="domain-lead-picture-container relative border-2 border-white w-[280px] h-[370px] max-sm:w-[200px] max-sm:h-[260px] bg-gray-700">
                      <Image
                      src="/team/anik.jpg"
                      alt="Anik Das"
                      width={1500}
                      height={2100}
                      className="relative border-2 border-white -top-2 -left-2 hover:-top-1 hover:-left-1 transition-all w-full h-[370px]"
                      priority
                    />
                  </div>
                  <div className="domain-lead-card-details-wrapper max-sm:text-center">
                    <div className="flex flex-row items-start justify-between max-sm:flex-col max-sm:items-center max-sm:justify-center">
                      <div className="max-sm:text-center">
                        <h3 className="domain-lead__fullName-wrapper font-semibold text-white text-lg leading-tight">
                          Anik Das
                        </h3>
                        <span className="domain-lead__directWebsite-wrapper text-sm font-semibold text-white text-opacity-50 hover:text-opacity-60 leading-tight">
                          <a href="#" target="_blank" rel="noreferrer">
                            Portfolio
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="domain-lead__socialsWrapper w-fit h-auto mt-4 flex flex-row items-center justify-start gap-2 text-2xl text-white text-opacity-80 max-sm:justify-center max-sm:mx-auto">
                      <a href="https://www.instagram.com/anikk.dass/" target="_blank" rel="noreferrer" className="hover:rotate-12 transition-transform duration-200">
                        <FaInstagram />
                      </a>
                      <a href="https://www.linkedin.com/in/anikdas21/" target="_blank" rel="noreferrer" className="hover:rotate-12 transition-transform duration-200">
                        <FaLinkedinIn />
                      </a>
                      <a href="https://github.com/coderanik" target="_blank" rel="noreferrer" className="hover:rotate-12 transition-transform duration-200">
                        <FaGithub />
                      </a>
                    </div>

                  </div>
                </div>
                <div className="domain-lead-card-wrapper flex flex-col items-stretch justify-start gap-3 w-fit max-w-[280px] max-sm:max-w-[200px]">
                  <div className="domain-lead-picture-container relative border-2 border-white w-[280px] h-[370px] max-sm:w-[200px] max-sm:h-[260px] bg-gray-700">
                    <Image
                      src="/team/pratyush.jpg"
                      alt="Pratyush Srivastava"
                      width={1500}
                      height={2100}
                      className="relative border-2 border-white -top-2 -left-2 hover:-top-1 hover:-left-1 transition-all w-full h-[370px]"
                      priority
                    />
                  </div>
                  <div className="domain-lead-card-details-wrapper max-sm:text-center">
                    <div className="flex flex-row items-start justify-between max-sm:flex-col max-sm:items-center max-sm:justify-center">
                      <div className="max-sm:text-center">
                        <h3 className="domain-lead__fullName-wrapper font-semibold text-white text-lg leading-tight">
                          Pratyush Srivastava
                        </h3>
                        <span className="domain-lead__directWebsite-wrapper text-sm font-semibold text-white text-opacity-50 hover:text-opacity-60 leading-tight">
                          <a href="#" target="_blank" rel="noreferrer">
                            Portfolio
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="domain-lead__socialsWrapper w-fit h-auto mt-4 flex flex-row items-center justify-start gap-2 text-2xl text-white text-opacity-80 max-sm:justify-center max-sm:mx-auto">
                      <a href="https://www.instagram.com/pratyushsrivastavasgn/" target="_blank" rel="noreferrer" className="hover:rotate-12 transition-transform duration-200">
                        <FaInstagram />
                      </a>
                      <a href="https://www.linkedin.com/in/pratyush-srivastava-2b0480316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="hover:rotate-12 transition-transform duration-200">
                        <FaLinkedinIn />
                      </a>
                      <a href="https://github.com/Pratyushsrivastavasgn" target="_blank" rel="noreferrer" className="hover:rotate-12 transition-transform duration-200">
                        <FaGithub />
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </div>

                        {/* Corporate Domain */}
            <div className="domain-card-wrapper flex flex-col items-center justify-start gap-6">
              <h2 className="domain-title font-product-bungee text-2xl text-[#05c770] text-center">
                Corporate
              </h2>
              <div className="domain-images-wrapper flex flex-row gap-6 max-sm:gap-4">
                <div className="domain-lead-card-wrapper flex flex-col items-stretch justify-start gap-3 w-fit max-w-[280px] max-sm:max-w-[200px]">
                  <div className="domain-lead-picture-container relative border-2 border-white w-[280px] h-[370px] max-sm:w-[200px] max-sm:h-[260px] bg-gray-700">
                    {/* <div className="w-16 h-16 max-sm:w-12 max-sm:h-12 bg-gray-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div> */}
                      <Image
                      src="/team/amrita.jpg"
                      alt="Amrita Hariharan"
                      width={1500}
                      height={2100}
                      className="relative border-2 border-white -top-2 -left-2 hover:-top-1 hover:-left-1 transition-all w-full h-[370px]"
                      priority
                    />
                  </div>
                  <div className="domain-lead-card-details-wrapper max-sm:text-center">
                    <div className="flex flex-row items-start justify-between max-sm:flex-col max-sm:items-center max-sm:justify-center">
                      <div className="max-sm:text-center">
                        <h3 className="domain-lead__fullName-wrapper font-semibold text-white text-lg leading-tight">
                          Amrita Hariharan
                        </h3>
                      </div>
                    </div>
                    <div className="domain-lead__socialsWrapper w-fit h-auto mt-4 flex flex-row items-center justify-start gap-2 text-2xl text-white text-opacity-80 max-sm:justify-center max-sm:mx-auto">
                      <a href="https://www.instagram.com/amrita_hariharan_/" target="_blank" rel="noreferrer" className="hover:rotate-12 transition-transform duration-200">
                        <FaInstagram />
                      </a>
                      <a href="https://www.linkedin.com/in/amrita-hariharan2205/" target="_blank" rel="noreferrer" className="hover:rotate-12 transition-transform duration-200">
                        <FaLinkedinIn />
                      </a>
                    </div>

                  </div>
                </div>
                <div className="domain-lead-card-wrapper flex flex-col items-stretch justify-start gap-3 w-fit max-w-[280px] max-sm:max-w-[200px]">
                  <div className="domain-lead-picture-container relative border-2 border-white w-[280px] h-[370px] max-sm:w-[200px] max-sm:h-[260px] bg-gray-700">
                    {/* <div className="w-16 h-16 max-sm:w-12 max-sm:h-12 bg-gray-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div> */}
                      <Image
                      src="/team/ayush.jpg"
                      alt="Ayush Kumar"
                      width={1500}
                      height={2100}
                      className="relative border-2 border-white -top-2 -left-2 hover:-top-1 hover:-left-1 transition-all w-full h-[370px]"
                      priority
                    />
                  </div>
                  <div className="domain-lead-card-details-wrapper max-sm:text-center">
                    <div className="flex flex-row items-start justify-between max-sm:flex-col max-sm:items-center max-sm:justify-center">
                      <div className="max-sm:text-center">
                        <h3 className="domain-lead__fullName-wrapper font-semibold text-white text-lg leading-tight">
                          Ayush Kumar
                        </h3>
                      </div>
                    </div>
                    <div className="domain-lead__socialsWrapper w-fit h-auto mt-4 flex flex-row items-center justify-start gap-2 text-2xl text-white text-opacity-80 max-sm:justify-center max-sm:mx-auto">
                      <a href="https://www.instagram.com/ayushk._18/" target="_blank" rel="noreferrer" className="hover:rotate-12 transition-transform duration-200">
                        <FaInstagram />
                      </a>
                      <a href="#" target="_blank" rel="noreferrer" className="hover:rotate-12 transition-transform duration-200">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </React.Fragment>
  );
};

function FounderCard(
  {
    picture,
    fullName,
    isAvenger,
    directWebsite,
    socialProfile,
    description,
  }: TeamMemberCardType,
  props: any
) {
  return (
    <React.Fragment>
      <div
        className="founder-card-wrapper flex flex-col items-stretch justify-start gap-3 w-fit max-w-[280px]"
        {...props}
      >
        <div className="founder-picture-container relative border-2 border-white">
          <Image
            src={picture}
            alt="founder"
            width="280"
            height="370"
            className="relative border-2 border-white -top-2 -left-2 hover:-top-1 hover:-left-1 transition-all w-full h-[370px]"
            priority
          />
        </div>
        <div className="founder-card-details-wrapper">
          <div className="flex flex-row items-start justify-between">
            <div>
              <h2 className="founder__fullName-wrapper font-semibold text-white text-lg leading-tight">
                {fullName?.firstName + " " + fullName?.lastName}
              </h2>
              {directWebsite?.link && (
                <span className="founder__directWebsite-wrapper text-sm font-semibold text-white text-opacity-50 hover:text-opacity-60 leading-tight">
                  <a
                    href={directWebsite?.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {directWebsite?.label}
                  </a>
                </span>
              )}
            </div>
            {isAvenger && (
              <span className="avenger-founder-tag-wrapper font-product-bungee text-sm text-white">
                {"AVENGER"}
              </span>
            )}
          </div>
          <div className="founder__socialsWrapper w-fit h-auto mt-4 flex flex-row items-center justify-start gap-2 text-2xl text-white text-opacity-80">
            {socialProfile?.twitterUsername && (
              <a
                href={`https://twitter.com/${socialProfile?.twitterUsername}`}
                target="_blank"
                rel="noreferrer"
                className="hover:rotate-12 transition-transform duration-200"
              >
                <FaTwitter />
              </a>
            )}
            {socialProfile?.instagramUsername && (
              <a
                href={`https://instagram.com/${socialProfile?.instagramUsername}`}
                target="_blank"
                rel="noreferrer"
                className="hover:rotate-12 transition-transform duration-200"
              >
                <FaInstagram />
              </a>
            )}
            {socialProfile?.linkedInUsername && (
              <a
                href={`https://linkedin.com/in/${socialProfile?.linkedInUsername}`}
                target="_blank"
                rel="noreferrer"
                className="hover:rotate-12 transition-transform duration-200"
              >
                <FaLinkedinIn />
              </a>
            )}
            {socialProfile?.githubUsername && (
              <a
                href={`https://github.com/${socialProfile?.githubUsername}`}
                target="_blank"
                rel="noreferrer"
                className="hover:rotate-12 transition-transform duration-200"
              >
                <FaGithub />
              </a>
            )}
          </div>
          <p className="founder__description-wrapper mt-3 text-white font-semibold">
            {description}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AboutUs;
