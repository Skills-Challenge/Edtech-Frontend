import React from "react";
import Image from "next/image";
import Link from "next/link";
import ReusableBG from "../reusable/ReusableBG";
import ctaImage from "@/public/cta.png"

const HomeCTA: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container">
        <ReusableBG className="xl:py-10 px-5 xl:px-20 lg:px-10 py-5">
          <div className="flex flex-wrap lg:flex-nowrap xl:gap-24 gap-10 items-center justify-center">
            <Image
              src={ctaImage}
              alt="img"
            />

            <div className="text-white flex flex-col gap-6 justify-center text-center lg:text-left">
              <h1 className="font-bold text-3xl md:text-4xl">
                Ready to Unlock Your Career Potential Today!
              </h1>
              <p className="text-sm md:text-base">
                Join a challenge or a hackathon to gain valuable work
                experience, build an impressive portfolio, and increase your
                chances to land job opportunities and accelerate your career
                growth.
              </p>
              <Link
                href="/challenges"
                className="bg-white text-blue-600 w-fit px-8 py-2 rounded-md mx-auto lg:mx-0"
              >
                View Challenges
              </Link>
            </div>
          </div>
        </ReusableBG>
      </div>
    </section>
  );
};

export default HomeCTA;
