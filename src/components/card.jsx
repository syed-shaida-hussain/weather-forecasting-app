import { useWeather } from "../contexts"

export const WeatherCard = () => {
  const {currentWeather} = useWeather();
  return (
    <section className='card w-full m-auto'>
    <div className='text-center flex flex-col gap-15'>
      <h2 >Feels like {currentWeather?.main?.temp}&deg;</h2>
      <img src = {`https://openweathermap.org/img/wn/${currentWeather?.weather[0]?.icon}@2x.png`} alt='weather condition icon' width={50} height={50} className='text-center m-auto' />
      <div>Min {currentWeather?.main?.temp_min}&deg; | Max {currentWeather?.main?.temp_max}&deg;</div>
      <div>{currentWeather?.weather[0]?.main} / {currentWeather?.weather[0]?.description} </div>
      <div>Humidity : {currentWeather?.main?.humidity}%</div>
      <div>Wind speed : {currentWeather?.wind?.speed} km/h {currentWeather?.wind?.deg}&deg; </div>
    </div>
  </section>
  )
}
