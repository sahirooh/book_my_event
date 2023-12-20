import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/" className="w-36">
          <h1 className="text-lg font-medium">
            <span className="text-red-500 font-semibold">B</span>ook
            <span className="text-red-500 font-semibold">M</span>y
            <span className="text-red-500 font-semibold">E</span>vent
          </h1>
        </Link>

        <p>2023 BookMyEvent. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
