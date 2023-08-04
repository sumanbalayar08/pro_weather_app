import React from "react";
import SearchBar from "./SearchBar";
import Card from "./Card";
import { WiHumidity } from "react-icons/wi";

const WeatherCard = () => {
  const datalist = [
    { img: <WiHumidity size="2em" />,description: "Humidity",},
    { img: <WiHumidity size="2em" />, description: "Humidity" },
    { img: <WiHumidity size="2em" />, description: "Humidity" },
    { img: <WiHumidity size="2em" />, description: "Humidity" },
    { img: <WiHumidity size="2em" />, description: "Humidity" },
    { img: <WiHumidity size="2em" />, description: "Humidity" },
    { img: <WiHumidity size="2em" />, description: "Humidity" },
    { img: <WiHumidity size="2em" />, description: "Humidity" },
    { img: <WiHumidity size="2em" />, description: "Humidity" },
  ];

  return (
    <div className="bg-black h-full min-h-screen text-white">
      <SearchBar />
      <div>
        <h1>KATHMANDU</h1>
        <h3>Chance of Rain: 3%</h3>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <div className="flex flex-col space-y-4">
          {datalist.slice(0, 4).map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>
        <div className="flex flex-col space-y-4">
          {datalist.slice(4, 8).map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
