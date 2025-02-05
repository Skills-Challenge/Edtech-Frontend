import WelcomeBanner from '@/components/common/WelcomeBanner';
import RecentChallengesContainer from '@/components/containers/RecentChallengesContainer';
import React from 'react';
import ChallengesContainer from '../containers/ChallengesContainer';
interface IDashboardProps {
  children: React.ReactNode
}
const Dashboard = ({children}: IDashboardProps) => {
  return (
    <div className='py-6 px-9'>
      <WelcomeBanner/>
      {children}
      <ChallengesContainer showRecent/>
    </div>
  )
}

export default Dashboard;