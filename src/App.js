import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWeather,
  fetchWeatherByCoordinates,
  selectWeather,
  selectLoading,
  selectError,
} from "./redux/weatherSlice";
import CityInput from "./components/CityInput";
import WeatherDisplay from "./components/WeatherDisplay";
import LoadingIndicator from "./components/LoadingIndicator";
import ErrorDisplay from "./components/ErrorDisplay";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const weather = useSelector(selectWeather);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [city, setCity] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(fetchWeatherByCoordinates({ latitude, longitude }));
        },
        (error) => {
          console.error("Error obtaining geolocation: ", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, [dispatch]);

  const handleSearch = () => {
    if (city.trim() !== "") {
      dispatch(fetchWeather(city));
    }
  };

  return (
    <div className="container">
      <CityInput city={city} setCity={setCity} handleSearch={handleSearch} />

      {loading && <LoadingIndicator />}
      {error && <ErrorDisplay error={error} />}
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
}

export default App;
