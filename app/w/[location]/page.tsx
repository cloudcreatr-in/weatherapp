"use client";

import { cache } from "react";
import { useLocation } from "@/app/contextproviders/locationContext";
import WeatherCard from "@/app/weather/weathercard";
import getWeatherCode from "@/app/weather/getWeathercode";

// const getdata = cache(async (latitude, longitude) => {
//   const date = await fetch(
//     `https://api.tomorrow.io/v4/weather/realtime?location=${latitude},${longitude}&apikey=gYGpDPVQVwjqBYoRuIOEm4SPPQl324Rz`
//   );

//   return date.json();
// });

const pages = ({ params }) => {
  // const { latitude, longitude } = useLocation();
  // // console.log("Weather render");

  // const data = await getdata(latitude, longitude);
  // console.log(data);
  console.log("its working");
  return (
    <div className="flex flex-col items-center justify-center gap-8 ">
      {/* <WeatherCard
        text={getWeatherCode(1001)}
        src="/icons8-partly-cloudy-day-100.png"
      /> */}
      {params.location}
      {/* <WeatherCard
    //     text={data.data.values.humidity}
    //     unit="%"
    //     src="/icons8-moisture-100.png"
    //   />
    //   <WeatherCard
    //     text={data.data.values.precipitationProbability}
    //     unit="%"
    //     src="/icons8-rain-cloud-100.png"
    //   />
    //   <WeatherCard
    //     text={data.data.values.temperature}
    //     src="/icons8-thermometer-up-100 (1).png"
    //     unit="°C"
    //   />
    //   <WeatherCard
    //     unit="m/s"
    //     text={data.data.values.windSpeed}
    //     src="/icons8-wind-100.png"
    //   /> */}
    </div>
  );
};
export default pages;
