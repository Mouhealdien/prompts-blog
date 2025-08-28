import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import promptsData from "../data/prompts.json";
import Card from "../components/Card";
const Home = () => {
  return (
    <div className="flex flex-col gap-3 ">
      <Header />
      <Hero />
      <div className=" flex flex-row justify-center pt-10 ">
        <div className="grid lg:grid-cols-3  md:grid-cols-2 gap-8 justify-items-center">
          {promptsData.prompts.map((prompt) => (
            <Card prompt={prompt} />
          ))}
          <Card
            prompt={{
              id: 100000,
              title: "comming soon",
              content: "comming soon",
              image:
                "https://imglink.io/i/d6244f1c-4d85-4b6e-8b84-a5c578843a2b.png",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
