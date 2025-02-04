import React from "react";
import SectionHeader from "../common/SectionHeader";
import Image from "next/image";
import whatYouGet from "@/public/whatYouGet.png";
import { howCtaList } from "@/constants/data";

const HowCTA = () => {
  return (
    <section className="bg-[#F9FAFB] pt-[90px]">
      <div className="container">
        <SectionHeader
          heading="How Skills Challenges Program can Be Integrated into your Learning Institution"
          maxWidth="740px"
        />
        {/* list container */}
        <div className="pt-[71px] grid grid-cols-2 gap-5">
          <div className=" flex  flex-col lg:pl-20 pt-10 gap-6">
            {howCtaList.map((cta, index) => (
              <div className="flex items-center gap-6" key={index}>
                <div className="bg-primary min-h-[42px] min-w-[42px] rounded-full flex items-center justify-center">
                  <h2 className="text-[17px] leading-5 font-bold text-white">
                    {index + 1}
                  </h2>
                </div>
                <h2 className="text-[17.23px] leading-5 font-normal text-[#0E225A]">
                  {cta}
                </h2>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex justify-end">
            <Image src={whatYouGet} alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowCTA;
