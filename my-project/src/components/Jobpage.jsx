import React, { useEffect, useState } from 'react'
import { } from "react-icons"
import Navbar from './Navbar'
import Jobbox from "./Jobbox";
import { CiFilter } from 'react-icons/ci'
import { HiSelector } from "react-icons/hi";
const Jobpage = () => {

  const [data, setData] = useState()
  const [title, setTitle] = useState("python developer")
  const [place, setPlace] = useState("texas usa")
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
      'X-RapidAPI-Key': 'c89334ff17msh32ab074cff7db3fp124129jsn65a99f4e0249',
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

      <div className="container mt-40  w-full mx-auto">
        <div className="filters_query">
          <input type="text" placeholder='Select Title' className='px-4 w-[80%] h-12 my-2 border rounded-lg border-1 border-gray-300 outline-blue-500 ml-10' />
          <div className='flex flex-row space-x-8 items-center justify-start'>
            <input type="text" placeholder='Select Location' className='px-4 h-12 my-2 border rounded-lg border-1 border-gray-300 outline-blue-500 ml-10' />
            <HiSelector className='' />
            <CiFilter className='' />
          </div>
        </div>
        <div className="list">
          <Jobbox  jobs={data} />
        </div>
      </div>

    </>
  )
}

export default Jobpage