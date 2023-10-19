import React, { useEffect, useState } from "react";
import axios from "axios";
import DetailCard from "../components/Detail";
import sunrised from "../assets/sunrised.webp"
import rain from "../assets/rain.webp"

const TodayForecat = (props) => {
  const [currentWeather, setCurrentWeather] = useState({});
  const isHot = true; //TODO get wheather and check it greater than 28 then Hot
  const [isColombo,setIsColombo]=useState(true)
  useEffect(() => {
    if (props.latitude === 44.34 && props.longitude === 10.99) {
      setIsColombo(true);
    } else {
      setIsColombo(false);
    }

    SearchCurrentData()
      .then((data) => setCurrentWeather(data))
      .catch((error) => console.log("Error", error));
  }, [props.latitude, props.longitude]);

  
  const weatherDescription =
    currentWeather.weather &&
    currentWeather.weather[0] &&
    currentWeather.weather[0].description
      ? currentWeather.weather[0].description
      : "";

  const windSpeed = currentWeather.wind?.speed || "";
  const humidity = currentWeather.main?.humidity || "";
  const pressure = currentWeather.main?.pressure || "";

  const temperature = (((currentWeather.main?.temp - 213) * 5) / 9).toFixed(2);

  const SearchCurrentData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&appid=39b0f2796cde29f0894780182f90ade7`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    SearchCurrentData()
      .then((data) => setCurrentWeather(data))
      .catch((error) => console.log("Error", error));
  }, [props.latitude, props.longitude]);


  return (
    <div className="md:flex gap-4 md:w-full   items-center justify-between">
      <div className="flex justify-center md:w-1/3 h-[400px]">
        {isHot && <img src={sunrised} alt="" width={"400px"} height={"400px"} />}
        {!isHot && <img src={rain} alt="" />}
      </div>

      <div className="flex flex-col md:w-1/3 sm:w-full justify-center items-center gap-2">
        <div className="flex text-xl text-slate-600 m-5">{isColombo ? "Colombo Forecast" : ""}</div>
        <div className="text-8xl">
          {temperature}
          <span>
            <sup>o</sup>C
          </span>
        </div>
        <div className="flex text-4xl text-blue-600">{weatherDescription}</div>
      </div>
      <div className="flex flex-col md:w-1/3 justify-center ">
        <DetailCard title={"Wind Speed"} data={`${windSpeed} ms-1`} />
        <DetailCard title={"Humidity"} data={`${humidity} %`} />
        <DetailCard title={"Pressure"} data={`${pressure} hPa`} />
      </div>
    </div>
  );
};
export default TodayForecat;
