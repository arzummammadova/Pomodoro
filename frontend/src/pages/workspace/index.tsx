import PomodoroClock3D from '@/components/PomodoroClock3D';
import React from 'react'
import { RiResetRightFill } from "react-icons/ri";

const index = () => {
    return (
        <div className='bg-[#161616] text-white flex flex-col items-center justify-center min-h-screen'>
            <div className=" text-5xl text-amber-200">Timer Pomodoro Choose your minutes</div>
            <div className="tabs flex justify-center mt-10 gap-5 flex-col md:flex-row ">
                <a className="tab border px-5 py-3 rounded-xl text-md  border-amber-200 tab-bordered">5 minutes</a>
                <a className="tab border px-5 py-3 rounded-xl text-md  border-amber-200 tab-bordered">10 minutes</a>

                <a className="tab border px-5 py-3 rounded-xl text-md  border-amber-200 tab-bordered">25 minutes</a>




            </div>
            <div className="times">
                <div className="flex justify-center items-center text-center">
                    
                    <div className="flex flex-col items-center justify-center mt-10 mx-5">
                        <span className="text-amber-200 text-9xl">00</span>
                        <span className="text-gray-400 text-sm">Minutes</span>
                    </div>
                    <div className="text-gray-400 text-9xl">:</div>
                    <div className="flex flex-col items-center justify-center mt-10 mx-5">
                        <span className="text-amber-200 text-9xl">00</span>
                        <span className="text-gray-400 text-sm">Seconds</span>
                    </div>
                </div>
                
            </div>
            <div className="flex justify-center mt-10 items-center gap-3">
                <button className="border border-amber-200 text-amber-200 px-6 py-3 rounded-xl text-lg font-semibold hover:text-white hover:bg-amber-300 transition duration-300">
                    Start Timer
                </button>
                <RiResetRightFill size={30} className='text-white' />

            </div>
             <div className="bg-black min-h-screen text-white p-10">
      <h1 className="text-center text-4xl mb-10">3D Pomodoro Clock</h1>
      <PomodoroClock3D />
    </div>


        </div>
    )
}

export default index
