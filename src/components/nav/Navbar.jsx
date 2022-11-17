import React from "react";
import Logo from "../../assets/images/logo.svg";
import { BsCheck2Square } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="nav-bg-img">
      <section className="container">
        <nav className="flex flex-wrap justify-around p-5 self-center">
          <div>
            <img src={Logo} alt="Logo" />
            <h2 className="text-3xl text-white font-medium">Links4u</h2>
          </div>
          <div className="nav-bar-items self-center">
            <ul className="flex flex-wrap gap-9">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Prices</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Sign In</a>
              </li>
            </ul>
          </div>
          <div className="self-center bg-[#1DA1F2] py-3 px-8 border-0 rounded-full">
            <button className="text-white text-lg font-medium">Sign Up</button>
          </div>
        </nav>
      </section>
      {/* Hero Section Starts Here-Now */}

      <section className="container flex flex-wrap justify-around mt-20 items-center md:p-0 sm:p-10">
        <div className="flex flex-col gap-11 self-start flex-wrap">
          <div className="max-w-[556px]">
            <h1 className="text-white md:text-6xl text-4xl font-bold">
              Search engines use links to crawl the web
            </h1>
          </div>
          <div className="max-w-[521px]">
            <p className="text-white text-xl font-medium ">
              They will crawl the links between the individual pages on your
              website, and they will crawl the links between entire websites
            </p>
          </div>
          <div className="">
            <button className="text-lg font-medium text-white bg-[#1DA1F2] py-2 px-6 border-0 rounded-full ">
              Learn More
            </button>
          </div>
        </div>

        <div className="bg-[#FFFFFF] max-w-[470px] min-h-[600px]   flex flex-col items-center gap-y-5 p-10 border-0 rounded-lg">
          <div className="max-w-[356px]">
            <h1 className="text-[42px] fotn-bold text-[#000000]">
              Sign Up Now
            </h1>
          </div>
          <div>
            <input
              type="text"
              className="
        form-control
        block
    
        px-3
        py-1.5
        text-lg
        italic
        font-normal
        text-[#EBEAED]
        bg-white bg-clip-padding
        border border-solid border-[#EBEAED]
        rounded-full
      
      "
              id="exampleFormControlInput1"
              placeholder="Your Full Name"
            />
          </div>
          <div>
            <input
              type="text"
              className="
        form-control
        block
    
        px-3
        py-1.5
        text-lg
        italic
        font-normal
        text-[#EBEAED]
        bg-white bg-clip-padding
        border border-solid border-[#EBEAED]
        rounded-full
      
      "
              id="exampleFormControlInput1"
              placeholder="Your Email"
            />
          </div>
          <div>
            <input
              type="password"
              className="
        form-control
        block
    
        px-3
        py-1.5
        text-lg
        italic
        font-normal
        text-[#EBEAED]
        bg-white bg-clip-padding
        border border-solid border-[#EBEAED]
        rounded-full
      
      "
              id="exampleFormControlInput1"
              placeholder="Your Password"
            />
          </div>
          <div className="flex self-center gap-3">
            <div className="self-center">
              <span>
                <BsCheck2Square />
              </span>
            </div>
            <div>
              <p className="text-gray-500 text-base font-normal">
                I agree to the Terms of Service.
              </p>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <button className="bg-[#18C967] text-white text-lg font-normal py-3 px-28 border-0 rounded-full">
                Sign In
              </button>
            </div>
            <div className="flex justify-center mb-4">
              <h3 className="text-gray-500 font-normal">or</h3>
            </div>
            <div>
              <button className="bg-[#1DA1F2] text-white text-lg font-normal py-3 px-28 border-0 rounded-full">
                Sign Up
              </button>
            </div>
          </div>
          <div>
            <h1 className="text-lg font-normal text-gray-500 ">
              Do you have alreay account?{" "}
              <span className="text-[#1DA1F2] solid">Sign In</span>
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
