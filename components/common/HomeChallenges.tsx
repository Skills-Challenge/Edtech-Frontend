import React from 'react'
import ChallengeCard from './ChallengeCard'
import Link from 'next/link'
import { useAppSelector } from '@/store/store'

const HomeChallenges = () => {
  const { challenges } = useAppSelector((state) => state.challenges)
  return (
    <section className='flex flex-col items-center xl:px-52 lg:px-38 md:px-16 px-5 text-[#03192E] gap-2 md:mt-10'>
      <h1 className='font-bold lg:text-4xl md:text-3xl text-2xl'>Explore Challenges & Hackathons </h1>
      <p className='md:w-[60%] text-center mx-auto text-sm md:text-medium lg:text-lg'>Join Skills Challenges Program to accelerate your career growth and become part of Africa’s largest workforce of digital professionals. </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[26px] pt-[18px]">
      {challenges.map((challenge) => (
           <ChallengeCard
           key={challenge._id}
           _id={challenge._id}
           title={challenge.title}
           status={challenge.status}
           skills={["UI/UX Design", "User Research", "User Research"]}
           seniorityLevels={["Junior", "Intermediate", "Senior"]}
           timeline={challenge.duration}
         />
        ))}
      </div>
      <Link href="/challenges" className='border-2 border-blue-600 py-2 px-10 rounded-md mt-5 text-blue-600'>View More</Link>
    </section>
  )
}

export default HomeChallenges