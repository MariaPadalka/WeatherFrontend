import React from "react";
import { Typography } from "@mui/material";

const WeatherDisplay = ({ weather }) => {
  return (
    <div className="display">
      <Typography variant="h4">Weather for {weather.name}</Typography>
      <Typography variant="body1">
        Temperature: {weather.main.temp}°C
      </Typography>
      <Typography variant="body1">
        Humidity: {weather.main.humidity}%
      </Typography>
      <Typography variant="body1">
        Wind Speed: {weather.wind.speed} m/s
      </Typography>
    </div>
  );
};

export default WeatherDisplay;
