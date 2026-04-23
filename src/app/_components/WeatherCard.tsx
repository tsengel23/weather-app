import { WeatherData } from "../schemas/weather.schema";

export const WeatherCard = ({
  data,
  unit,
}: {
  data: WeatherData;
  unit: "C" | "F";
}) => {
  const temp =
    unit === "C"
      ? Math.round(data.main.temp)
      : Math.round(data.main.temp) * 1.8 + 32;
  // console.log("unit:", unit, "temp:", temp);
  return (
    <div className="mt-6 p-6 border-2 rounded-xl text-center border-green-600">
      <h2 className="text-2xl font-bold">{data.name}</h2>
      <p className="text-4xl mt-2">
        {Math.round(temp)}°{unit}
      </p>
      <p className="mt-2">💧{data.main.humidity}%</p>
    </div>
  );
};

// 👉 Type гараар бичээгүй
// → Zod-оос ирсэн 👌
