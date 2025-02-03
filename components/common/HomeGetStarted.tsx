import Image from 'next/image';
import React from 'react';

const HomeGetStarted = () => {
  return (
    <section className="xl:px-40 lg:px-38 md:px-16 px-5 text-[#03192E] md:mt-10 bg-[#F9FAFB] py-16">
      <h1 className="font-bold lg:text-4xl md:text-3xl text-2xl md:w-[60%] text-center mx-auto my-10">
        How to Get Started
      </h1>
      
      <div className="grid md:grid-flow-col md:grid-cols-2 md:grid-rows-6 gap-10">
        {/* Step 1 */}
        <div className="row-span-3 bg-white rounded-lg flex flex-col p-10 relative shadow-md">
          <p className="bg-primary px-3 py-1 rounded-md text-white w-fit mb-3">Step 1</p>
          <h1 className="font-bold text-xl mb-2">Sign up on Umurava Platform</h1>
          <p>Submit your completed project for evaluation.</p>
          <Image src="/img1.png" alt="img" width={100} height={100} className="absolute bottom-3 right-3 w-[80px] md:w-[100px]" />
        </div>

        {/* Step 2 */}
        <div className="row-span-3 bg-white rounded-lg flex flex-col p-10 relative shadow-md">
          <p className="bg-primary px-3 py-1 rounded-md text-white w-fit mb-3">Step 2</p>
          <h1 className="font-bold text-xl mb-2">Browse Open Challenges</h1>
          <p>Explore the range of challenges and hackathons and choose one that aligns with your interests and career goals.</p>
          <Image src="/img2.png" alt="img" width={100} height={100} className="absolute bottom-3 right-3 w-[80px] md:w-[100px]" />
        </div>

        {/* Step 3 */}
        <div className="row-span-2 bg-white rounded-lg flex flex-col p-10 relative shadow-md">
          <p className="bg-primary px-3 py-1 rounded-md text-white w-fit mb-3">Step 3</p>
          <h1 className="font-bold text-xl mb-2">Register and Participate</h1>
          <p>Sign up for the challenge and start working on the project.</p>
        </div>

        {/* Step 4 */}
        <div className="row-span-2 bg-white rounded-lg flex flex-col p-10 relative shadow-md">
          <p className="bg-primary px-3 py-1 rounded-md text-white w-fit mb-3">Step 4</p>
          <h1 className="font-bold text-xl mb-2">Submit your work</h1>
          <p>Submit your completed project for evaluation.</p>
        </div>

        {/* Step 5 */}
        <div className="row-span-2 bg-white rounded-lg flex flex-col p-10 relative shadow-md">
          <p className="bg-primary px-3 py-1 rounded-md text-white w-fit mb-3">Step 5</p>
          <h1 className="font-bold text-xl mb-2">Receive Feedback and Recognition</h1>
          <p>Get feedback on your work and celebrate your achievements.</p>
        </div>
      </div>
    </section>
  );
};

export default HomeGetStarted;
