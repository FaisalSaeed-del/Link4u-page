import React from "react";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const FinishLine = () => {
  return (
    <div className="bg-[#1DA1F2]">
      <section className="container">
        <div className="flex justify-around">
          <div className="max-w-[996px]">
            <p className="text-base text-white font-normal">
              Startup Framework contains components and complex blocks which can
              easily be integrated into almost any design.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="text-xl text-white">
              <BsTwitter />
            </div>
            <div className="text-xl text-white">
              <FaFacebookF />
            </div>
            <div className="text-xl text-white">
              <AiOutlineGoogle />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinishLine;
