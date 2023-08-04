import React from "react";
import myImage from "../weather.png";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const HomePage = () => {

const navigate=useNavigate();

const handleChange=()=>{
  navigate('/weather')
}

  return (
    <div className="p-4 bg-black h-full min-h-screen ">
      <div className="flex items-center justify-center space-x-12 h-screen">
        <div class="min-h-screen flex items-center justify-center p-8 rounded-full">
          <div class="max-w-sm w-full mx-auto rounded-lg shadow-lg">
            <img src={myImage} alt="WeatherLOGO"/>
          </div>
        </div>
        <div className="flex flex-col text-white font-semibold items-center justify-center space-y-8">
          <span className="text-2xl">🌙</span>
          <div className="flex flex-col items-center justify-center space-y-3">
            <h2 className="text-5xl">SENSOR</h2>
            <h5 className="text-slate-400">Weather App</h5>
          </div>
          <button className="bg-sky-500 hover:bg-sky-700 px-4 py-2 rounded-full" onClick={handleChange}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
