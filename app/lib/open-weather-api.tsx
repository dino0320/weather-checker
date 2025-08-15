'use server'

const openWeatherApiBaseUrl = 'https://api.openweathermap.org/data/2.5';

async function GetCurrentWeather(latitude: number, longitude: number) {
  const data: Response = await fetch(`${openWeatherApiBaseUrl}/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`);
  return await data.json();
}

async function GetWeatherForecast(latitude: number, longitude: number) {
  const data: Response = await fetch(`${openWeatherApiBaseUrl}/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`);
  return await data.json();
}

export { GetCurrentWeather, GetWeatherForecast }