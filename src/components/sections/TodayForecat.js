import React, { useEffect,useState } from 'react';
import sunrised from '../assets/sunrised.jpg';
import cloudy from '../assets/cloudy.jpeg'
import axios from 'axios';
export const TodayForecat = (props) => {
    const [currentWeather,setCurrentWeather]=useState({});
    const isHot = true; //TODO get wheather and check it greater than 28 then Hot

    // const temperature = currentWeather.main?.temp || '';
    // const weatherDescription = currentWeather?.list?.weather.map((w) => w.description).join(', ') || '';
  
    const weatherDescription =
    currentWeather.weather && currentWeather.weather[0] && currentWeather.weather[0].description
      ? currentWeather.weather[0].description
      : '';

      const windSpeed = currentWeather.wind?.speed || '';
     // const description = currentWeather.weather?.description || '';
      const humidity = currentWeather.main?.humidity || '';
      const pressure = currentWeather.main?.pressure || '';
      //const clouds = currentWeather.clouds?.all || '';

     // const temp=currentWeather?.main?.temp || '';
      //const temperature=function toCelcius(){return (5/9)*(temp-32)}
      const temperature= ((currentWeather.main?.temp-213)*5/9).toFixed(2);
     

      


    const SearchCurrentData = async () => {
        try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&appid=39b0f2796cde29f0894780182f90ade7`)
        return response.data;
        
      } catch (error) {
        throw error;
      }

    };
    // console.log(currentWeather.main?.temp)
    
    useEffect(()=>{
        SearchCurrentData()
        .then((data)=>setCurrentWeather(data))
        .catch((error)=>console.log('Error',error))
    },[props.latitude,props.longitude])

  return (
    
    <div className="flex gap-4 w-full items-center justify-between">
      <div className="flex   justify-center w-1/3 h-[400px]">
        {isHot && <img src={sunrised} alt="" />}
        {!isHot && <img src={cloudy} alt="" />}      
      </div>

      <div className="flex flex-col w-1/3 justify-center items-center">
        <div className="text-8xl">{temperature}<span><sup>o</sup>C</span></div>
        <div className="flex text-4xl">{weatherDescription}</div>
      </div>
      <div className="flex flex-col w-1/3 justify-center ">          
          <div className="flex p-4 gap-12 rounded-md  shadow-lg bg-transparent bg-pink-200 w-80 h-24 items-center m-3 text-xl">
            <div className="flex text-start w-40">Wind Speed</div>
            <div className="flex ">{windSpeed}<span>ms<sup>-1</sup></span></div>
          </div>
          <div className="flex p-4 gap-12  rounded-md  shadow-lg bg-transparent bg-pink-200 w-80 h-24 items-center m-3 text-xl">
            <div className="flex text-start w-40 ">Humidity</div>
            <div className="flex ">{humidity}<span>%</span></div>
          </div>
          <div className="flex p-4 gap-12 rounded-md  shadow-lg bg-transparent bg-pink-200 w-80 h-24 items-center m-3 text-xl">
            <div className="flex text-start w-40 ">Pressure</div>
            <div className="flex ">{pressure}<span>hPa</span></div>
          </div>
        
      </div>
    
    </div>
    
  )
}
