import React from "react";
import SearchBar from "./SearchBar";
import Card from "./Card";
import { WiHumidity } from "react-icons/wi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaCity } from "react-icons/fa";
import { BsMap,BsFillSunFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";

const WeatherCard = () => {
  const datalist = [
    { img: <WiHumidity size="1.5em" />, description: "Humidity" },
    { img: <WiHumidity size="1.5em" />, description: "Humidity" },
    { img: <WiHumidity size="1.5em" />, description: "Humidity" },
    { img: <WiHumidity size="1.5em" />, description: "Humidity" },
    { img: <WiHumidity size="1.5em" />, description: "Humidity" },
    { img: <WiHumidity size="1.5em" />, description: "Humidity" },
    { img: <WiHumidity size="1.5em" />, description: "Humidity" },
    { img: <WiHumidity size="1.5em" />, description: "Humidity" },
    { img: <WiHumidity size="1.5em" />, description: "Humidity" },
  ];

  const ColumnData = [
    { img: <TiWeatherPartlySunny size="1.5rem" />, name: "Weather" },
    { img: <FaCity size="1.5rem" />, name: "City" },
    { img: <BsMap size="1.5rem" />, name: "Map" },
    { img: <FiSettings size="1.5rem" />, name: "Settings" },
  ];

  return (
    <div className="flex bg-black h-full min-h-screen ">
      <div className="flex flex-col w-[10%] bg-slate-700 rounded-md items-center justify-start space-y-5 font-medium">
        {ColumnData.map((data, index) => (
          <div className="flex flex-col text-white items-center justify-center py-5">
            <div className="object-cover">{data.img}</div>
            <div>{data.name}</div>
          </div>
        ))}
      </div>
      <div className="h-full min-h-screen text-white w-full">
        <SearchBar />
        <div className="flex items-center justify-center space-x-8 ">
          <div className="flex flex-col ">
            <div className="flex flex-col items-start justify-start">
              <span className="font-bold text-3xl">Madrid</span>
              <h3 className="font-medium text-slate-500">chance of rain:3%</h3>
              <span className="py-8 text-5xl font-serif">45&deg;</span>
            </div>
            <div className="flex flex-col space-y-6">
              {datalist.slice(0, 4).map((data, index) => (
                <Card key={index} data={data} />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center ">
          <div className="flex items-center justify-center py-5">
              <BsFillSunFill color="orange" fontSize="8.2rem"/>
            </div>
            <div className="flex flex-col space-y-6">
              {datalist.slice(4, 8).map((data, index) => (
                <Card key={index} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
