import React from 'react'

const WeatherCard = (props) => {
  return (
    <div className='flex-col bg-sky-700 space-y-1 px-10 py-3 text-white text-center rounded-md'>
        <div className='text-base font-serif'>{props.title}</div>
        <div className='text-2xl font-bold'>{props.data} {props.unit}</div>
    </div>
  )
}

export default WeatherCard