import HomeChallenges from '@/components/common/HomeChallenges';
import HomeCTA from '@/components/common/HomeCTA';
import HomeExperience from '@/components/common/HomeExperience';
import HomeGetStarted from '@/components/common/HomeGetStarted';
import HomeHero from '@/components/common/HomeHero';
import HomeProfits from '@/components/common/HomeProfits';
import HomeSkills from '@/components/common/HomeSkills';
import HomeStatistics from '@/components/common/HomeStatistics';
import HomeTestimonials from '@/components/common/HomeTestimonials';
import React from 'react'

const LandingPage = () => {
  return (
    <div>
      {/* <HomeNavbar /> */}
      <HomeHero />
      <HomeExperience />
      <HomeStatistics />
      <HomeSkills />
      <HomeChallenges />
      <HomeProfits />
      <HomeTestimonials />
      <HomeGetStarted />
      <HomeCTA />
      {/* <Footer /> */}
    </div>
  )
}

export default LandingPage;