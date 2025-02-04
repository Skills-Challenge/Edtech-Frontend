import React from 'react'
import ReusableHero from '../reusable/ReusableHero'
import aboutImage from "@/public/about-img2.png"
import Image from 'next/image'

const AboutInfo = () => {
  return (
    <div className="container py-[76px]">
    <ReusableHero
      media={
        <div className="w-full flex items-center justify-end">
          <Image
            src={aboutImage}
            alt="img"
            className="rounded-lg"
          />
        </div>
      }
      title="Skills Challenges Program is built on the Umurava Talent Marketplace Platform "
      paragraph1="A Project-based Learning Solution aimed at providing young and senior talents with an opportunity to showcase their skills to real-world projects and challenges from our partner companies and organizations."
      paragraph2="Umurava Skills Challenges enables young talents to build a portfolio and experience that increases their readiness to access job opportunities and projects."
      buttonText="Get Started"
      colored={false}
      width="592px"
    />
  </div>
  )
}

export default AboutInfo