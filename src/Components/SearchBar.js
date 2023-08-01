import React,{useState} from 'react'
import axios from 'axios'



const SearchBar = () => {

    const[city,setCity]=useState();

    const api= process.env.API_KEY;

    const handleCityChange=(e)=>{
        setCity(e.target.value)
    }
const handleSubmit=async()=>{
    try{
    const res= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=17769e544a4a37e4e17e0e777ddd8fba`)
    console.log(res);
    console.log(api)
    }catch(err){
        console.log(`Error Retrieving Data`,{err})
    }
}

  return (
    <div>
        <div>
            <input type="text" value={city} onChange={handleCityChange} placeholder='Enter City Name' />
            <button onClick={handleSubmit}>Search</button>
        </div>
    </div>
  )
}

export default SearchBar