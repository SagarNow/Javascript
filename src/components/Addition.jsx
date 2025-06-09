"use client";
import React from "react";
const Addition = () => {
// 1st method
  const add = "₹" + (20.95 + 7.99).toFixed(2); // wont show 1.8888888888 numbers 
// 2nd method
  const Add =  "₹" + (2095 + 799)/100; 
// 3rd method
  const item = 'items  (' + (1 + 1) + ') ₹' + (2095 + 799)/100; //whole line

  //-------------------------screen----------------------------------
  return (
    <div className=" text-gray-300 min-h-screen min-w-screen bg-[#232F3E] flex justify-center items-center flex-col font-black text-4xl opacity-50 ">
      <div className="h-100 w-full bg-[#37475A] rounded-lg flex justify-center items-center flex-col gap-5">
       
        <div className="text-2xl">product price is {add}</div>
        <div className="text-2xl">product price is {Add}</div>
        <div className="text-2xl">product price is {item}</div>
      </div>
    </div>
  );
};

export default Addition;
