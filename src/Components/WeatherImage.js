import React from 'react'
import sunlight from "../images/icons8-sunlight.svg";
import cloud from '../images/icons8-cloudy-cloud-96.png';
import rainfall from '../images/icons8-rainfall-64.png'
import haze from '../images/icons8-haze-96.png'
import smoke from '../images/icons8-smoke-80.png'
import defaultImage from "../weather.png";


const WeatherImage = ({weatherType}) => {
    let imageSource;
    let altText;
  
    if (weatherType === 'Clear') {
      imageSource = sunlight;
      altText = 'Sunlight';
    } else if (weatherType === 'Rain') {
      imageSource = rainfall;
      altText = 'Rain';
    } else if (weatherType === 'Clouds') {
      imageSource = cloud;
      altText = 'Cloud';
    } 
    else if (weatherType === 'Haze') {
        imageSource = haze;
        altText = 'haze';
      }
      else if (weatherType === 'Smoke') {
        imageSource = smoke;
        altText = 'smoke';
      }else {
      // Default image or error handling
      imageSource = defaultImage; // Provide a default image source
      altText = 'Unknown';
    }
  
    return (
      <div className="flex items-center justify-center">
        <img src={imageSource} className="w-48" alt={altText} />
      </div>
    );
}

export default WeatherImage