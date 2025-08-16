import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function WeatherForecast({ forecast }: { forecast: any }) {
  if (forecast === undefined || forecast === null) {
    return;
  }

  return (
    <div className="grid grid-flow-col grid-rows-1 gap-4 overflow-x-auto">
      {forecast.list.map((weather: any) => (
        <div key={weather.dt}>
          <Card>
            <CardHeader>
              <CardTitle>{weather.weather[0].main}</CardTitle>
              <CardDescription>
                {getDate(weather.dt).toLocaleDateString()}<br/>
                {getDate(weather.dt).toLocaleTimeString()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-flow-cols grid-flow-rows gap-4">
                <div className="text-2xl">{weather.main.temp}℃</div>
                <div className="w-30"><Image
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  width={200}
                  height={200}
                  alt="Picture of the weather icon"
                  priority
                /></div>
                <div>
                  <div className="text-muted-foreground text-sm">feels like</div>
                  {weather.main.feels_like}℃
                </div>
                <div>
                  <div className="text-muted-foreground text-sm">min</div>
                  {weather.main.temp_min}℃
                </div>
                <div>
                  <div className="text-muted-foreground text-sm">max</div>
                  {weather.main.temp_max}℃
                </div>
                <div>
                  <div className="text-muted-foreground text-sm">rain</div>
                  {weather.rain === undefined ? 0 : weather.rain['3h']}mm
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}

function getDate(dt: number) {
  return new Date(dt * 1000);
}