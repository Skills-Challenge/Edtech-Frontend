import Breadcrumb from '@/components/common/BreadCrumps'
import ChallengeForm from '@/components/common/form/ChallengeForm'
import React from 'react'

const page = () => {
  return (
    <div>
        <Breadcrumb/>
        <div className='px-9 py-8'>
            <ChallengeForm/>
        </div>
    </div>
  )
}

export default page