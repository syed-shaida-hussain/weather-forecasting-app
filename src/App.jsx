import './App.css'
import logo from "./assets/weather-app-logo.png"

function App() {
  return (
    <div className='App'>
      <header className='header flex flex-center wrap justify-sp-ar'>
        <div className='flex flex-center'>
          <img src={logo} alt='weather-app-logo' className='logo'  />
          <h2 className='heading-1 text-center m-1'>Thorain</h2>
        </div>
        <div className='flex flex-center justify-sp-bw'>
        <div className='flex flex-center search-bar'>
          <span className="material-symbols-outlined">search</span>
          <input type='text' placeholder='Enter city name here...' className='input' />
        </div>
        <button className='search-btn'>Search</button>
        </div>


        <h2 className='heading-1 text-center m-1'>Live weather!</h2>
      </header>
      <h3 className='heading-1 text-center m-1'>Current weather details</h3>
      <main className='card'>
        <div className='text-center flex flex-col gap-15'>
          <span >4deg c</span>
          <div>clear sky</div>
          <span className="material-symbols-outlined">sunny</span>          <div>Min 1deg | Max 10deg</div>
          <div>Humidity : 23%</div>
          <div>Wind speed : 1km/h</div>
          <div>Wind Direction : west/east</div>
        </div>
      </main>
    </div>
  )
}

export default App
