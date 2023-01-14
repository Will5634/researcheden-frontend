

import {  HiOutlineMenu, } from 'react-icons/hi';
import { Link } from "react-router-dom";



import React from "react";

export default function Header({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 dark:bg-gray-800 mb-3 font-sans fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-xl  leading-relaxed inline-block mr-4 py-2 whitespace-nowrap  text-white"
              href="#pablo"
            >
              <Link to={`/`} className='font-bold '>ResearchEden</Link>

              
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <HiOutlineMenu className="w-6 h-6 mr-2  text-white"/>
              
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75 "
                  href="#pablo"
                >
                  <span className="ml-2"><Link to={`/`}>Home</Link></span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                  
                >
                  <span className="ml-2"><Link to={`/Search`}>Search</Link></span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                  
                >
                  <span className="ml-2"><Link to={`/donate`}>Donate</Link></span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                  
                >
                  <span className="ml-2"><Link to={`/AllFile`}>File List</Link></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}








//import { logo } from '../assets';
/*
const links = [
  { name: 'Home', to: '/', icon: HiOutlineHome },
  { name: 'Articles', to: '/articles', icon: HiOutlinePhotograph },
  { name: 'Projects', to: '/Projects', icon: HiOutlineUserGroup },
  { name: 'Powerpoints', to: '/Powerpoints', icon: HiOutlineHashtag },
  { name: 'AllFiles', to: '/Files', icon: HiOutlineArchive },
];

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="https://flowbite.com/" className="flex items-center">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">ProjectParadise</span>
    </a>
    <div className="flex md:order-2">
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
    </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
  
  );
};

export default Header;






/*<>
<div className="md:block hidden  w-full py-5 px-4 bg-black">
{links.map((item) => (
<NavLink
  key={item.name}
  to={item.to}
  className=" justify-start items-center  text-gray-400 hover:text-cyan-400 mr-10" 
> 
  {item.name}
</NavLink>
))}

</div>
*/


/* Mobile sidebar 
<div className="absolute md:hidden block bg-black w-full top-6 right-3 ">
  {!mobileMenuOpen ? (
    <HiOutlineMenu className="w-6 h-6 mr-2  text-white" onClick={() => setMobileMenuOpen(true)} />
  ) : (
    <RiCloseLine className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(false)} />
  )}
</div>

<div className={`absolute top-0 h-screen w-2/3  bg-black backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
  
  <NavLinks handleClick={() => setMobileMenuOpen(false)} />
</div>





</>*/