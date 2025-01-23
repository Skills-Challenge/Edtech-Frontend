import WelcomeBanner from '@/components/common/WelcomeBanner';
import RecentChallengesContainer from '@/components/containers/RecentChallengesContainer';
import TalentStatsContainer from '@/components/containers/talent/TalentStatsContainer';
import React from 'react'

const Dashboard = () => {
  return (
    <div className='py-6 px-9'>
      <WelcomeBanner/>
      <TalentStatsContainer/>
      <RecentChallengesContainer/>
    </div>
  )
}

export default Dashboard;