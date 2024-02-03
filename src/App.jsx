import './App.css'
import { useWeather } from './contexts'
import { WeatherCard } from './components/card'
import { FiveDayWeatherCard } from './components/five-day-card';
import { Header } from './components/header';

function App() {

  const {currentWeather, errors, loading} = useWeather();

  return (
    <div className='App flex flex-col flex-center-col'>
    <Header />
    {loading ? <h2 className='heading-1 text-center m-1'>Loading...</h2> : <div >
    {errors?.isError ? <h2 className='m-1 text-center error-text heading-1'>oops, {errors?.error?.message} !</h2> : currentWeather && <div>
        <h3 className='heading-1 text-center m-1'>Current weather details for {currentWeather?.name}</h3>
        <WeatherCard/>
        <h3 className='heading-1 text-center m-1'>5 day forecast</h3>
        <FiveDayWeatherCard />
      </div>}
    </div> }

    </div>
  )
}

export default App
