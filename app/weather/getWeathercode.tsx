export default function getWeatherCode(code: number): string {
  const weatherCode = [
    { code: 1000, description: "Clear" },
    { code: 1001, description: "Cloudy" },
    { code: 1100, description: "Mostly Clear" },
    { code: 1101, description: "Partly Cloudy" },
    { code: 2000, description: "Fog" },
    { code: 2100, description: "Light Fog" },
    { code: 3000, description: "Light Wind" },
    { code: 3001, description: "Wind" },
    { code: 3002, description: "Strong Wind" },
    { code: 4000, description: "Drizzle" },
    { code: 4001, description: "Rain" },
    { code: 4200, description: "Light Rain" },
    { code: 4201, description: "Heavy Rain" },
    { code: 5000, description: "Snow" },
    { code: 5001, description: "Flurries" },
    { code: 5100, description: "Light Snow" },
    { code: 5101, description: "Heavy Snow" },
    { code: 6000, description: "Freezing Drizzle" },
    { code: 6001, description: "Freezing Rain" },
    { code: 6200, description: "Light Freezing Rain" },
    { code: 6201, description: "Heavy Freezing Rain" },
    { code: 7000, description: "Ice Pellets" },
    { code: 7101, description: "Heavy Ice Pellets" },
    { code: 7102, description: "Light Ice Pellets" },
    { code: 8000, description: "Thunderstorm" },
  ];

  const { description } = weatherCode.find((weather) => weather.code === code);

  return description;
}
