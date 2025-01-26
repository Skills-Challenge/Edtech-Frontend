import React, { ReactNode } from "react";

type props = {
  children: ReactNode;
};
const layout = ({ children }: props) => {
  return (
    <div className="flex justify-center items-center bg-body h-screen">
      <div className="w-[90%] sm:w-[80%] md:w-[30%] bg-white rounded-xl border border-border">
        {children}
      </div>
    </div>
  );
};

export default layout;
