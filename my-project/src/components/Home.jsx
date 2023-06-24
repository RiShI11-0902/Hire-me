import React, { useState } from 'react'
import Navbar from './Navbar'
import { mainImg, img2, tanya, next, prev, john } from '../assets'
const Home = () => {
  const [img, setImg] = useState(tanya)
  const [text, setText] = useState(` I was struggling for many months but then, I got my dream job through Hire Me. I Would highly recommend this.`)
  const [name, setName] = useState("TANYA SNICLAIR")
  const [title, setTitle] = useState("DEVELOPER at ADOBE")
  const chngimg = () => {
    img == tanya ? setImg(john) || setText("I am grateful to Hire me. for giving me the opportunity to work for any company in the world") || setName("JOHN PARK") || setTitle("DATA ANALYST at GOOGLE") : setImg(tanya) || setText(" I was struggling for many months but then, I got my dream job through Hire Me. I Would highly recommend this.") || setName("TANYA SNICLAIR") || setTitle("DEVELOER at ADOBE")

   
  }
  return (
    <>
      <Navbar />
      <div className="main-container bg-[#fbe6e4] w-full h-full min-w-full min-h-screen  flex flex-col-reverse md:flex-row md:justify-around items-center pb-5">
        <div className="title ">
          <p className=' p-5 mt-10 text-4xl text-[#040101]  leading-snug font-bold main-text'>Find Jobs From Across <br /> The World At One Place.</p>
          <button className='bg-[#ea7d75] p-5 ml-5 font-semibold rounded-es-2xl'>REGISTER NOW.</button>
        </div>
        <div className="imgBox mt-20">
          <img src={img2} alt="" srcset="" />
        </div>
      </div>
      <div className="comapnies bg-[#fbe6e4] min-w-full min-h-screen ">
        <div className="top">
          <p className='font-extrabold text-3xl tracking-wide text-[#040101] text-center pt-5'>SEARCH YOUR DREAM <span className='md:text-6xl text-4xl italic'>JOB</span>  FROM ALL TOP SITES AVALIABLE</p>
        </div>
        <div className="below grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-5 mx-auto  mt-10 md:mt-24 w-fit">
          <div className="box bg-[#ee928c] p-5 md:p-10 rounded-full md:text-lg text-center font-bold">LinkedIn</div>
          <div className="box bg-[#ee928c] p-5 md:p-10 rounded-full md:text-lg text-center font-bold">Indeed</div>
          <div className="box bg-[#ee928c] p-5 md:p-10 rounded-full md:text-lg text-center font-bold">Glassdoor</div>
          <div className="box bg-[#ee928c] p-5 md:p-10 rounded-full md:text-lg text-center font-bold">ZipRecruiter</div>
          <div className="box bg-[#ee928c] p-5 md:p-10 rounded-full md:text-lg text-center font-bold">BeBee</div>
        </div>
        <p className='text-[#040101] p-5 text-center mt-20 font-bold text-2xl'>
          You are just one click away from your dream job...
        </p>
        <button className='text-[#040101] hover:text-white border border-[#fbe6e4] hover:bg-[#ee928c] focus:ring-4 focus:outline-none focus:ring-[#fbe6e4] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 p-5 w-fit mx-auto ml-[7rem] md:ml-[45em] mt-5'>CLICK ME</button>
      </div>
      <div className="testimonials bg-[#fbe6e4] pt-20">
        <div className="list">
          <div className="box1 ">
            <div className='top p-10 bg-[url("src/assets/pattern-bg.svg")] bg-no-repeat bg-cover w-full h-full'>
              <img src={img} alt="" srcset="" />
            </div>
            <div className="middle flex mx-auto bg-white p-2 rounded-full w-fit space-x-10">
              <img onClick={chngimg} src={prev} alt="" srcset="" />
              <img onClick={chngimg} src={next} alt="" srcset="" />
            </div>
            <div className="down p-5 ">
              <p className='text-center text-base font-semibold'>
               {text}
              </p>
              <p className='text-center mt-5 font-bold'>{name} <p className='mt-2
font-light'>{title}</p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home