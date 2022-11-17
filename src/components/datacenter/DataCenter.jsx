import React from "react";
import Data from "../../assets/images/data.jpg";
const DataCenter = () => {
  return (
    <div>
      <section className="container">
        <div className="max-w-[874px] py-24 px-20">
          <h1 className="md:text-4xl text-2xl  font-bold text-[#000000] leading-relaxed">
            Link building is the process of acquiring hyperlinks from other
            websites to your own
          </h1>
        </div>
        <div className="flex flex-wrap">
          <div className="flex flex-col gap-5 px-20 ">
            <div className="max-w-[623px]">
              <p className="md:text-xl text-base text-gray-400 font-medium">
                A hyperlink (usually just called a link) is a way for users to
                navigate between pages on the Internet. Search engines use links
                to crawl the web. They will crawl the links between the
                individual pages on your website, and they will crawl the links
                between entire websites
              </p>
            </div>
            <div className="max-w-[623px] mb-10">
              <p className="md:text-xl text-base text-gray-400 font-medium">
                Once search engines have crawled pages on the web, they can
                extract the content of those pages and add it to their indexes.
                In this way, they can decide if they feel a page is of
                sufficient quality to be ranked well for relevant keywords.
              </p>
            </div>
            <div className="">
              <button className="bg-[#1DA1F2] text-lg font-medium py-2 px-10 border-0 rounded-full text-white">
                Learn More
              </button>
            </div>
          </div>
          <div className="data-img">
            <img src={Data} alt="Data Center" className="vert-move" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataCenter;
