'use server'

const openWeatherApiBaseUrl = 'https://api.openweathermap.org/data/2.5';

async function GetCurrentWeather(latitude: number, longitude: number) {
  const weather: Response = await fetch(`${openWeatherApiBaseUrl}/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`);
  const weatherJson: any = await weather.json();
  if (weatherJson.cod === 200) {
    return weatherJson;
  }

  console.error("現在の天気を取得できませんでした。");
  return null;
}

async function GetWeatherForecast(latitude: number, longitude: number) {
  const forecast: Response = await fetch(`${openWeatherApiBaseUrl}/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`);
  const forecastJson: any = await forecast.json();
  if (forecastJson.cod === '200') {
    return forecastJson;
  }

  console.error("天気予報を取得できませんでした。");
  return null;
}

export { GetCurrentWeather, GetWeatherForecast }