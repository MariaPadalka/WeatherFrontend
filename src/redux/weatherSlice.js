import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_PORT = process.env.REACT_APP_API_PORT || 5000;
// Асинхронний thunk для отримання погоди за назвою міста
export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city, thunkAPI) => {
    try {
      console.log(`http://localhost:${API_PORT}/weather?city=${city}`);
      const response = await axios.get(
        `http://localhost:${API_PORT}/weather?city=${city}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Асинхронний thunk для отримання погоди за координатами
export const fetchWeatherByCoordinates = createAsyncThunk(
  "weather/fetchWeatherByCoordinates",
  async ({ latitude, longitude }, thunkAPI) => {
    try {
      console.log(
        `http://localhost:${API_PORT}/weather-by-coordinates?lat=${latitude}&lon=${longitude}`
      );

      const response = await axios.get(
        `http://localhost:${API_PORT}/weather-by-coordinates?lat=${latitude}&lon=${longitude}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weatherData: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchWeatherByCoordinates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherByCoordinates.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData = action.payload;
      })
      .addCase(fetchWeatherByCoordinates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default weatherSlice.reducer;

export const selectWeather = (state) => state.weather.weatherData;
export const selectLoading = (state) => state.weather.loading;
export const selectError = (state) => state.weather.error;
