import React from "react";
import { FcCallback } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const Contact = () => {
  return (
    <div>
      <section className="container mb-28">
        {/* <div className="py-10">
          <div className="flex m-auto max-w-[226px] mb-8">
            <h1 className="font-bold text-4xl text-black ">Contact Us</h1>
          </div>
          <div className="flex m-auto max-w-[586px]">
            <p className="text-xl font-normal text-black text-center">
              Startup Framework is free forever — you only pay for custom domain
              hosting or to export your site.
            </p>
          </div>
        </div> */}
        <div className="flex flex-wrap justify-around p-20 border-2 border-gray-300 rounded-3xl">
          <div className="">
            <div className="max-w-[362px] mb-4">
              <h1 className="text-4xl font-bold text-black">Drop Us a Line</h1>
            </div>
            <div className="max-w-[370px] mb-6">
              <p className="text-sm text-gray-400 font-light tracking-wider">
                We are always looking for a next great project{" "}
              </p>
            </div>
            <div className="mb-14">
              <label>E.mail</label>
              <input
                type="text"
                className="
        form-control
        block
        italic
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-full
       
      "
                id="exampleFormControlInput1"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-10">
              <label> Message</label>
              <textarea
                className="
        form-control
        block
        italic
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-lg
        
      "
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="">
              <label>Name</label>
              <input
                type="text"
                className="
        form-control
        block
        italic
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-full
       
      "
                id="exampleFormControlInput1"
                placeholder="Your Name"
              />
            </div>
          </div>
          <div>
            <div className="max-w-[362px] mb-6">
              <h1 className="text-black text-4xl font-bold">Get in Touch</h1>
            </div>
            <div className="max-w-[419px]">
              <p className="text-sm text-gray-400 font-light mb-6">
                We appreciate each customer and we are proud that 60% of clients
                come back to work with us again.
              </p>
            </div>
            <div className="flex gap-4 flex-wrap mb-3">
              <div className="self-center">
                <FcCallback />
              </div>
              <div>
                <span>+92-3008384002</span>
              </div>
            </div>

            <div className="flex gap-4 flex-wrap mb-12">
              <div className="self-center text-blue-400">
                <MdEmail />
              </div>
              <div>
                <span>mianfasi421@gmail.com</span>
              </div>
            </div>
            <div className="border-b-gray-400 border-2 mb-10"></div>
            <div>
              <div className="max-w-[363px] mb-6">
                <h1 className="text-lg font-medium ">We Are On Socials</h1>
              </div>
            </div>
            <div className="flex gap-6 mb-2">
              <div className="text-blue-400 self-center text-xl">
                <GrFacebookOption />
              </div>
              <div>
                <span>Facebook</span>
              </div>
            </div>
            <div className="flex gap-6 mb-3">
              <div className="text-blue-400 self-center text-xl">
                <AiOutlineInstagram />
              </div>
              <div>
                <span>Facebook</span>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-blue-400 self-center text-xl">
                <BsTwitter />
              </div>
              <div>
                <span>Facebook</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
