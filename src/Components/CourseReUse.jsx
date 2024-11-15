import React from 'react'

const CourseReUse = (props) => {
  return (
    <div>
      <section>
        <div className="container">
      
          <div>
            <div className='md:mx-12 my-5'>
                <img className='py-1' src={props.image} alt="" />
                <pre className='py-3 '>{props.time}</pre>
                <h3 className='py-2 font-semibold text-xl'>{props.heading}</h3>
                <p className='text-xs'>{props.des}</p>
                <button className='py-6 '>{props.btn}</button>
            </div>
          </div>
            
        </div>
      </section>
    </div>
  )
}

export default CourseReUse
