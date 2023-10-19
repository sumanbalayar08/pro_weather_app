import React, { useEffect, useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import WeatherCard from "./WeatherCard";
import WeatherImage from "./WeatherImage";
import {sunrise,sunset} from './TimeConversion'
import axios from "axios";

const Weather = () => {
  //Get the Current Date
  const date = new Date();
  const options = { weekday: "short", day: "numeric", month: "short" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  //Get the country Name from code
  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

  const [city, setcity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=17769e544a4a37e4e17e0e777ddd8fba`
      );
      setWeatherData(res.data);
      console.log(weatherData.main.temp); // This should work
    } catch (err) {
      console.log(`Error Retrieving Data`, { err });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCityChange = (e) => {
    setcity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const items = [
    {
      name: "Temprature",
      data: weatherData ? ((weatherData.main.temp-32)/1.8).toFixed(2) : null,
      unit: "°C",
    },
    {
      name: "Pressure",
      data: weatherData ? weatherData.main.pressure : null,
      unit: "Pa",
    },
    {
      name: "Humidity",
      data: weatherData ? weatherData.main.humidity : null,
      unit: "%",
    },
    {
      name: "Wind",
      data: weatherData ? weatherData.wind.speed : null,
      unit: "Km/hr",
    },
    {
      name: "Clouds",
      data: weatherData ? weatherData.clouds.all : null,
    },
    {
      name: "Visibility",
      data: weatherData ? weatherData.visibility / 1000 : null,
      unit: "Km",
    },
    {
      name: "Sunrise",
      data: weatherData ? sunrise(weatherData.sys.sunrise): null,
    },
    {
      name: "Sunset",
      data: weatherData ? sunset(weatherData.sys.sunset) : null,
    },
  ];

  return (
    <div className="flex-col bg-black text-white min-h-screen items-center justify-center space-y-8 py-[4%]">
      <div className="flex justify-center items-center space-x-2">
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          className="rounded-full px-2 py-3 w-80 text-black"
          placeholder="Search For Places"
          required
        ></input>
        <button
          className="bg-gray-700 text-white hover:bg-orange-500 px-3 py-3 rounded-full"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
      {weatherData ? (
        <div className="flex items-center justify-evenly">
          <div className="flex-col">
            <WeatherImage weatherType={weatherData.weather[0].main}/>
            <div className="flex-col justify-around items-center space-y-8">
              <div className="flex items-center justify-center text-7xl">
                {((weatherData.main.temp-32)/1.8).toFixed(2)} 
                <span className="text-6xl">°C</span>
              </div>
              <div className="flex items-center justify-center text-xl">
                {weatherData.weather[0].description}
              </div>
              <div className="flex-col items-center justify-center space-y-4 text-sm">
                <div className="flex items-center justify-center">
                  Today • {formattedDate}
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CiLocationOn size={25} />
                  <span className="">
                    {regionNames.of(weatherData.sys.country)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col py-[2%] items-center justify-center space-y-4">
            <div className="flex font-bold text-lg">Today's Highlights</div>
            <div className="grid grid-cols-2 gap-4">
              {items.map((item, index) => (
                <WeatherCard
                  title={item.name}
                  data={item.data}
                  unit={item.unit}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center pt-[15%] text-6xl font-serif">
          <span>Please Enter City Name ....</span>
        </div>
      )}
    </div>
  );
};

export default Weather;
