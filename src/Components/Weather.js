import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import WeatherCard from "./WeatherCard";
import WeatherImage from "./WeatherImage";
import {sunrise,sunset,formattedDate} from './TimeConversion'
import { regionNames } from "./CountryCode";
import temp from '../images/temprature.png'
import press from '../images/icons8-pressure-96.png'
import humid from '../images/icons8-humidity-96.png'
import wind from '../images/icons8-wind-96.png'
import cloud from '../images/icons8-cloud-96.png'
import visib from '../images/icons8-visibility-96.png'
import sunri from '../images/icons8-sunrise-96.png'
import sunse from '../images/icons8-sunset-96.png'
import axios from "axios";

const Weather = () => {

  const [city, setcity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=17769e544a4a37e4e17e0e777ddd8fba`
      );
      setWeatherData(res.data);
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
      image: temp
    },
    {
      name: "Pressure",
      data: weatherData ? weatherData.main.pressure : null,
      unit: "Pa",
      image: press
    },
    {
      name: "Humidity",
      data: weatherData ? weatherData.main.humidity : null,
      unit: "%",
      image: humid
    },
    {
      name: "Wind",
      data: weatherData ? weatherData.wind.speed : null,
      unit: "Km/hr",
      image: wind
    },
    {
      name: "Clouds",
      data: weatherData ? weatherData.clouds.all : null,
      image: cloud
    },
    {
      name: "Visibility",
      data: weatherData ? weatherData.visibility / 1000 : null,
      unit: "Km",
      image: visib
    },
    {
      name: "Sunrise",
      data: weatherData ? sunrise(weatherData.sys.sunrise): null,
      image: sunri
    },
    {
      name: "Sunset",
      data: weatherData ? sunset(weatherData.sys.sunset) : null,
      image: sunse
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
                  image={item.image}
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
