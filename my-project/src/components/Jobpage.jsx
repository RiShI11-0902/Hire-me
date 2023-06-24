import React, { useEffect, useState } from 'react'
import { } from "react-icons"
import Navbar from './Navbar'
import Jobbox from "./Jobbox";
import { CiFilter } from 'react-icons/ci'
import { HiSelector } from "react-icons/hi";
const Jobpage = () => {

  const [data, setData] = useState()
  const [title, setTitle] = useState("marketing manager")
  const [place, setPlace] = useState("new york")
  const [date_posted, setDate_posted] = useState("")
  const [remote, setRemote] = useState("")
  const [empType, setEmpType] = useState("")
  const [reuire, setRequire] = useState("")
  const [loading, setLoading] = useState(true)
  //web%20developer%20in%20Texas%2C%20USA
  const url = `https://jsearch.p.rapidapi.com/search?query=${title} ${place}&page=1&date_posted=all&remote_jobs_only=false&employment_types=INTERN&job_requirements=no_experience`

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0daa875fe5mshb660c4f7acadd44p15454djsnbb02356f9d46',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };
  console.log(data);
  useEffect(() => {
    fetch(url, options).then(response => response.json())
      .then(response => setData(response))
  }, [])

  
  // const name = `${title} ${place}`
  // console.log(name);

  return (
    <>
      <Navbar />

      <div className="container mt-40 md:mt-48  w-full mx-auto">
        <div className="filters_query">
          <input type="text" placeholder='Select Title' className='px-4 w-[80%] h-12 my-2 border rounded-lg border-1 border-gray-300 outline-blue-500 ml-10' />
          <div className='flex flex-row space-x-8 items-center justify-start'>
            <input type="text" placeholder='Select Location' className='px-4 h-12 my-2 border rounded-lg border-1 border-gray-300 outline-blue-500 ml-10' />
            <HiSelector className='text-black' />
            <CiFilter className='text-black' />
          </div>
        </div>
        <div className="list ">
          <Jobbox  jobs={data} />
        </div>
      </div>

    </>
  )
}

export default Jobpage