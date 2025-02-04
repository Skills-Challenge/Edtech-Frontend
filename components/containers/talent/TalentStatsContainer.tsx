import React from "react";
import TalentStat from "./_partials/TalentStat";

const TalentStatsContainer = () => {
  
  return (
    <div className="grid grid-cols-3 gap-5 mt-[34px]">
      <TalentStat title="completed challenges" value="05" />
      <TalentStat title="open challenges" value="200" />
      <TalentStat title="ongoing challenges" value="200" />
    </div>
  );
};

export default TalentStatsContainer;
