import React, { useEffect, useState } from 'react'
import { SearchCurrenthData,ThreeDaysForecast,NextWeekForecast } from './EndPoint';

function FetchData(){
    const cityName='colombo';
    const [currentWeather,setCurrentWether]=useState({});
    const [threeDaysForecast,setThreeDaysForecast]=useState({});
    const [nextWeekForecast,setNextWeekForecast]=useState({});

    useEffect(()=>{
        SearchCurrenthData(cityName)
        .then((data)=>setCurrentWether(data))
        .catch((error)=>console.log('Error',error))

        ThreeDaysForecast(cityName)
        .then((data)=>setThreeDaysForecast(data))
        .catch((error)=>console.log('Error',error))

        NextWeekForecast(cityName)
        .then((data)=>setNextWeekForecast(data))
        .catch((error)=>console.log('Error',error))

    },[cityName])
  return (
    <div></div>
  )
}
export default FetchData;
