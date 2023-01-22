import React from 'react'

const Footer = () => {
  return (
    
<footer className=" footer p-4  shadow md:flex md:items-center md:justify-between md:p-6 ">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a className="hover:underline">ProjectParadise™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Support Us</a>
        </li>
        
        <li>
            <a href="#" className="hover:underline">Contact Us</a>
        </li>
    </ul>
</footer>

  )
}

export default Footer