# Thorain , weather forecasting app.
## Overview
This project delivers a robust weather forecasting web app, built with React+Vite and powered by the OpenWeatherMap API. Designed for ease of use and scalability, it's deployed on Vercel for seamless accessibility.

## Accessing the App
Live version: Visit the app directly at https://thorain.vercel.app/

## Running the app locally
Follow these steps to run the app locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/syed-shaida-hussain/weather-forecasting-app
    ```

2. Navigate to the project directory:
    ```bash
    cd weather-forecasting-app
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Use your open weather API_KEY in both API url's in the header.js component

5. Start the development server:
    ```bash
    npm run dev
    ```

6. Open your browser and visit `http://localhost:5173` to view the app.

## Configuration
- OpenWeather API: Obtain your API key by signing up at [OpenWeatherMap](https://openweathermap.org/) and replace `your-api-key` in the API URL in header.js file.

## Usage 
1. Search for a location:
Enter a city name in the search bar and press the enter key in case of both laptops and mobile phones.
On mobile phones, the "Enter" key is typically represented by a symbol that looks like a bent arrow or a horizontal line with an arrow pointing to the left or right.

2. View weather information:
After pressing the enter key, the app will display the current weather conditions and forecast for next five days for the selected location.

3. Toggle between celsius and fahrenheit values: 
There is a button that serves as a temperature unit toggler. The user can toggle between celsius and fahrenheit values by clicking on the button present right next to the search bar. The default value for this button is celsius.

## Features
- Current weather information display
- Temperature, humidity, and wind speed details
- 5-day weather forecast
- The app is fully responsive. The responsiveness of the app is achieved by using media queries.
- Temperature unit toggling option

## Contributing
Feel free to contribute to this project by opening issues or creating pull requests. Any contributions are welcome!
