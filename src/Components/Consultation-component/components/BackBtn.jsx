import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
const BackBtn = () => {
  return (
    <div className='fixed z-50 top-3 left-3'>
        <IoMdArrowRoundBack className='text-4xl p-2 rounded-full hover:bg-slate-400 transition' onClick={()=>{
            console.log("clicked")
            window.history.back()
        
        }} />
    </div>
  )
}

export default BackBtn