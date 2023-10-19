import {React,useState,useEffect} from 'react'
import WhetherCard from '../WeatherCard'
import axios from 'axios';

export const DayForecast = (props) => {
      const [nextWeekForecast,setNextWeekForecast]=useState();
      const [noOfDays,setNoOfDays]=useState(3)
          useEffect(()=>{  
              nextWeekForecastfunc()
              .then((data)=>setNextWeekForecast(data))
              .catch((error)=>console.log('Error',error))
      
          },[props.longitude, props.latitude,noOfDays])


     //for week forecast
       const nextWeekForecastfunc = async () => {
        try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${props.latitude}&lon=${props.longitude}&appid=39b0f2796cde29f0894780182f90ade7`)
        return response.data.list.slice(0,noOfDays);
      } catch (error) {
        throw error;
      }
      
      };
    console.log(nextWeekForecast)

  return (
    <div className='flex flex-col gap-4 w-full '>
       <div className='flex w-ful p-4'>
          {noOfDays===3 && <button type='button' onClick={()=>setNoOfDays(5)} className='bg-green-600 p-2 text-white w-36 font-bold'>View More</button>}
          {noOfDays===5 && <button type='button' onClick={()=>setNoOfDays(3)} className='bg-yellow-600 p-2 text-white w-36 font-bold'>View Less</button>}

      </div>
     { nextWeekForecast && <div className='flex flex-wrap p-4 gap-4 justify-between'>{nextWeekForecast.map(v=>(
        <WhetherCard temp={v.main.temp} key={v.dt} date={v.dt_txt} speed={v.wind.speed} humidity={v.main.humidity}/>
      ))}
      
      </div>}
     
    </div>
   
  )
}
