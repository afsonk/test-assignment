import { IWeather } from '../../models';
import { RootState } from '../index';

export const selectCityId = (cities: Array<IWeather>, id: number) => {
  const deletedItem = cities.find((item) => item.id === id);

  if (deletedItem !== undefined) {
    return cities.indexOf(deletedItem);
  }

  return null;
};

export const selectItemFromStore =
  (name = '') =>
  ({ cities }: RootState) => {
    return cities.data.find((item) => item.name === name);
  };
