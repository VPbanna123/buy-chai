"use client"
import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut} from "next-auth/react"
import { useState } from 'react'
import './nav.css';  // Import the CSS file
 
const Navbar = () => {
  const { data: session } = useSession()
  // const [showdropdown, setshowdropdown] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [showMenu, setShowMenu] = useState(false)  // State to control
  // Function to close the menu after a link is clicked
  const handleLinkClick = () => {
    setShowMenu(false); // Close the hamburger menu
  };
  // const [session, setSession] = useState(null); 
  const getUsernameFromEmail = (email) => {
    if (!email) return "";
    const username = email.split('@')[0]; // Get the part before '@'
    
    // Remove any numbers or special characters after the name using a regular expression
    const cleanedUsername = username.replace(/[^a-zA-Z]/g, ''); // Keep only letters (a-z, A-Z)

    return cleanedUsername.charAt(0).toUpperCase() + cleanedUsername.slice(1);  // Capitalize the first letter
  };
  // if (session) {
  //   return <>
  //     Signed in as {session.user.email} <br />
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }
  return (
//     <nav className='flex justify-between p-4  bg-slate-800'>
//       <Link href={"/"}className="logo font-bold text-lg flex justify-center items-center p-0 gap-2"><span><img src="chai.gif" width={33} alt="" srcSet="" /></span>GET ME </Link>
//       <div className="ul ">
//         <ul className='gap-5 flex flex-row'>
//           <li><Link href={"/"}>
//             <button type="button" className="text-white   bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">HOME</button>
//           </Link></li>
//           <li><Link href={"/about"}>
//             <button type="button" className="text-white  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">ABOUT</button>

//           </Link></li>
//           <li className='relative'>
//             {session &&  <>
// <button onClick={()=>{setshowdropdown(!showdropdown)}} id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" className="text-white mx-3 bg-blue-700 hover:bg-blue-800  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">{session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
// <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
// </svg>
// </button>


// <div id="dropdownDelay" className={`z-10 ${showdropdown?"":"hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute left-[145px] dark:bg-gray-700`}>
//     <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
//       <li>
//       <Link href={`/${session.user.email}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">payment </Link>
//       </li>
//       <li>
//       <Link href={"/dashboard" }className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">update profile</Link>
//       </li>
//       <li>
//       <Link href={"#"}className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
//       </li>
//       <li>
//       <Link href={"#"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={()=>signOut()}>Sign out</Link>
//       </li>
//     </ul>
// </div>
// </>
//  }
//           {/* {session && 
//             <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>signOut()}>log out</button>
//           } */}
//           {!session && 
//             <Link href={"/login"}>
//             <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">LOGIN</button>
//           </Link>}</li>
//         </ul>

//       </div>
//     </nav>
<nav className="flex justify-between p-4 bg-slate-800">
  <Link href="/" className="logo font-bold text-lg flex justify-center items-center p-0 gap-2">
    <span><img src="chai.gif" width={33} alt="logo" /></span>GET ME
  </Link>

  {/* Hamburger menu for mobile */}
  <button 
    className="text-white md:hidden flex items-center" 
    onClick={() => setShowMenu(!showMenu)} // Toggle mobile menu visibility
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </button>

  {/* Dropdown Menu for Mobile */}
  <div className={`ul ${showMenu ? 'block' : 'hidden'} md:block`}>
    <ul className="gap-5 flex flex-col md:flex-row md:items-center md:justify-center justify-end items-end">
      {/* Home Button */}
      <li>
        <Link href="/" onClick={handleLinkClick}>
          <button 
            type="button" 
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            HOME
          </button>
        </Link>
      </li>

      {/* Dropdown for signed-in users */}
      <li className="relative">
        {session ? (
          <>
            <button 
              onClick={() => setShowDropdown(!showDropdown)} 
              className="text-white mx-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <span>{getUsernameFromEmail(session.user.email)}</span>
              <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>

            {/* Dropdown menu */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 z-10">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <Link href={`/${session.user.email}`} onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Payment</Link>
                  </li>
                  <li>
                    <Link href="/dashboard" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Update Profile</Link>
                  </li>
                  <li>
                    <Link href="#" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
                  </li>
                  <li>
                    <Link href="#" onClick={() => { signOut(); handleLinkClick(); }} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                  </li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <Link href="/login" onClick={handleLinkClick}>
            <button 
              type="button" 
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              LOGIN
            </button>
          </Link>
        )}
      </li>
    </ul>
  </div>
</nav>

  )
}

export default Navbar
