import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full border-b ">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          {/* <Image src="/assets/images/logo.svg" alt="logo" width={128} height={36} /> */}
          <h1>
            <span className="text-red-500">B</span>ook
            <span className="text-red-500">M</span>y
            <span className="text-red-500">E</span>vent
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
