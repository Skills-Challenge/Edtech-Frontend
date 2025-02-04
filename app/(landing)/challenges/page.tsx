"use client"
import ChallengeCard from '@/components/common/ChallengeCard'
import { useAppSelector } from '@/store/store'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Challenges = () => {
  const { challenges } = useAppSelector((state) => state.challenges)
  return (
    <div className='lg:p-16 md:p-10 p-8'>
      <Link href="/" className='flex items-center gap-2'>
        <Image src="/icon.svg" alt='icon' width={30} height={30} />
        <p className='text-[#667185]'>Go Back / </p>
        <span className='text-blue-600 hidden sm:block'>Challenges & Hackathons</span>
      </Link>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[26px] pt-[18px]">
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
    </div>
  )
}

export default Challenges