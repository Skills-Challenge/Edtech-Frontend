import WelcomeBanner from '@/components/common/WelcomeBanner';
import AdminStatsContainer from '@/components/containers/admin/AdminStatsContainer';
import RecentChallengesContainer from '@/components/containers/RecentChallengesContainer';
import React from 'react'

const Dashboard = () => {
  return (
    <div className='py-6 px-9'>
      <WelcomeBanner/>
      <AdminStatsContainer/>
      <RecentChallengesContainer/>
    </div>
  )
}

export default Dashboard;