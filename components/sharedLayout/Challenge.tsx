import React from 'react'
import ComponentHeader from '../common/ComponentHeader'
import ChallengesContainer from '../containers/ChallengesContainer'

const Challenge = () => {
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

export default Challenge