"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="px-8 py-8 bg-white  ">
      <div className="flex justify-between items-center ">
        <div>
          <Link href="">
            <li className="list-none text-blue-500 text-xl">Logoipsum</li>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map((item, index) => (
            <ul key={index}>
              <Link href={item.path}>
                <li className="text-gray-500 font-medium">{item.title}</li>
              </Link>
            </ul>
          ))}
        </nav>
        <div className="hidden md:flex ">
          <button className="bg-blue-500 px-8 py-2 text-white rounded-md font-semibold">
            Let&apos;s Talk
          </button>
        </div>

        {menuOpen ? (
          <svg
            onClick={handleMenu}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 md:hidden cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            onClick={handleMenu}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 md:hidden cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </div>

      {/* mobile menu */}

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-5 z-10">
          {/* <div>
            <Link href="">
              <li className="list-none text-blue-500 text-xl">Logoipsum</li>
            </Link>
          </div> */}
          <nav className="flex flex-col space-y-3 mt-6 ">
            {navLinks.map((item, index) => (
              <ul key={index}>
                <Link href={item.path}>
                  <li className="text-gray-500 font-medium">{item.title}</li>
                </Link>
              </ul>
            ))}
          </nav>
          <div>
            <butto className="bg-blue-500 px-8 py-2 text-white rounded-md font-semibold">
              Let&apos;s Talk
            </butto>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
