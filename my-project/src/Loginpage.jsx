import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";


const Loginpage = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <>
    <div className='w-fit mx-auto'>
        Please Login First
       <p className='w-fit mx-auto'><button className='bg-blue-500 text-2xl p-5 rounded-full' onClick={() => loginWithRedirect()}>Log In</button></p> 
    </div>
    </>
  )
}

export default Loginpage