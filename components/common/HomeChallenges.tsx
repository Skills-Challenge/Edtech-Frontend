import React from 'react'
import ChallengeCard from './ChallengeCard'
import Link from 'next/link'

const HomeChallenges = () => {
  return (
    <section className='flex flex-col items-center xl:p-52 lg:p-38 md:p-16 p-5 text-[#03192E] gap-2'>
      <h1 className='font-bold lg:text-4xl md:text-3xl text-2xl'>Explore Challenges & Hackathons </h1>
      <p className='md:w-[60%] text-center mx-auto text-sm md:text-medium lg:text-lg'>Join Skills Challenges Program to accelerate your career growth and become part of Africa’s largest workforce of digital professionals. </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[26px] pt-[18px]">
        {[...Array(3)].map((_, idx) => (
          <ChallengeCard
            key={idx}
            title="Design a Dashboard for SokoFund for a Fintech Product"
            status="open"
            skills={["UI/UX Design", "User Research", "User Research"]}
            seniorityLevels={["Junior", "Intermediate", "Senior"]}
            timeline="10 days"
          />
        ))}
      </div>
      <Link href="/challenges" className='border-2 border-primary py-2 px-10 rounded-md mt-5'>View More</Link>
    </section>
  )
}

export default HomeChallenges