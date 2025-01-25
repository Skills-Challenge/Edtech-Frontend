import React, { FC } from 'react'

type props ={
    text:string
}
const ListHeader:FC<props> = ({text}) => {
  return (
    <h2 className='text-[20px] font-semibold'>{text}</h2>
  )
}

export default ListHeader