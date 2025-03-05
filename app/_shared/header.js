import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-8 bg-white">
      <div>
        <Link href="">
          <li className="list-none text-blue-500 text-xl">Logoipsum</li>
        </Link>
      </div>
      <ul className="flex items-center gap-5">
        <Link href="">
          <li className="text-gray-500 font-medium">Home</li>
        </Link>
        <Link href="">
          <li className="text-gray-500 font-medium">About Us</li>
        </Link>
        <Link href="">
          <li className="text-gray-500 font-medium">Our Services</li>
        </Link>
        <Link href="">
          <li className="text-gray-500 font-medium">How It Works</li>
        </Link>
        <Link href="">
          <li className="text-gray-500 font-medium">Contact Us</li>
        </Link>
      </ul>
      <div>
        <butto className="bg-blue-500 px-8 py-2 text-white rounded-md font-semibold">
          Let&apos;s Talk
        </butto>
      </div>
    </header>
  );
};

export default Header;
