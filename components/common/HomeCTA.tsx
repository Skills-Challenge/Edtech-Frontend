import React from 'react';
import ReusableBG from './ReusableBG';
import Image from 'next/image';
import Link from 'next/link';

const HomeCTA: React.FC = () => {
  return (
    <section className="lg:py-16 md:p-14 p-5 lg:px-28">
      <ReusableBG className="xl:py-10 px-5 xl:px-20 lg:px-10 py-5">
        <div className="flex flex-wrap lg:flex-nowrap xl:gap-24 gap-10 items-center justify-center">
          <Image
            src="/cta.png"
            alt="img"
            width={500}
            height={350}
            className="w-full lg:w-[500px] h-auto"
          />

          <div className="text-white flex flex-col gap-6 justify-center text-center lg:text-left">
            <h1 className="font-bold text-3xl md:text-4xl">
              Ready to Unlock Your Career Potential Today!
            </h1>
            <p className="text-sm md:text-base">
              Join a challenge or a hackathon to gain valuable work experience, 
              build an impressive portfolio, and increase your chances to land 
              job opportunities and accelerate your career growth.
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
    </section>
  );
};

export default HomeCTA;
