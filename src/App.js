import "./App.css";
import { useState } from "react";
import { TodayForecat } from "./components/sections/TodayForecat";
import { DayForecast } from "./components/sections/DayForecast";

function App() {
  const [latitude, setLatitude] = useState(44.34);
  const [longitude, setLongitude] = useState(10.99);

  const resetCordinates = () => {
    setLatitude(44.34);
    setLongitude(10.99);
  };
  return (
    <div className="flex flex-col p-4 w-full h-screen">
      <div className="flex flex-col w-full">
        <div className="flex">
          <TodayForecat latitude={latitude} longitude={longitude} />
        </div>
        <div className="flex justify-center py-6">
          <form className="flex flex-col gap-2 w-80 text-md bg-green-100 p-4 font-bold">
            <div className="flex gap-4 w-ful justify-between">
              <span>Latitude</span>
              <input
                type="number"
                className="border-2 rounded-md flex justify-center px-4 border-solid border-black  bg-green-100 w-24"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
              />
            </div>
            <div className="flex gap-4 w-ful justify-between">
              <span>Longitude</span>
              <input
                type="number"
                className="border-2 rounded-md flex justify-center px-4 border-solid border-black  bg-green-100 w-24"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
              />
            </div>
            <div className="flex w-ful justify-between">
              <button
                type="button"
                onClick={resetCordinates}
                className="bg-green-600 p-2 text-white"
              >
                Reset Cordinates
              </button>
            </div>
          </form>
        </div>
        <div className="flex w-full">
          <DayForecast latitude={latitude} longitude={longitude} />
        </div>
      </div>
    </div>
    
  );
}

export default App;
