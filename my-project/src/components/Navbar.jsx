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
          <div className="logo w-36 text-2xl font-extrabold md:text-5xl text-purple-950">
              HIRE ME.
          </div>
        </div>
        <div>
          <ul className="sm:flex space-x-5  cursor-pointer font-bold hidden md:space-x-10 md:flex md:flex-row ">
            <li  >HOME</li>
            {
              isAuthenticated ? <li><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </button></li> : <li><button onClick={() => loginWithRedirect()}>Log In</button></li>
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
                <motion.div initial={{ x: -200 }} transition={{ ease: "backOut" }} animate={{ x: 0 }} className=" absolute bg-blue-100 w-full top-20 left-0 ">
                  <div className="nav-items my-10">
                    <ul className="flex flex-col space-y-10 items-center font-bold">
                      <a href=""><li  >HOME</li></a>
                      {
                        isAuthenticated ? <li><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                          Log Out
                        </button></li> : <li><button onClick={() => loginWithRedirect()}>Log In</button></li>
                      }
                       <Link to="Jobpage">JOBS</Link>
                    </ul>
                  </div>
                </motion.div>
            }
          </div>
        </div>

        <div className="md:hidden ">
          {
            toggle ? <GiHamburgerMenu onClick={() => setToggle(false)} /> : <GrClose onClick={() => setToggle(true)} />
          }
        </div>
      </div>
    </>
  )
}

export default Navbar