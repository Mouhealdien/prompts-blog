import React, { useState } from "react";
import logo from "../assets/logo.png";
import blueCheck from "../assets/icons/blueCheck.png";
import loadingPlaceholder from "../assets/placeholder.png"; // your local placeholder
import { Link } from "react-router-dom";

type propsType = {
  prompt: {
    id: number;
    title: string;
    content: string;
    image: string;
  };
};

const Card = ({ prompt }: propsType) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Link to={prompt.title == "comming soon" ? "/" : `/prompt/${prompt.id}`}>
      <div
        key={prompt.id}
        className="bg-white border border-gray-200 shadow-sm px-4 py-3 rounded-[2.5rem] hover:-translate-y-1 transition duration-300"
      >
        <div className="relative w-full aspect-[540/628] rounded-t-lg overflow-hidden">
          {/* Show placeholder with spinner */}
          {!loaded && (
            <>
              <img
                src={loadingPlaceholder}
                alt="loading placeholder"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
              </div>
            </>
          )}

          {/* Real image */}
          {loaded && (
            <img
              src={prompt.image}
              alt=""
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          )}

          {/* Hidden preloader to detect when real image is ready */}
          {!loaded && (
            <img
              src={prompt.image}
              alt=""
              className="hidden"
              onLoad={() => setLoaded(true)}
            />
          )}
        </div>

        <div className="py-5 flex flex-row justify-between items-center ">
          <div className="flex flex-row items-center gap-2 ">
            <div className="relative ">
              <img className="w-12 rounded-full" src={logo} />
              <div className="w-12 relative">
                <img
                  className="w-4 absolute right-0 bottom-0 rounded-full"
                  src={blueCheck}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <p className="text-base text-primary !font-pingarbold">
                @hlaartworks
              </p>
              <p className="text-xs text-[#8f8e89]">Hla Nadeem</p>
            </div>
          </div>

          {prompt.title != "comming soon" && (
            <Link
              to={prompt.title == "comming soon" ? "/" : `/prompt/${prompt.id}`}
              className="items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg  hover:bg-transparent hover:border hover:border-primary hover:text-primary  transition duration-300"
            >
              Get prompt
            </Link>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Card;
