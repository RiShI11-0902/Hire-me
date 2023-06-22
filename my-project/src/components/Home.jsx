import React from 'react'
import Navbar from './Navbar'
import { mainImg } from '../assets'
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="main-container bg-[#fbe6e4] w-full h-full min-w-full min-h-screen  flex flex-col-reverse md:flex-row md:justify-around items-center">
        <div className="title ">
          <p className=' p-5 mt-10 text-4xl text-[#040101]  leading-snug font-bold main-text'>Find Jobs From Across <br /> The World At One Place.</p>
          <button className='bg-[#ea7d75] p-5 ml-5 font-semibold rounded-es-2xl'>REGISTER NOW.</button>
        </div>
        <div className="imgBox mt-20">
          <img src={mainImg} alt="" srcset="" />
        </div>
      </div>
      <div className="comapnies min-w-full min-h-screen">
    COMAPNIES
      </div>
    </>
  )
}

export default Home