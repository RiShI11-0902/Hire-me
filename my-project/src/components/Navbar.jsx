import React, { useState } from 'react'
import { motion } from "framer-motion"
import { GiHamburgerMenu } from "react-icons/gi"
import { GrClose } from "react-icons/gr"
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [toggle, setToggle] = useState(true)
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <>
      <div className="navbar  top-10 flex items-center left-10 space-x-10 md:space-x-40 w-fit absolute z-10 justify-between  mx-auto">
        <div className="left">
          <div className="logo w-36 text-2xl font-extrabold md:text-5xl text-[#ee928c]">
              HIRE ME.
          </div>
        </div>
        <div>
          <ul className="sm:flex space-x-5  cursor-pointer font-bold hidden md:space-x-10 md:flex md:flex-row ">
            <li  >HOME</li>
            {
              isAuthenticated ? <li><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                LOG OUT
              </button></li> : <li><button onClick={() => loginWithRedirect()}>LOG IN</button></li>
            }
            <Link to="Jobpage">JOBS</Link>
          </ul>
        </div>
        <div className="right-mobile  sm:block md:hidden xl:hidden 2xl:hidden ">
          <div className="nav-items my-4">
            {
              toggle ? (
                ""
              ) :
                <div initial={{ x: -200 }} transition={{ ease: "backOut" }} animate={{ x: 0 }} className=" absolute bg-white rounded-tr-3xl rounded-bl-3xl w-full top-20 left-0 ">
                  <div className="nav-items my-10">
                    <ul className="flex flex-col space-y-10 items-center font-bold">
                      <a href=""><li  >HOME</li></a>
                      {
                        isAuthenticated ? <li><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                          LOG OUT
                        </button></li> : <li><button onClick={() => loginWithRedirect()}>LOG IN</button></li>
                      }
                       <Link to="Jobpage">JOBS</Link>
                    </ul>
                  </div>
                </div>
            }
          </div>
        </div>

        <div className="md:hidden ">
          {
            toggle ? <GiHamburgerMenu className='text-black' onClick={() => setToggle(false)} /> : <GrClose onClick={() => setToggle(true)} />
          }
        </div>
      </div>
    </>
  )
}

export default Navbar