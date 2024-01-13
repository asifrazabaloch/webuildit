
import styles from '../style.js'
import { arrowUp,Html,Css,Java,React, Php  } from '../assets/index.js'
const Skills = () => {
 


  return (
   <section className={`${styles.paddingX} skill pb-[4rem] `}>
      <div className='ss:flex justify-between text-white'>
        <div className='text-center ss:35% sm:w-[40%] '>
          <h1 className={`text-[40px] my-10 `}>Tecnical skill</h1>
          <div className='text-start'>
          <div>
           <div className='md:my-3 my-2'> 
           <img src={Html} alt="html" className='w-[30px] ss:w-[20px]'/>
            <h2 className='sm:text-[2vw]  text-[20px] sfont-bold font-poppins md:my-3 my-2'>Html</h2>
             </div>
           <div className={`h-[5px] w-[100%] bg-dimWhite progress-bar md:my-3 my-2`}> <span className='w-[95%] progress block h-[5px] bg-secondary'></span></div>
          
          
          <div>
           <div className='md:my-3 my-2'> 
           <img src={Css} alt="css" className='w-[30px] ss:w-[20px]'/>
            <h2 className='sm:text-[2vw]  text-[20px] font-bold font-poppins md:my-3 my-2'>Css</h2>
             </div>
           <div className='h-[5px] obse w-[100%] bg-dimWhite progress-bar md:my-3 my-2'> <span className='w-[90%] progress block h-[5px] bg-secondary'></span></div>
          </div>
          <div>
           <div className='md:my-3 my-2'> 
           <img src={Java} alt="javascript" className='w-[30px] ss:w-[20px]'/>
            <h2 className='sm:text-[2vw]  text-[20px] font-bold font-poppins md:my-3 my-2'>Javascript</h2>
             </div>
           <div  className='h-[5px] w-[100%] bg-dimWhite progress-bar md:my-3 my-2'> <span className='w-[85%] progress block h-[5px] bg-secondary'></span></div>
          </div>
          
          <div>
           <div className='md:my-3 my-2'> 
           <img src={Php} alt="php" className=' ss:w-[40px] w-[60px]'/>
            <h2 className='sm:text-[2vw]  text-[20px] font-bold font-poppins md:my-3 my-2'>PHP</h2>
             </div>
           <div className='h-[5px] w-[100%] bg-dimWhite my-3 progress-bar'> <span className='w-[55%] progress block h-[5px] bg-secondary'></span></div>
          </div>
          

          <div>
           <div className='md:my-3 my-2 '> 
           <img src={React} alt="php" className='ss:w-[20px]  w-[30px]'/>
            <h2 className='sm:text-[2vw]  text-[20px] font-bold font-poppins md:my-3 my-2'>React JS</h2>
             </div>
           <div className='h-[5px] w-[100%] bg-dimWhite progress-bar md:my-3 my-2'> <span className='w-[70%] progress block h-[5px] bg-secondary'></span></div>
          </div>
          </div>
          </div>
        </div>
        <div className='text-center ss:w-[62%] sm:w-[57%]' >
          
        <h1 className={`text-[40px] text-center my-10 `}>Personal skill</h1>
          <div className="radial-bar">
            <div className="radial-bar">
            <svg x={0} y={0} viewBox='0 0 200 200'>
              <circle className='circle-bar' cx={100} cy={100} r={80}></circle>
              <circle  className='path path1' cx={100} cy={100} r={80}></circle>
            </svg>
            <div>Creativity</div>
             </div>
             <div className="radial-bar">
            <svg x={0} y={0} viewBox='0 0 200 200'>
              <circle className='circle-bar' cx={100} cy={100} r={80}></circle>
              <circle className='path path2' cx={100} cy={100} r={80}></circle>
            </svg>
            <div>Communication</div>
             </div>
             <div className="radial-bar">
            <svg x={0} y={0} viewBox='0 0 200 200'>
              <circle className='circle-bar' cx={100} cy={100} r={80}></circle>
              <circle className='path path3' cx={100} cy={100} r={80}></circle>
            </svg>
            <div>Problem solving</div>
             </div>
             <div className="radial-bar">
            <svg x={0} y={0} viewBox='0 0 200 200'>
              <circle className='circle-bar' cx={100} cy={100} r={80}></circle>
              <circle className={`path  `}cx={100} cy={100} r={80}></circle>
            </svg>
            <div>Team work</div>
             </div>
          </div>
          
        </div>

      </div>

    </section>
  )
}

export default Skills
