import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import {turnicateText} from "./Turnicatetext"
import { BiLinkExternal } from "react-icons/bi";
import Jobdeatils from './Jobdeatils';


const jobbox = ({ jobs }) => {
  const turnicateText = (text) => {
    return text.substring(0, 40) + "..."
  }

  const navigate = useNavigate()

  const showDetail = (title,emp,country, city, type, publisher, currency, job_max_salary, link, description) => {
    navigate("/jobDetails", {state:{title: title,emp_name: emp,country:country,city:city,type:type,publisher:publisher,currency:currency,job_max_salary:job_max_salary,link:link,description:description}}) 
  }
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
            <button onClick={() => showDetail(i.job_title,i.employer_name,i.job_country,i.job_city,i.job_employment_type,i.job_publisher,i.job_salary_currency,i.job_max_salary,i.job_apply_link,i.job_description)} className="text-white mt-5 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              Details
            </button>
          </div>)
        }
      </div>
    </>
  )
}  
export default jobbox

