import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
const Jobdeatils = () => {
    
    const [data, setData] = useState()


    const params = useParams()

    const url = `https://jsearch.p.rapidapi.com/search?query=${params.id}&page=1&date_posted=all&remote_jobs_only=false&employment_types=INTERN&job_requirements=no_experience`

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c89334ff17msh32ab074cff7db3fp124129jsn65a99f4e0249',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      }
    };
  
    useEffect(() => {
      fetch(url, options).then(  response   => response.json())
        .then( response  => setData(response))
    }, [params.id])
    console.log(data);
  return (
    <>
    {
         data?.data?.map(i => <div className=' border mt-5 border2 border-black p-5'>
         <div className="top p-2 ">
           <p className='text-xl font-bold'>{i.job_title}</p>
           <p className='text-sm font-medium underline'> By : {i.employer_name}</p>
           {/* <img className='w-40' src={i.employer_logo} alt="Company logo" srcset="" /> */}
         </div>
         <div className="descr p-1">
           <span className='font-semibold'>Job Description:</span>   {turnicateText(i.job_description)}
         </div>
         <Link to={`/job/${i.job_id}`} type="button" className="text-white mt-5 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">View Details</Link>
       </div>)
    }
    </>
  )
}

export default Jobdeatils