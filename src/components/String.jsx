
"use client";
import React from 'react'

export const String = () => {
    //first way to write string
    const name = "sagar"
    //second way to write string
    const name2 = 'sagar'
    //third way to write string
    const name3 = `sagar`
    //  --------------------------------------------
     //1st 
     const name4 = "i\'m sagar singh"       // use of \' and \" this is called escape character
     //2nd
     const name5 = 'hey \"sagar\" how are you'
     //---------------------------------------------

  return (
    <div className='text-2xl bg-black text-white h-100 w-full flex-col justify-center items-center flex'>
        <div className='text-2xl'>name is {name}</div>
        <div className='text-2xl'>name is {name2}</div>
        <div className='text-2xl'>name is {name3}</div>
        <div className='text-2xl'>name is {name4}</div>
        <div className='text-2xl'>name is {name5}</div>
    </div>
  )
}
export default String