import { IWeather } from './IWeather';

export interface IWeatherGroup {
  cnt: number;
  list: Array<IWeather>;
}
