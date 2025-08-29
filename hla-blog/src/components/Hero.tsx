import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col gap-2 ">
      <p className="xl:text-4xl lg:text-3xl sm:text-2xl text-2xl  text-primary !font-pingarbold">
        {" "}
        Prompts Created with the <br /> Assistance of ChatGPT
      </p>
      <p className="xl:text-3xl lg:text-2xl text-lg text-secondary">
        This prompts was created by me, leveraging ChatGPT to refine and
        optimize it. It is designed to work effectively with ChatGPT’s image
        generation tool, ensuring the best results when creating AI-generated
        visuals.
      </p>
    </div>
  );
};

export default Hero;
