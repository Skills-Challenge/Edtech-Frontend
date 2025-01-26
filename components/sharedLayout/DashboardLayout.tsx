import WelcomeBanner from '@/components/common/WelcomeBanner';
import RecentChallengesContainer from '@/components/containers/RecentChallengesContainer';
import TalentStatsContainer from '@/components/containers/talent/TalentStatsContainer';
import React from 'react'
import { useSelector } from 'react-redux';
interface IDashboardProps {
  children: React.ReactNode
}
const Dashboard = ({children}: IDashboardProps) => {
  return (
    <div className='py-6 px-9'>
      <WelcomeBanner/>
      {children}
      <RecentChallengesContainer/>
    </div>
  )
}

export default Dashboard;