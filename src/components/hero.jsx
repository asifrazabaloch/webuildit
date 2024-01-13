
import styles from '../style'
import {robot , instagram, linkedin ,facebook ,} from "../assets"


const Hero = () => {
  return (
   <section className={`${styles.paddingX} md:py-16 py-5 overflow-hidden ss:flex-row xl:justify-evenly flex-col flex justify-between md:pt-[5rem] items-center`}>
      <div className={`${styles.flexcenter} xs:pb-0 pb-3 grow xl:justify-evenly xl:flex w-50% xl:items-center`}>
       <div>
        <h6 className={`text-white sm:text-[2.3vw] ss:text-[30px]  text-[6vw] `}>Hi There</h6>
        <h1 className={`${styles.heading2} `}>I'm <span className='text-gradient'>Asif Raza</span></h1>
        <h3 className='text-white ss:text-[3.5vw]  text-[7vw] ss:leading-[5vw]  leading-[9vw] underline'>Mern Stack Developer</h3>
        <h3 className='text-white ss:text-[1.7vw] ss:leading-[40px] text-[4vw]'>Bringing ideas to life through code</h3>
        <p className={` font-poppins font-normal text-white ss:text-[1.5vw] xs:text-[3vw] text-[4vw]  leading-[9vw] ss:leading-[40px] `}> <a href="#about" className='text-gradient underline'>Learn More <span className='rotate-45'>&#128279;</span> </a> About Me</p>
        <p className={`${styles.paragraph} flex leading-[3vw] xs:leading-[4vw] items-center`}>Fallow Me 
        <a href="$"> <img src={instagram} href="#" className='w-[20px] ml-1 cursor-pointer ml-3'></img></a>
        <a href=""><img src={facebook}  href="#" className='w-[20px] ml-1 cursor-pointer ml-3'></img></a>
        <a href=""><img src={linkedin} href="#" className='w-[20px] ml-1 cursor-pointer ml-3'></img> </a>
       
        
       </p>
        <div className='leading-[20px]'>
          <button className='mr-2 bg-gradient  border-black hover:border-white hover:text-black font-bold border-[2px] px-3 ss:text-[23px] py-2 text-[14px] mt-3 rounded-lg'>Email Me</button>
          <button className='mx-2  text-gradient border-gradient hover:border-white border-[2px] font-bold px-3 py-2 ss:text-[23px] text-[14px] mt-3 rounded-lg'> Resume</button>
        </div>
        </div>
        </div>
      <div className='flex  justify-evenly grow ss:w-[45%] pt-0 pt-5 w-[100vw]'>
        <img src={robot} alt="robot" className=' ss:w-[17rem]  grow ss:max-w-[100%] ss:w-[14rem] relative w-[100%] right-0 '/>
        <div className='pink__gradient absolute z-[0] w-[40%] top-10 h-[35%]'></div>
        <div className='white__gradient absolute z[0] top-[10rem] w-[50%] rounded-full h-[50%]'></div>
        <div className='blue__gradient absolute z-[0] w-[50%] right-20 top-[10rem] h-[50%]'></div>
      </div>   
    
    </section>
  )
}

export default Hero
