import { useState, usestate } from 'react'
import { close, menu } from '../assets'
import { navLinks } from '../constants'
import styles from "../style"
import {useLocation} from "react-router-dom"

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const location = useLocation();
  return (
    <nav className='w-full flex py-6 justify-between items-center z-[4] navbar'>
      <h1 className={`text-white font-bold text-3xl cursor-default ${styles.logo}`}>WEBUILD</h1>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer px-3 py-2 text-[18px]   ${location.pathname === nav.id ? 'text-cyan': 'text-white'}`}>
            <a
              href={`${nav.id}`}>
              {nav.title}
            </a>
          </li> ))}

      </ul>
      <div className='sm:hidden flex flex-1 justify-end item-center'>
        <button className={`text-dark xs:mr-8 mr-4 bg-white p-1 rounded-md sm:hidden ${styles.git}`}>Get In Touch</button>
        <img src={toggle ? close : menu } alt="menu" className='w-[28] h-[28] object-contain z-40' onClick={() => settoggle((prev)=> !prev)}/>
      <div className={`${toggle ? 'block' : 'hidden'} bg-black-gradient z-[1] absolute pl-2 top-20 right-0 min-w-[180px] sidebar`}>
      <ul className='list-none flex flex-1  flex-col '>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins p-4 font-normal cursor-pointer text-[16px] text-white ${location.pathname === nav.id ? 'text-cyan': 'text-white'}`}>
            <a
              href={`${nav.id}`}>
              {nav.title}
            </a>
          </li> ))}

      </ul>
      </div>
      
      </div>
    </nav>
  )
}

export default Navbar
