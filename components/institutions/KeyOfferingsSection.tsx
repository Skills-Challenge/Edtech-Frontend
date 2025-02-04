import React from "react";
import ReusableGrid from "../reusable/ReusableGrid";
import { offeringsData } from "@/constants/data";

const KeyOfferingsSection = () => {
  return (
    <div className="py-16 lg:px-28 md:px-16 px-6 bg-[#F9FAFB]">
      <h1 className="text-black font-semibold text-center text-3xl mb-20">
        Key Offerings & Benefits:
      </h1>
      <ReusableGrid columns={3} rows={2} items={offeringsData} />
    </div>
  );
};

export default KeyOfferingsSection;
