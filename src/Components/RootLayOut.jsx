import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const RootLayOut = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default RootLayOut
