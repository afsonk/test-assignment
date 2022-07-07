import { IWeather, Statuses } from '../../models';

export interface ICitiesState {
  status: Statuses;
  data: Array<IWeather>;
  message: string | null;
}
