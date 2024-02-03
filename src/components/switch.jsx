import { useWeather } from "../contexts";

export const ToggleSwitch = ({ fetchWeather}) => {
    const {searchQuery , unit, setUnit} = useWeather();

    const toggleUnit = () => {
        setUnit(unit === "metric" ? "imperial" : "metric");
        searchQuery.length > 0 && fetchWeather();
    }
console.log(unit)
  return (
    <button className="toggle-btn" onClick={() => toggleUnit()}>Toggle unit</button>
  )
}
