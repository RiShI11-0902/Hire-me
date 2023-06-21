import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BiLinkExternal } from "react-icons/bi";
import Navbar from './Navbar';
const Jobdeatils = () => {

  const [data, setData] = useState()

  const textEdit = (text) => {
    return text.includes("QUALIFICATIONS") ? "" : ""
  }
  // •

  const params = useParams()

  // console.log(params.id);

  const url = `https://jsearch.p.rapidapi.com/search?query=${params.id}&page=1&date_posted=all&remote_jobs_only=false&employment_types=INTERN&job_requirements=no_experience`

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c89334ff17msh32ab074cff7db3fp124129jsn65a99f4e0249',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetch(url, options).then(response => response.json())
      .then(response => setData(response))
  }, [params.id])
  // console.log(data); job_country job_employment_type job_title job_publisher job_city job_apply_link
  return (
    <>
      <Navbar />
      <div className='mt-20 md:mt-40'>
        {
          data?.data?.map(i => <div key={i.job_id} className='  mt-5  p-5'>
            <div className="top p-2 space-y-3">
              <p className='text-xl font-bold'>{i.job_title}</p>
              <p className='text-sm font-medium underline'> By : {i.employer_name}</p>
              <div className='grid grid-cols-2 gap-2 items-center justify-between'>
                <p className='md:text-xl'>Country: <span className=' md:text-lg font-bold'>{i.job_country}</span> </p>
                <p className='md:text-xl'>City: <span className=' md:text-lg font-bold'> {i.job_city}</span></p>
                <p className='md:text-xl'>Type: <span className=' md:text-lg font-bold'>{i.job_employment_type}</span> </p>
                <p className='md:text-xl'>Published by: <span className=' md:text-lg font-bold'> {i.job_publisher}</span></p>
                <p className='md:text-xl'>Salary: <span className=' md:text-lg font-bold'>{i.job_salary_currency} {i.job_max_salary}</span> </p>
              </div>
            </div>
            <a href={i.job_apply_link} target='_blank'>
              <p className='flex flow-row items-center mx-2 mt-3 text-blue-800'> Apply <BiLinkExternal className='ml-1' /> </p>
            </a>
            <div className="descr p-1 mt-5">
              <span className='font-semibold text-lg'>Job Description:</span> <p className='whitespace-pre-line mt-5'>{i.job_description}</p>
            </div>
            <a target='_blank' href={i.job_apply_link}>
              <button className=' w-fit mx-auto mt-5 font-extrabold inline-block rounded-full bg-neutral-50 px-6 pb-2 pt-2.5 text-xs uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]'>
                APPLY
              </button>
            </a>
          </div>)
        }
      </div>
    </>
  )
}

export default Jobdeatils