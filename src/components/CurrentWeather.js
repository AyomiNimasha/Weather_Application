import React from "react";

import weatherimage from "../assets/weatherimage.png";
const CurrentWeather = () => {
  const isHot = true; //TODO get wheather and check it greater than 28 then Hot
  return (
    <div className="round-lg flex  flex-col border-x-slate-700 bg-white h-screen p-10">
      <span className="flex w-full justify-center rounded-br-2xl rounded-bl-2xl bg-blue-600  py-4 text-2xl font-bold text-white">
        Today&apos;s Weather Colombo
      </span>
     

      {/* <div className="flex items-center gap-2 px-4">
        <div className="flex text-3xl">
          26<span className="text-2xl">
            <sup>o</sup>
          </span>
          <span>C</span>
        </div>
        <span className="text-2xl">{isHot ? "Sunny" : "Cloudy"}</span>
      </div> */}
      {/* TODO add image */}
      {/* {date} */}

      
      <div className="flex flex-1  gap-4  basis-1/2">
      <div className="flex basis-2/5 justify-center">
        {isHot && <img src={weatherimage} alt="" />}
        {!isHot && <img src={weatherimage} alt="" />}      
      </div>
      <div className="flex flex-col basis-1/5 justify-center">
        <div className="text-8xl">26<sup>0</sup>C</div>
        <div className="flex text-2xl">Rainy Day</div>
      </div>
      <div className="flex flex-col basis-2/5 ">
       
          <div className="flex rounded-md  shadow-lg bg-transparent bg-pink-200 w-[500px] h-[50px] items-center m-3 text-lg">
            <div className="flex text-start basis-5/6">Rainfall Day</div>
            <div className="flex">data1</div>
          </div>
          <div className="flex rounded-md  shadow-lg bg-transparent bg-pink-200 w-[500px] h-[50px] items-center m-3 text-lg">
            <div className="flex text-start basis-5/6">Wind</div>
            <div className="flex ">data2</div>
          </div>
          <div className="flex rounded-md  shadow-lg bg-transparent bg-pink-200 w-[500px] h-[50px] items-center m-3 text-lg">
            <div className="flex text-start basis-5/6">Humidity</div>
            <div className="flex ">data3</div>
          </div>
        
      </div>
    
    </div>
      <div className="flex bg-yellow-200 basis-1/4">Weather Forecast for Three days</div>
      <div className="flex bg-red-200">View More Button</div>
      <div className="flex bg-green-500 basis-2/4">Weather Forecast for week</div>
      </div>
  );
};
export default CurrentWeather;