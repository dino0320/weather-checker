import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CurrentWeather({ weather }: { weather: any }) {
  if (weather === undefined) {
    return;
  }
  
  return (
    <div className="text-2xl">
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="text-3xl">{weather.weather[0].main}</div>
          </CardTitle>
          <CardDescription>
            <div>{weather.weather[0].description}</div></CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-flow-cols grid-flow-rows gap-4">
            <div className="text-5xl">{weather.main.temp}℃</div>
            <div className="col-start-2 w-50"><Image
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              width={200}
              height={200}
              alt="Picture of the weather icon"
              priority
            /></div>
            <div className="col-start-1">
              <div className="text-muted-foreground text-sm">feels like</div>
              <div>{weather.main.feels_like}℃</div>
            </div>
            <div className="col-start-1 col-span-2">
              <div className="text-muted-foreground text-sm">min and max</div>
              <div>{weather.main.temp_min}℃ - {weather.main.temp_max}℃</div>
            </div>
            <div className="col-start-1">
              <div className="text-muted-foreground text-sm">rain</div>
              <div>{weather.rain === undefined ? 0 : weather.rain['1h']}mm</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}