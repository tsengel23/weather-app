"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const SearchBar = ({
  onSearch,
}: {
  onSearch: (city: string) => void;
}) => {
  const [city, setCity] = useState("");
  return (
    <div className="flex gap-2 border-2 border-red-500">
      <Input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch(city);
          }
        }}
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="border rounded-lg px-3 py-2 flex-1"
      />
      <Button
        onClick={() => onSearch(city)}
        className="bg-black text-white px-4 rounded-lg"
      >
        Search
      </Button>
    </div>
  );
};
