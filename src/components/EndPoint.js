 import axios from "axios";

// const FetchData = async () => {
//   try {
//     const response = await axios.get(
//       "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=39b0f2796cde29f0894780182f90ade7"
//     );
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
// export default FetchData;

// export const FetchThreeDaysData=async(cityName)=>{

// }
import React from "react";

export const SearchCurrenthData = async (cityName) => {
    try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=39b0f2796cde29f0894780182f90ade7`)
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }

};

//for threee days(four days link)
export const ThreeDaysForecast = async (cityName) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=3&appid=39b0f2796cde29f0894780182f90ade7`) 
    console.log(response);
  return response.data;
} catch (error) {
  throw error;
}

};

//for week forecast
export const NextWeekForecast = async (cityName) => {
  try {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=7&appid=39b0f2796cde29f0894780182f90ade7`
  )
  console.log(response);
  return response.data;
} catch (error) {
  throw error;
}

};

