"use client";

import { useState } from "react";
import { WeatherData } from "./schemas/weather.schema";
import { fetchWeather } from "../lib/weather";
import { SearchBar } from "./_components/SearchBar";
import { WeatherCard } from "./_components/WeatherCard";

export default function Home() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState<"C" | "F">("C");

  const handlerSearch = async (city: string) => {
    try {
      setError("");
      const result = await fetchWeather(city);
      setData(result);
    } catch (e) {
      setError("Weather data not available 🌧️");
      setData(null);
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 border-2 ">
      <div className="bg-white p-8 rounded-2xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">⛅ Weather App</h1>
        <SearchBar onSearch={handlerSearch} />
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {data && <WeatherCard data={data} unit={unit} />}
        <div className="flex gap-2 my-3">
          <button
            type="button"
            onClick={() => setUnit("C")}
            className="font-bold text-red-600"
          >
            °C
          </button>
          <button
            type="button"
            onClick={() => setUnit("F")}
            className="font-bold text-blue-600"
          >
            °F
          </button>
        </div>
      </div>
    </div>
  );
}
