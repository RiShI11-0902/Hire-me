import React, { useEffect, useState } from 'react'
import { } from "react-icons"
import Navbar from './Navbar'
import Jobbox from "./Jobbox";
import { CiFilter } from 'react-icons/ci'
import { HiSelector } from "react-icons/hi";
const Jobpage = () => {

  const [data, setData] = useState()
  const [title, setTitle] = useState("")
  const [place, setPlace] = useState("")
  const [date_posted, setDate_posted] = useState('all')
  // const [remote, setRemote] = useState("")
  // const [empType, setEmpType] = useState("")
  // const [require, setRequire] = useState("")
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(false)

  //web%20developer%20in%20Texas%2C%20USA
  const url = `https://jsearch.p.rapidapi.com/search`
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cb65993d82mshc5254081cf127ddp137628jsn9fb61531382e',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };
  // useEffect(() => {
  //   fetch(`${url}?query=${title}${place}&page=1&date_posted=${date_posted}&remote_jobs_only=false&employment_types=INTERN&job_requirements=no_experience`, options)
  //     .then(response => response.json())
  //     .then(response => setData(response)) 
  // }, [date_posted])
  console.log(data);
  const setQuery = () => {
    fetch(`${url}?query=${title}${place}&page=1&date_posted=${date_posted}&remote_jobs_only=false&employment_types=INTERN&job_requirements=no_experience`, options)
      .then(response => response.json())
      .then(response => setData(response))
  }
  console.log(title, place);
  const toggle = () => {
    setShow(show ? false : true)
    console.log(show);
  }

  const timeArray = ["all", "today", "3 days", "week", "month"]

  return (
    <>
      <Navbar />

      <div className="container mt-40 md:mt-48 relative w-full md:w-[50%]  mx-auto">
        <div className="filters_query  ">
          <input type="text" placeholder='Select Title' className='px-4 w-[8-%] md:w-[80%] h-12 my-2 border rounded-lg border-1 border-gray-300 outline-blue-500 ml-10 ' onKeyUp={(event) => setTitle(event.target.value)} />
          <div className='flex'>
            <input type="text" placeholder='Select Location' onKeyUp={(event) => setPlace(event.target.value)} className='px-4 h-12 my-2 border rounded-lg border-1  border-gray-300 outline-blue-500 ml-10' />
           
          </div>
          <button className='bg-[#ea7d75] p-3 mt-5 w-fit mx-auto  ml-10 font-semibold rounded-es-2xl' onClick={() => setQuery()}>Search</button>
        </div>
        <div className="list ">
          <Jobbox jobs={data} />
        </div>
      </div>

    </>
  )
}

export default Jobpage
