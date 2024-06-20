import React from "react";
import { TextField, Button, Box } from "@mui/material";
import "../styles/search.css";
const CityInput = ({ city, setCity, handleSearch }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <Box className="search-container">
      <TextField
        label="Enter city"
        variant="outlined"
        value={city}
        onKeyDown={handleKeyPress}
        onChange={(e) => setCity(e.target.value)}
        sx={{ flex: 5, marginRight: 1 }}
      />
      <Button
        sx={{ flex: 2, height: "100%" }}
        variant="contained"
        onClick={handleSearch}
      >
        Get Weather
      </Button>
    </Box>
  );
};

export default CityInput;
