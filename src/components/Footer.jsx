import React from 'react'
import { socialMedia } from '../constants'
import styles from '../style'


const Footer = () => {
  return (
    <div>
      <div className='flex justify-evenly text-white bg-primary'>
      {socialMedia.map((social,index)=>(
       <a href={social.link} key={social.link}> <img key={social.id} src={social.icon} alt={social.id} className={`w-[6vw] ss:w-[4vw] ${social.id}`} /> </a>
      ))}
      </div>
    <h2 className='text-gradient text-[30px] py-10 text-center'>  @2024 Webuild.inc</h2>
    </div>  
  )
}

export default Footer
