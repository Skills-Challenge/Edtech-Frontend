import React from "react";
import SectionHeader from "../common/SectionHeader";
import { whatweoffer } from "@/data/data";
import WhatWeOfferCard from "./WhatWeOfferCard";
import Image from "next/image";
import whatYouGet from "@/public/whatYouGet.png";

const WhatWeOffer = () => {
  return (
    <section className="bg-[#F9FAFB]">
      <div className="container py-[76px]">
        <SectionHeader
          heading="What else can I gain from participating in Skills Challenges ?"
          subheading="Join Skills Challenges Program to accelerate your career growth and become part of Africa’s largest workforce of digital professionals. "
          maxWidth="695px"
        />
        {/* section */}
        <div className="grid lg:grid-cols-2 gap-9 pt-10">
          <div className="grid md:grid-cols-2 gap-6 lg:place-items-center">
            {whatweoffer.map((item, index) => (
              <WhatWeOfferCard
                Icon={item.icon}
                title={item.title}
                desc={item.desc}
                key={index}
              />
            ))}
          </div>
          <div className="hidden lg:flex justify-end">
            <Image src={whatYouGet} alt="image"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
