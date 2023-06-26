import React, { useEffect, useState } from 'react'
import { } from "react-icons"
import Navbar from './Navbar'
import Jobbox from "./Jobbox";
import { CiFilter } from 'react-icons/ci'
import { HiSelector } from "react-icons/hi";
const Jobpage = () => {

  const [data, setData] = useState()
  const [title, setTitle] = useState()
  const [place, setPlace] = useState("new york")
  const [date_posted, setDate_posted] = useState("")
  const [remote, setRemote] = useState("")
  const [empType, setEmpType] = useState("")
  const [reuire, setRequire] = useState("")
  const [loading, setLoading] = useState(true)
  //web%20developer%20in%20Texas%2C%20USA
  const url = `https://jsearch.p.rapidapi.com/search`
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0daa875fe5mshb660c4f7acadd44p15454djsnbb02356f9d46',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };
  useEffect(() => {
    fetch(`${url}?query=${title}${place}&page=1&date_posted=all&remote_jobs_only=false&employment_types=INTERN&job_requirements=no_experience`, options)
      .then(response => response.json())
      .then(response => setData(response))
  }, [title, place])
  // console.log(data);


  return (
    <>
      <Navbar />

      <div className="container mt-40 md:mt-48  w-full mx-auto">
        <div className="filters_query w-fit">
          <input type="text" placeholder='Select Title' className='px-4 w-[80%] h-12 my-2 border rounded-lg border-1 border-gray-300 outline-blue-500 ml-10' onKeyUp={(event) => setTitle(event.target.value)} />
          <div className='flex flex-row space-x-8 items-center justify-start'>
            <input type="text" placeholder='Select Location' onKeyUp={(event) => setPlace(event.target.value)} className='px-4 h-12 my-2 border rounded-lg border-1 border-gray-300 outline-blue-500 ml-10' />
            <HiSelector className='text-black' />
            <CiFilter className='text-black' />
          </div>
          {/* <button className='border border-2 border-yellow-800 w-fit mx-auto ml-20 items-center bg-blue-500' onClick={()=> setQuery()}>Search</button> */}
        </div>
        <div className="list ">
          <Jobbox jobs={data} />
        </div>
      </div>

    </>
  )
}

export default Jobpage