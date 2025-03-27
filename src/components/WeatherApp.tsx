import { useState } from "react";
import axios from "axios";

interface WatherLocation {
  name: string;
  main: { temp: string };
  weather: { description: string }[];
}

const WeatherApp = () => {
  const [location, setLocation] = useState<string>("");
  const [cityWeather, setSityWeather] = useState<WatherLocation>();

  const handleGetWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5796abbde9106b7da4febfae8c44c232&units=metric`
      )
      .then(function (response) {
        setSityWeather(response.data);
      });
    setLocation("");
  };

  return (
    <div className="flex justify-center py-20 min-h-screen bg-gray-100">
      <div className="min-w-sm sm:w-1/4 md:w-1/3 bg-[url(/src/assets/clouds-49520_1280.jpg)] bg-cover p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl text-gray-200 mb-5">Weater App</h1>
        <div className="grid grid-cols-1 md:grid-cols-[_2fr_1fr] gap-4 mb-5">
          <input
            type="text"
            placeholder="Enter city"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-white p-2 me-2"
          />
          <button
            className="bg-blue-400 text-white py-2 px-4 rounded-md"
            onClick={handleGetWeather}
          >
            Get Weather
          </button>
        </div>
        <div className="flex flex-col items-center bg-blue-400 rounded-lg shadow-lg text-white p-20">
          <h2 className="text-4xl mb-3">{cityWeather?.name}</h2>
          <p>{cityWeather?.main?.temp ?? "Brak danych"}</p>
          <p>{cityWeather?.weather?.[0]?.description ?? "Brak opisu"}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;

//   const handleOnClick = () => {
//     const fetchWeather = async () => {
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5796abbde9106b7da4febfae8c44c232&units=metric`
//       );
//       const data = await response.json();
//       setWeather(data);
//     };
//     fetchWeather();
//   };
