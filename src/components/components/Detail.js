import React from 'react'

const DetailCard = (props) => {
  return (
    <div className="flex p-2  px-4 rounded-md  shadow-lg bg-transparent bg-pink-200 w-[280px] h-24 items-center  justify-between text-xl">
        <div className="flex text-start w-36 font-bold">{props.title}</div>
        <div className="font-bold ">{props.data}</div>
  </div>
  )
}
export default DetailCard;
