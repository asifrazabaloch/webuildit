import React from 'react'
import { Navbar,Hero,Skills, About,Footer} from "../components"
import styles from '../style'
import Project from '../components/project'

const Home = () => {

  return (
    <div>
      <div id='navbar' className={`${styles.paddingX} ${styles.flexcenter} mt-[] fixed right-0 top-0 left-0 z-[2] bg-primary w-full`}>
        <div className={`${styles.boxwidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary w-full  sm:mt-[91px] mt-[80px] `}>
        <Hero />
      </div>
      <div className='bg-primary w-full py-5 '>
        <About />
      </div>
      <div className='bg-primary w-full  py-5'>
        <Skills />
      </div>
      <div className='bg-primary w-full  py-5'>
        <Project />
      </div>
      <div className={`${styles.paddingX} bg-primary w-full  py-5`}>
        <Footer />
      </div>
    </div>
    
  )
  
} 

export default Home