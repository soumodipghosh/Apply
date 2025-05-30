import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import CountUp from 'react-countup';
import { useNavigate } from 'react-router-dom';
import pic from "../assets/myjob.jpeg"


const Home = () => {
  const navigate = useNavigate();
  const jobsPage = () => {
    navigate("/jobs")
  }
  return (
    <div>
      
      <nav className='flex items-center justify-between bg-blue-950 p-2 lg:p-2 gap-12 font-semibold fixed top-0 z-50 w-full'>
        <div className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-2 rounded-lg font-mono'>
            <h1>Apply.com</h1>
        </div>

        {/* <ul className='hidden lg:flex md:flex lg:gap-10 md:gap-5 text-blue-300'>
            <li onClick={() => setSearch("All News")} className='hover:underline cursor-pointer'>All News</li>
            <li onClick={() => setSearch("Trending")} className='hover:underline cursor-pointer'>Trending</li>
        </ul> */}

        <div className='flex gap-1 items-center'>
            {/* <input type="text" placeholder='Search Here...' value={""} className='w-[150px] lg:w-[250px] md:w-[200px] border border-yellow-100 p-1 rounded-lg text-white capitalize' onChange={""} /> */ }
            <button className='bg-rose-400 p-1.5 md:px-3 rounded-lg text-white cursor-pointer'>Login</button>

        </div>
      </nav>

        <div className='flex-none lg:flex md:flex mt-12 md:mt-20 lg:mt-20 px-10 py-5 md:px-10 lg:px-34 gap-0 md:gap-20 lg:gap-52 md:pl-8'>
          <div>
            <h1 className='text-[42px] md:text-[50px] lg:text-[60px] font-bold animate-pulse bg-gradient-to-r from-sky-600 to-cyan-300 bg-clip-text text-transparent'> NEED A JOB ? </h1> 
            <h1 className='text-3xl md:text-3xl lg:text-4xl font-medium mt-8 animate-bounce text-amber-300'>Get Your <span className='bg-gradient-to-r from-green-400 via-lime-400 to-yellow-300 bg-clip-text text-transparent font-semibold'>DREAM JOB</span> Today !</h1>
            <p className='mt-4 md:mt-7 text-lg md:text-[16px] lg:text-[16px] font-sans text-gray-500'><span className='text-blue-500'>Discover</span> global career opportunities matching your unique skills.
</p>
            <button className='bg-blue-600 p-2 md:px-3 rounded-lg text-white cursor-pointer flex mt-7 md:mt-9 gap-2 font-medium text-lg' onClick={jobsPage}>Visit us <FaArrowRight className='mt-1.5' /></button>
          </div>
          <div className='hidden md:flex pl-0 md:pl-0 lg:pl-36'>
            <img src={pic} alt="" width={200} />
          </div>
        </div>

      <div className='bg-blue-950 text-white py-10 mt-1 md:mt-10'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-3xl font-semibold'>
                <CountUp 
                start={0} 
                end={599}
                suffix='+'
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={true}
                />
            </p>
            <p>Hiring Partners</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-3xl font-semibold'>
            <CountUp 
                start={0} 
                end={25000}
                separator=','
                suffix='+'
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={true}
                />
            </p>
            <p>Available Positions</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-3xl font-semibold'>
            <CountUp 
                start={0} 
                end={399}
                suffix='+'
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={true}
                />
            </p>
            <p>Industry Sectors</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-3xl font-semibold'>
            <CountUp 
                start={0} 
                end={72799}
                separator=','
                suffix='+'
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={true}
                />
            </p>
            <p>Global Employers</p>
        </div>
      </div>
    </div>


    </div>
  )
}

export default Home
