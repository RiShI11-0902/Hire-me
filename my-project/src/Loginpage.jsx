import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";


const Loginpage = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <>
    <div className='w-fit bg-[#fbe6e4] min-h-screen min-w-full mx-auto'>
      <p className='text-2xl pt-20 font-extrabold italic text-center first-letter:text-red-700'>Please Login First</p>  
       <p className='w-fit mx-auto'><button className='bg-blue-300 hover:bg-blue-400 mt-5 font-extrabold  text-2xl p-5 rounded-full' onClick={() => loginWithRedirect()}>LOG IN</button></p> 
    </div>
    </>
  )
}

export default Loginpage