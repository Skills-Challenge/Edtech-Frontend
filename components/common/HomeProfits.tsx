import Image from "next/image";
import React from "react";

const HomeProfits = () => {
  const data = [
    {
      icon: "/icons/icon1.svg",
      name: "Enhance Your Employment Path",
      description:
        "Network with other talented individuals and learn from their experiences",
    },
    {
      icon: "/icons/icon2.svg",
      name: "Earn Recognition and Prizes",
      description:
        "Gain valuable experience and knowledge to advance your career in the digital economy:",
    },
    {
      icon: "/icons/icon3.svg",
      name: "Personal Growth",
      description:
        "Challenge yourself, learn new skills, and expand your professional network. ",
    },
    {
      icon: "/icons/icon4.svg",
      name: "Learn from Industry Experts",
      description:
        "Access valuable insights and guidance from experienced professionals in the digital careers fields and spaces.",
    },
  ];

  return (
    <section className="xl:px-40 lg:px-38 md:px-16 px-5 text-[#03192E] md:mt-10">
      <div className="my-16">
        <h1 className="font-bold lg:text-4xl md:text-3xl text-2xl md:w-[60%] text-center mx-auto my-10">
          What else can I gain from participating in Skills Challenges ?
        </h1>
        <p className="md:w-[60%] text-center mx-auto text-sm md:text-medium lg:text-lg">
          Join Skills Challenges Program to accelerate your career growth and
          become part of Africa’s largest workforce of digital professionals.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row justify-between gap-10">
        <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-2 gap-5">
          {data.map((profit, index) => (
            <div className="flex flex-col items-center md:items-start gap-5" key={index}>
              <img src={profit.icon} alt="icon" />
              <h1 className="font-bold text-xl">{profit.name}</h1>
              <p className="text-[#687588]">{profit.description}</p>
            </div>
          ))}
        </div>
        <Image src="/banner_img1.png" alt="img" width={500} height={500} />
      </div>
    </section>
  );
};

export default HomeProfits;
