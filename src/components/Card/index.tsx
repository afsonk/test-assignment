import { Button, Card, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import React, { FC, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { IWeather } from '../../models';
import { useAppDispatch } from '../../store';
import { deleteCityById } from '../../store/citiesSlice';
import { fetchCityWeatherByName } from '../../store/citiesSlice/requests';
import { getItemImage, getItemTemp } from '../../utils';

import { CardBottomActions } from './CardBottomActions';

interface IProps {
  city: IWeather;
}

export const CityCard: FC<IProps> = ({ city }) => {
  const dispatch = useAppDispatch();

  const deleteCity = useCallback((): void => {
    dispatch(deleteCityById(city.id));
  }, []);

  const handleRefresh = useCallback((): void => {
    dispatch(fetchCityWeatherByName(city.name));
  }, []);

  return (
    <Card sx={{ maxWidth: '200px', width: '100%', textAlign: 'center' }} data-testid='cardItem'>
      <CardContent>
        <Typography variant='h5' component='div'>
          {city.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary' data-testid='cardItemTemp'>
          {getItemTemp(city.main.temp)}
        </Typography>
        <Typography variant='body2'>
          <img src={getItemImage(city.weather[0].icon)} alt={city.weather[0].description} />
        </Typography>
        <Typography variant='body2'>{city.weather[0].description}</Typography>
        <Link to={`${city.name}`} style={{ textDecoration: 'none', color: '#fff' }}>
          <Button>Detail</Button>
        </Link>
      </CardContent>
      <CardBottomActions handleRefresh={handleRefresh} handleDelete={deleteCity} />
    </Card>
  );
};
