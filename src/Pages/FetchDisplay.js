import React from "react";
import Navbar from "../Components/Navbar";
import ImageBG from "../Assets/Group 1.png"
const FetchDisplay = () => {
    return (
        <>
         <div>
      <Navbar />
      <img src={ImageBG} className="absolute top-0 right-0 mt-20"/>
      <div className="flex flex-row justify-center items-center gap-6">
      <div className=" w-1/2 flex flex-col">
          <div className="mb-8">
          <p> Here are your</p>
          <p> Vehicle Details</p>
            </div>
            <div className="py-4">
            <p className="text-xl mb-2">Vehicle License plate number</p>
            <p>BUSMJ2836827#</p>
            <p className="text-xl mb-2">Owner's Namer</p>
            <p>RamaSwami krishnan</p>
            <p className="text-xl mb-2">Registration date</p>
            <p>BUSMJ2836827#</p>
            <p className="text-xl mb-2">Vehicle License plate number</p>
            <p>BUSMJ2836827#</p>
           
          </div>
          </div>
      </div>
      </div>
        </>
    )
};
export default FetchDisplay;