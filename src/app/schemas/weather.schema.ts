import z from "zod";

export const WeatherSchema = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    humidity: z.number(),
  }),
  weather: z.array(
    z.object({
      main: z.string(),
      description: z.string(),
      icon: z.string(),
    })
  ),
});

// ⬇️ AUTO TypeScript type
export type WeatherData = z.infer<typeof WeatherSchema>;
