import { Briefcase, Globe, User } from "lucide-react";


const KeyOfferingsSection = () => {
  return (
    <div className="py-16 bg-[#F9FAFB]">
      <h1 className="text-black font-semibold text-center text-3xl mb-20">
        Key Offerings & Benefits:
      </h1>
      <div className="container">
        <div className="grid  md:gird-rows-2 lg:grid-cols-3 gap-6">
          <div className="p-12 bg-primary flex flex-col gap-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="bg-white w-[63px] h-[62px] flex items-center justify-center rounded-[5px]">
              <User className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">
              Bridging the Experience Gap
            </h3>
            <p className="text-white text-base">
              Many talents acquired theoretical knowledge and are rejected from
              jobs because they lack work experience and are not able to put in
              actions what they acquired in the schools.
            </p>
          </div>
          <div className="p-12 bg-primary flex flex-col gap-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="bg-white w-[63px] h-[62px] flex items-center justify-center rounded-[5px]">
              <Briefcase className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">
              Bridging Education and Employment
            </h3>
            <p className="text-white text-base">
              Traditional education doesnt’ always prepare talents for the
              demands of the tech and digital economy and we are providing
              in-demand skills through Skills Challenges.
            </p>
          </div>
          <div className="p-12 bg-primary flex flex-col gap-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="bg-white w-[63px] h-[62px] flex items-center justify-center rounded-[5px]">
              <Globe className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">
              Preparing Talents for Global Job Markets
            </h3>
            <p className="text-white text-base">
              We are ensuring that African talents shine globally and that’s why
              we are equipping them with global technical experience and
              shandout globally.
            </p>
          </div>
          <div className="p-12 bg-primary flex flex-col gap-6 rounded-lg shadow hover:shadow-lg transition lg:col-span-2">
            <div className="bg-white w-[63px] h-[62px] flex items-center justify-center rounded-[5px]">
              <Globe className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">
              Preparing Talents for Global Job Markets
            </h3>
            <p className="text-white text-base">
              We are ensuring that African talents shine globally and that’s why
              we are equipping them with global technical experience and
              shandout globally.
            </p>
          </div>
          <div className="p-12 bg-primary flex flex-col gap-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="bg-white w-[63px] h-[62px] flex items-center justify-center rounded-[5px]">
              <Globe className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">
              Preparing Talents for Global Job Markets
            </h3>
            <p className="text-white text-base">
              We are ensuring that African talents shine globally and that’s why
              we are equipping them with global technical experience and
              shandout globally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyOfferingsSection;
