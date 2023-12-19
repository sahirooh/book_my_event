import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b ">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          {/* <Image src="/assets/images/logo.svg" alt="logo" width={128} height={36} /> */}
          <h1 className="text-lg font-medium">
            <span className="text-red-500 font-semibold">B</span>ook
            <span className="text-red-500 font-semibold">M</span>y
            <span className="text-red-500 font-semibold">E</span>vent
          </h1>
        </Link>

        <SignedIn>
          <nav className="md:flex md:justify-between md:items-center hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
