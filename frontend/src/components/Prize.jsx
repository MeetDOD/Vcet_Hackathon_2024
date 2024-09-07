import React from 'react'
import Heading from './Heading'
import { GiTrophyCup } from "react-icons/gi";

const Prize = () => {
  return (
    <div className='font-montserrat text-white' id='prizes'>
      <br /><br /><br /><br />
      <Heading
        title1="Prize"
        title2="Money"
        subtitle="Exciting rewards for exceptional talent"
        sectionId="timer"
      />
      <div className='sectionMargin'>
        <div className="flex flex-col md:flex-row md:space-x-4 justify-center items-center">
          <div className='w-full sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] my-5 relative flex group rounded-2xl p-0.5 bg-gray-800 hover:bg-gradient-to-br hover:from-yellow-200 hover:via-yellow-400 hover:to-yellow-800 transition duration-300'>
            <div className="gap-3 bg-gray-900 rounded-2xl w-full h-full p-6 flex flex-col text-center justify-center items-center group-hover:bg-gradient-to-br group-hover:from-yellow-200/10 group-hover:via-yellow-400/10 group-hover:to-yellow-800/10 transition duration-300">
              <div className=" text-[#FFD700]">
                <GiTrophyCup size={200} />
              </div>
              <div className='text-3xl font-semibold countDown'>₹ 50,000</div>
            </div>
          </div>
          <div className='w-full sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] my-4 relative flex group rounded-2xl p-0.5 bg-gray-800 hover:bg-gradient-to-br hover:from-gray-200 hover:via-gray-400 hover:to-gray-800 transition duration-300'>
            <div className="gap-1 bg-gray-900 rounded-2xl w-full h-full p-6 flex flex-col items-center text-center justify-center group-hover:bg-gradient-to-br group-hover:from-gray-200/10 group-hover:via-gray-400/10 group-hover:to-gray-800/10 transition duration-300">
              <div className='text-[#C0C0C0]'>
                <GiTrophyCup size={190} />
              </div>
              <div className='text-2xl font-semibold countDown'>₹ 20,000</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4 mt-5 justify-center items-center">
          <div className='w-full sm:w-[270px] sm:h-[270px] md:w-[300px] md:h-[300px] my-5 relative flex group rounded-2xl p-0.5 bg-gray-800 hover:bg-gradient-to-br hover:from-orange-200 hover:via-orange-400 hover:to-orange-800 transition duration-300'>
            <div className="gap-1 bg-gray-900 rounded-2xl w-full h-full p-6 flex flex-col text-center justify-center items-center group-hover:bg-gradient-to-br group-hover:from-orange-200/10 group-hover:via-orange-400/10 group-hover:to-orange-800/10 transition duration-300">
              <div className='text-[#CD7F32]'>
                <GiTrophyCup size={170} />
              </div>
              <div className='text-2xl font-semibold countDown'>₹ 5,000</div>
            </div>
          </div>
          <div className='w-full sm:w-[270px] sm:h-[270px] md:w-[300px] md:h-[300px] my-5 relative flex group rounded-2xl p-0.5 bg-gray-800 hover:bg-gradient-to-br hover:from-orange-200 hover:via-orange-400 hover:to-orange-800 transition duration-300'>
            <div className="gap-1 bg-gray-900 rounded-2xl w-full h-full p-6 flex flex-col text-center justify-center items-center group-hover:bg-gradient-to-br group-hover:from-orange-200/10 group-hover:via-orange-400/10 group-hover:to-orange-800/10 transition duration-300">
              <div className='text-[#CD7F32]'>
                <GiTrophyCup size={170} />
              </div>
              <div className='text-2xl font-semibold countDown'>₹ 5,000</div>
            </div>
          </div>
          <div className='w-full sm:w-[270px] sm:h-[270px] md:w-[300px] md:h-[300px] my-5 relative flex group rounded-2xl p-0.5 bg-gray-800 hover:bg-gradient-to-br hover:from-orange-200 hover:via-orange-400 hover:to-orange-800 transition duration-300'>
            <div className="gap-1 bg-gray-900 rounded-2xl w-full h-full p-6 flex flex-col text-center justify-center items-center group-hover:bg-gradient-to-br group-hover:from-orange-200/10 group-hover:via-orange-400/10 group-hover:to-orange-800/10 transition duration-300">
              <div className='text-[#CD7F32]'>
                <GiTrophyCup size={170} />
              </div>
              <div className='text-2xl font-semibold countDown'>₹ 5,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prize
