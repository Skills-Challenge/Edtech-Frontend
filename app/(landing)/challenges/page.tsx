import HomeChallengeCard from '@/components/common/HomeChallengeCard'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Challenges = () => {
  return (
    <div className='lg:p-16 md:p-10 p-8'>
      <Link href="/" className='flex items-center gap-2'>
        <Image src="/icon.svg" alt='icon' width={30} height={30} />
        <p className='text-[#667185]'>Go Back / </p>
        <span className='text-blue-600 hidden sm:block'>Challenges & Hackathons</span>
      </Link>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[26px] pt-[18px]">
        {[...Array(12)].map((_, idx) => (
          <HomeChallengeCard
            key={idx}
            title="Design a Dashboard for SokoFund for a Fintech Product"
            status="open"
            skills={["UI/UX Design", "User Research", "User Research"]}
            seniorityLevels={["Junior", "Intermediate", "Senior"]}
            timeline="10 days"
          />
        ))}
      </div>
    </div>
  )
}

export default Challenges