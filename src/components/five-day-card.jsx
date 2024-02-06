import { useWeather } from "../contexts"

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
};

export const FiveDayWeatherCard = () => {
  const {futureWeather} = useWeather();

  const filterForecastByFirstObjTime = (forecastData) => {
    if (!forecastData) {
      return [];
    }

    // Here, i am taking second element as first element because API is giving old (yesterday's) data as well
    const firstObjTime = forecastData[1].dt_txt.split(" ")[1];
    return forecastData.filter((data) => data.dt_txt.endsWith(firstObjTime));
  };

  const filteredForecast = filterForecastByFirstObjTime(futureWeather?.data?.list);

  return (<div className="card w-full flex flex-col gap-50">
    {
      filteredForecast?.map((item , index) => <section key={index} className='flex flex-center extended-weather-card gap-50 gap-20 text-center'>
      <div className="flex-3 lh-md">{new Date(item?.dt_txt).toLocaleDateString('en-US', options)}</div> 
      <div className="flex-1">{item?.main?.feels_like}&deg;</div>
      <img src = {`https://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`} alt='weather condition icon' width={90} height={90} className='text-center m-auto' />
      <div className="flex-1">{item?.weather[0]?.description}</div>
      <hr className="hr" />
      {/* Here, i am using the icons provided by the openweather API */}
    </section>)
    }
  </div>

  )
}
