"use client";
import React from "react";
const Addition = () => {
  const add = "₹" + (20 + 20);

  //-------------------------screen----------------------------------
  return (
    <div className=" text-gray-300 min-h-screen min-w-screen bg-[#232F3E] flex justify-center items-center flex-col font-black text-4xl opacity-50 ">
      <div className="h-100 w-full bg-[#37475A] rounded-lg flex justify-center items-center">
       
        <div className="text-2xl">product price is {add}</div>
        <div className="text-2xl"></div>
      </div>
    </div>
  );
};

export default Addition;
