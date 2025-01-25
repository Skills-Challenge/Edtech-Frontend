import ComponentHeader from '@/components/common/ComponentHeader';
import ChallengesContainer from '@/components/containers/ChallengesContainer';
import React from 'react'

const ChallengeHackathons = () => {
  return (
    <div className="py-6 px-9">
      <ComponentHeader
        heading="Challenges"
        subHeading="Join a challenge or a hackathon to gain valuable work experience,"
      />
      <ChallengesContainer/>
    </div>
  )
}

export default ChallengeHackathons;