import axios, { AxiosResponse } from 'axios';

import { IWeather, IWeatherGroup } from '../models';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  responseType: 'json',
  params: {
    appid: process.env.REACT_APP_WEATHER_API_KEY,
    units: 'metric',
  },
});

export default class WeatherService {
  static async getWeatherByName(name: string): Promise<AxiosResponse<IWeather>> {
    return instance.get<IWeather>('/weather', {
      params: {
        q: name,
      },
    });
  }

  static async getWeatherById(citiesIds: string | number): Promise<AxiosResponse<IWeatherGroup>> {
    return instance.get<IWeatherGroup>('/group', {
      params: {
        id: citiesIds,
      },
    });
  }
}
