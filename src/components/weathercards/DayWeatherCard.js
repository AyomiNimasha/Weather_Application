// import React from "react";

// import whetherIMG from "@/assets/png-transparent-clouds-sunny-warm-patches-weather-partly-cloudy-symbols-forecast-thumbnail.png";
// interface Props {
//   date: string;
//   temp: number;
// }
// export const WhetherCard = ({ date, temp }: Props) => {
//   const isHot = true; //TODO get wheather and check it greater than 28 then Hot
//   return (
//     <div className="round-lg flex w-80  flex-col   rounded-br-2xl rounded-bl-2xl bg-white">
//       <div className="item-center flex w-full flex-col justify-center gap-2 rounded-br-2xl rounded-bl-2xl bg-blue-600  p-4  font-bold text-white">
//         <div className="flex w-full items-center justify-center  text-3xl">
//           <span> Weather&nbsp;</span>26
//           {temp}C
//           <span className="text-2xl">
//             <sup>o</sup>
//           </span>
//         </div>
//         <div className="text-md flex items-center justify-center">
//           {date}2023-10-16
//         </div>
//       </div>

//       <div className="p-4">
//         {isHot && <img src={whetherIMG} alt="" />}
//         {!isHot && <img src={whetherIMG} alt="" />}
//       </div>
//     </div>
//   );
// };