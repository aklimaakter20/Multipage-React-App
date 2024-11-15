import React from 'react'

const CardReUse = (props) => {
  return (
    <div>
      <div className='px-6 py-20 relative '>
        <h1 className='absolute right-40 top-3 text-3xl font-bold pb-2'>{props.head}</h1>
        <h5 className='text-xl font-semibold pb-1'>{props.heading}</h5>
        <p className='text-xs w-[70%] text-[#4C4C4D]'>{props.des}</p>
        <img className='absolute right-36 bottom-5 w-5' src={props.image} alt="" />
      </div>
    </div>
  )
}

export default CardReUse
