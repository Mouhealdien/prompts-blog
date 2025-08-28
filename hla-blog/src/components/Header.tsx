import React from "react";
import logo from "../assets/logo.jpg";
import blueCheck from "../assets/icons/blueCheck.png";
const Header = () => {
  return (
    <div>
      <div className="flex flex-row items-center gap-2">
        <div className="relative ">
          <img className="md:w-36 w-28 rounded-full" src={logo} />
          <div className="md:w-36 w-28 relative">
            <img
              className="md:w-8 w-6 absolute right-1 bottom-2 rounded-full"
              src={blueCheck}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2  ">
          <p className=" md:text-4xl text-xl text-primary !font-pingarbold">
            @hlaartworks
          </p>
          <p className="md:text-3xl text-xl text-[#8f8e89]">
            {" "}
            Hla Nadeem / Architect & Artist
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
