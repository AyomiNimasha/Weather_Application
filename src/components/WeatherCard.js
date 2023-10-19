import React from "react";

import cloudy from './assets/cloudy.jpeg'
function WhetherCard(props) {
function toCelcius(f){
  return(
    ((f-213)*(5/9)).toFixed(2)
  )
}
  return (
    <div className="round-lg flex w-80 flex-col rounded-br-2xl rounded-bl-2xl bg-white">
      <div className="item-center flex w-full flex-col justify-center gap-2 rounded-br-2xl rounded-bl-2xl bg-blue-600 p-4 font-bold text-white">
        <div className="flex w-full items-center justify-center text-3xl">
          <span> Weather&nbsp;</span>
          {toCelcius(props.temp)}
          <span className="text-2xl">
            <sup>o</sup>C
          </span>
        </div>
        <div className="text-md flex items-center justify-center">
          {props.date}
        </div>
      </div>

      <div className="p-4">
        <img src={cloudy} alt="" className="w-full"/>
      </div>
      <div className="flex flex-col justify-center gap-2 p-4">
        <div className="flex justify-center">
          <span className="w-36">WInd Speed</span>
          <span>{props.speed} ms<sup>-1</sup></span>
        </div>
        <div className="flex justify-center">
          <span className="w-36">Humidity</span>
          <span>{props.humidity} %</span>
        </div>
      </div>
    </div>
  );
}

export default WhetherCard;
