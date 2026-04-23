import { error } from "console";
import { WeatherData, WeatherSchema } from "../app/schemas/weather.schema";

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
    // `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch weather");
  }

  const json = await res.json();

  // 🔥 Runtime шалгалт
  return WeatherSchema.parse(json);
};
