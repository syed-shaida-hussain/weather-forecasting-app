import { useWeather } from "../contexts";
import axios from 'axios';
import logo from "../assets/weather-app-logo.png"
import { useEffect } from "react";

export const Header = () => {
// Context states
const { setCurrentWeather , setErrors, errors, setLoading, searchQuery, setSearchQuery, setFutureWeather, unit , setUnit} = useWeather();

const fetchWeather = async () => {
    try{
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=${unit}&appid=b9360aeee730297ae7fa5fb867ae40dd`);

      const response2 = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${response?.data?.coord?.lat}&lon=${response?.data?.coord?.lon}&units=${unit}&appid=b9360aeee730297ae7fa5fb867ae40dd`);

      if(response.status === 200) {
        setErrors({...errors , isError : false  , error : {}})
        setCurrentWeather(response?.data)
      }

      if(response2.status === 200) {
        setErrors({...errors , isError : false  , error : {}})
        setFutureWeather(response2)
      }
      setLoading(false)

    } catch(e){
      setErrors({...errors , isError : true  , error : e.response.data})
      setLoading(false)
    }
  }

const keyDownHandler = (e) => {
    if(e.target.value.length > 0 && e.key === "Enter") {
        setLoading(true)
        fetchWeather();
    }

    if(e.target.value.length <= 1 ) {
        setCurrentWeather(null)
        setErrors({...errors , isError : false  , error : {}})
    }
}

const searchHandler = () => {
    setLoading(true)
    fetchWeather();

    if(searchQuery.length <= 1 ) {
        setCurrentWeather(null)
        setErrors({...errors , isError : false  , error : {}})
    }
}

const toggleUnit = () => {
    setUnit(unit === "metric" ? "imperial" : "metric");
}

useEffect(() => {
    searchQuery.length > 0 && fetchWeather();
},[unit])
    
  return (
    <header className='header flex flex-center wrap justify-sp-ar gap-15'>
    <div className='flex flex-center'>
      <img src={logo} alt='weather-app-logo' className='logo'  />
      <h2 className='heading-1 text-center m-1'>Thorain</h2>
    </div>
    <div className='flex flex-center justify-sp-bw'>
    <div className='flex flex-center search-bar'>
      <span className="material-symbols-outlined">search</span>
      <input type='text' placeholder='Enter city name here...' className='input' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={keyDownHandler} />
      <button className="toggle-btn" onClick={() => searchHandler()}>Search</button>
    </div>
    </div>
    <div className="flex flex-center gap-15 heading-1">
    <button className="toggle-btn" onClick={toggleUnit}>{unit === "metric" ? 'Celsius' : "Fahrenheit"}</button>
    </div>
  </header>
  )
}
