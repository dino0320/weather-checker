'use client'

import { useState, useEffect } from 'react';
import CurrentWeather from '@/app/components/current-weather'
import WeatherForecast from '@/app/components/weather-forecast'
import { GetCurrentWeather, GetWeatherForecast } from '@/app/lib/open-weather-api'
 
export default function Weathers() {
  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position: GeolocationPosition) => {
        setWeather(await GetCurrentWeather(position.coords.latitude, position.coords.longitude));
        setForecast(await GetWeatherForecast(position.coords.latitude, position.coords.longitude))
      }, error);
    }
  }, []);

  return (
    <div>
      <CurrentWeather weather={weather}/>
      <WeatherForecast forecast={forecast}/>
    </div>
  );
}

function error(error: GeolocationPositionError) {
  console.error("位置情報が利用できません。");
}