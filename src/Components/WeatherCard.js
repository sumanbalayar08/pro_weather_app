import React from "react";

const WeatherCard = (props) => {
  return (
    <div className="flex bg-cyan-900 space-x-4 px-6 py-3 text-white text-center justify-between rounded-md">
      <div className="flex-col items-center space-y-1 ">
        <div className="text-base font-serif">{props.title}</div>
        <div className="text-2xl font-bold">
          {props.data} {props.unit}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img src={props.image} className="w-12"/>
      </div>
    </div>
  );
};

export default WeatherCard;
