import React from "react";
import ReusableBG from "../reusable/ReusableBG";
import { Button } from "../ui/Button";

const InstitutionCTA = () => {
  return (
    <div className="py-16 container">
      <ReusableBG className="xl:py-20 px-5 xl:px-20 lg:px-10 py-5 rounded-[26px]">
        <div className="flex flex-col items-center justify-center gap-10">
          <h1 className="font-bold text-3xl md:text-4xl text-white lg:w-[70%] mx-auto text-center">
            Ready to transform your learning institution?
          </h1>
          <Button className="bg-white text-blue-600 w-fit px-8 py-5 rounded-md mx-auto lg:mx-0">
            Let&apos;s Partner
          </Button>
        </div>
      </ReusableBG>
    </div>
  );
};

export default InstitutionCTA;
