import React from 'react'
import { Link } from 'react-router-dom'
// import {turnicateText} from "./Turnicatetext"
const jobbox = ( { jobs }) => {
  const turnicateText = (text) => {
    return text.substring(0, 40) + "..."
  }
   const id = jobs?.parameters?.query
  return (
    <>
      <div className='p-5 mt-5'>
        { 
          jobs?.data?.map(i => <div key={i.job_id} className=' border mt-5 border2 border-black p-5'>
            <div className="top p-2 ">
              <p className='text-xl font-bold'>{i.job_title}</p>
              <p className='text-sm font-medium underline'> By : {i.employer_name}</p>
              {/* <img className='w-40' src={i.employer_logo} alt="Company logo" srcset="" /> */}
            </div>
            <div className="descr p-1">
              <span className='font-semibold'>Job Description:</span>   {turnicateText(i.job_description)}
            </div>
            <Link to={`/job/${id}`} type="button" className="text-white mt-5 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">View Details</Link>
          </div>)
        }
      </div>
      {/* //i => employer_name   job_country job_employment_type job_title job_publisher job_city job_apply_link
  */}

    </>
  )
}

export default jobbox