import { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

// context provider
const WeatherProvider = ({children}) => {
    const [currentWeather , setCurrentWeather] = useState(null);
    const [searchQuery,setSearchQuery] = useState("");
    const [errors , setErrors] = useState({
        isError : false,
        error : {}
    });
    const [loading , setLoading] = useState(false);
    const [futureWeather, setFutureWeather] = useState(null)
    const [unit, setUnit] = useState("metric");

    return <WeatherContext.Provider value={{currentWeather, setCurrentWeather, searchQuery, setSearchQuery, errors, setErrors, loading, setLoading, futureWeather, setFutureWeather, unit, setUnit}}>
        {children}
    </WeatherContext.Provider>
 }

// custom hook
const useWeather = () => useContext(WeatherContext)

export {WeatherProvider , useWeather}