'use client'

import { useState, useEffect } from 'react';
import CurrentWeather from '@/app/components/current-weather'
import Error from '@/app/components/error'
import WeatherForecast from '@/app/components/weather-forecast'
import { GetCurrentWeather, GetWeatherForecast } from '@/app/lib/open-weather-api'
 
export default function Weathers() {
  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState();
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position: GeolocationPosition) => {
        setWeather(await GetCurrentWeather(position.coords.latitude, position.coords.longitude));
        setForecast(await GetWeatherForecast(position.coords.latitude, position.coords.longitude));
      }, (error: GeolocationPositionError) => {
        setErrorMessage(error.message);
      });
    }
  }, []);

  if (errorMessage === undefined) {
    return (
      <div>
        <CurrentWeather weather={weather}/>
        <WeatherForecast forecast={forecast}/>
      </div>
    );
  }

  return (<Error title='Failed to get the current location' description={errorMessage} />);
}