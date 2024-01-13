import React from 'react'
import styles from '../style.js'
import { person5 } from '../assets/index.js'

const About = () => {
  return (
    <section className={`${styles.paddingX} `} id="about" >
     <div >
      <h1 className={`font-poppins font-semibold ss:text-[46px] xs:text-[33px] ss:py-0 py-5 text-[12vw] text-white xs:leading-[55px] leading-[66.8px] w-full sm:w-[50%] ss:w-[75%] w-[100%] `}>About Me </h1>
      <div className='ss:flex block items-center gap-[02rem] ss:py-0 py-5  justify-between ss:mt-8'>
        <div className='ss:w-[40%] w-[100%]  ss:py-0 py-5 flex-col items-end' >
          <img src={person5} alt="person" />
        </div>
        <div className='ss:w-[58%] w-[100%] ss:py-0 py-5'>
          <p className={`font-poppins font-normal text-white ss:text-[2.3vw] xs:text-[18px] text-[5vw] `}>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium exercitationem quam ex quaerat et enim sint cupiditate. Praesentium dolorem, accusamus at, nobis, obcaecati officia ex sunt ad tempore repudiandae provident!
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti tenetur, culpa voluptates atque numquam nesciunt vero maxime iusto distinctio assumenda veniam, ab quo facilis sunt reprehenderit libero iure velit quod? </p>
        </div>
      </div>
      </div>

    </section>
  )
}

export default About
