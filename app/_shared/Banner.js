import Image from "next/image";
import React from "react";
import banner from "../../public/banner/banner.png";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center px-8 py-8">
      <div className="space-y-3">
        <h1 className="text-5xl font-bold text-black ">
          Get Appointment <br /> Easy and Fast
        </h1>
        <p className="text-gray-500 mt-6">
          Consult specialized doctors online with the DocTime App,
          Bangladesh&apos;s leading video consultation, telemedicine, and
          healthcare provider in Bangladesh.
        </p>
        <div className="flex items-center gap-5 mt-10">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 cursor-pointer rounded">
            Appointment
          </button>
          <button className="text-blue-500 cursor-pointer font-bold py-2 px-4 rounded">
            Click Our Plan
          </button>
        </div>

        {/* social-icon */}
        <div className="flex items-center gap-5 mt-10">
          <FaFacebook className="text-blue-500 w-5 h-5 cursor-pointer" />
          <FaTwitter className="text-blue-500 w-5 h-5 cursor-pointer" />
          <FaInstagram className="text-blue-500 w-5 h-5 cursor-pointer" />
          <FaYoutube className="text-blue-500 w-5 h-5 cursor-pointer" />
        </div>
      </div>

      {/* banner image */}
      <div>
        <Image
          className=" bg-radial-[at_10%_20%] from-sky-200 to-90%]"
          src={banner}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
