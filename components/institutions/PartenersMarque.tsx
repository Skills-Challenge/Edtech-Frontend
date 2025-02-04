import React from "react";
import Marquee from "react-fast-marquee";
import SectionHeader from "../common/SectionHeader";
import Image from "next/image";
import { institutionParteners } from "@/constants/data";

const PartenersMarque = () => {
  return (
    <div className="lg:px-24">
      <div className="flex flex-col gap-12">
        <SectionHeader
          heading="
          Join a few Educational Institutions using Skills Challenges by Umurava"
          maxWidth="812px"
        />
        <div className="flex flex-col gap-12">
          <Marquee pauseOnHover speed={30} className="gap-5 justify-between">
            {institutionParteners.slice(0, 6).map((inst, idx) => (
              <Image
                key={idx}
                alt="partener"
                src={inst.institution}
                height={67}
                className="object-contain w-fit"
              />
            ))}
          </Marquee>
          <Marquee
            pauseOnHover
            speed={30}
            loop={0}
            direction="right"
            className="gap-5 w-full justify-between"
          >
            {institutionParteners.slice(7).map((inst, idx) => (
              <Image
                key={idx}
                alt="partener"
                src={inst.institution}
                height={67}
                className="object-contain w-fit"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default PartenersMarque;
