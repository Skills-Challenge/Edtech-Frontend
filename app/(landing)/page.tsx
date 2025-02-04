import HomeChallenges from '@/components/common/HomeChallenges';
import HomeCTA from '@/components/common/HomeCTA';
import HomeExperience from '@/components/common/HomeExperience';
import HomeGetStarted from '@/components/common/HomeGetStarted';
import HomeHero from '@/components/common/HomeHero';
import HomeSkills from '@/components/common/HomeSkills';
import HomeStatistics from '@/components/common/HomeStatistics';
import { TestimonialSlider } from '@/components/common/HomeTestimonials';
import WhatWeOffer from '@/components/home/WhatWeOffer';


const LandingPage = () => {
  return (
    <div>
      <HomeHero />
      <HomeExperience />
      <HomeStatistics />
      <HomeSkills />
      <HomeChallenges />
      <WhatWeOffer/>
      <TestimonialSlider  />
      <HomeGetStarted />
      <HomeCTA />
    </div>
  )
}

export default LandingPage;