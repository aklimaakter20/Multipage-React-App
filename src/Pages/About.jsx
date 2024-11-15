import React from 'react'
import Intro from '../Components/Intro'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <>

   <section>
    <div className="container mx-auto">
      <div className='md:flex items-center justify-around px-16 py-32'>
        <div className='w-[50%]'>
        <h2 className='text-2xl font-semibold'>About Skill bridge</h2>
        </div>
        <div className='w-[50%]'>
          <p className='text-xs leading-5 '>Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.</p>
        </div>
      </div>
      <div className='ml-16'>
        <h2 className='text-2xl font-semibold pb-2'>Achievements</h2>
        <p className='text-xs'>Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements</p>
      </div>
    </div>
   </section>

   
    </>
  )
}

export default About
