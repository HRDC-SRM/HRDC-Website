// Basic Imports
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useRouter } from "next/router";

// Components Imports
import Button from "@/components/ui-patterns/Button";
import NavbarOptionsData from "./navbar-options.json";

// Types Imports
import { NavbarOptionType } from "@/types/navbar-option-type";

const Navbar: React.FunctionComponent<NavbarOptionType> = () => {
  const navbarOptionsRef = useRef<Array<NavbarOptionType>>(NavbarOptionsData);
  const router = useRouter();
  const isAboutUsPage = router.pathname === "/aboutUs";
  const isDomainsPage = router.pathname === "/domains";

  return (
    <div className="navbar wrapped-view py-8 flex flex-row items-center justify-between max-sm:pt-8 pb-2">
      <div className="flex flex-row items-center justify-start gap-8">
        <span className="navbar-logo-wrapper flex flex-row items-center justify-center w-fit h-fit gap-2 max-sm:pl-2">
          <Link href="/">
            <Image
              src="/hackerrank-logo.svg"
              alt="hrdc"
              width="50"
              height="50"
              priority
            />
          </Link>
        </span>
        <span className="navbar-options-wrapper flex flex-row items-center justify-start gap-4 max-sm:hidden">
          {navbarOptionsRef.current?.map(
            (navbarOption: NavbarOptionType, navbarOptionIndex: number) => (
              <Link href={navbarOption?.path} key={navbarOptionIndex}>
                <span className="navbar-option-text font-bold text-gray-300">
                  {navbarOption?.label}
                </span>
              </Link>
            )
          )}
        </span>
      </div>
      <div className="flex flex-row items-center justify-end gap-8 max-sm:mx-4">
        <Link
          href={isAboutUsPage ? "/" : "/aboutUs"}
        >
          <span className="avengers-text-wrapper text-product-gradient brightness-110 hover:brightness-105 max-sm:hidden">
            {isAboutUsPage ? (
              <span className="font-product-bungee font-bold">{"HOME"}</span>
            ) : (
              <>
                <span className="font-product-manrope font-semibold">{"meet"}</span>
                <span className="font-product-bungee">{" the team"}</span>
              </>
            )}
          </span>
        </Link>
        {isDomainsPage ? (
          <Link href="/">
            <Button type="secondary" shade="#1BA94C">{"HOME"}</Button>
          </Link>
        ) : (
          <Link href="/events">
            <Button type="secondary" shade="#1BA94C">{"Events"}</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
