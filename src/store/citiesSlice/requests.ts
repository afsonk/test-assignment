import { createAsyncThunk } from '@reduxjs/toolkit';

import WeatherService from '../../api';

export const fetchCityWeatherByName = createAsyncThunk(
  'cities/fetchCity',
  async (query: string) => {
    const { data } = await WeatherService.getWeatherByName(query);

    return data;
  }
);

export const fetchCityWeatherById = createAsyncThunk(
  'cities/fetch',
  async (query: number | string) => {
    const { data } = await WeatherService.getWeatherById(query);

    return data;
  }
);
