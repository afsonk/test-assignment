import { Box, Container, Typography } from '@mui/material';
import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { NotFound } from '../../components/Status/NotFound';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useAppDispatch } from '../../store';
import { fetchCityWeatherByName } from '../../store/citiesSlice/requests';
import { selectItemFromStore } from '../../store/citiesSlice/selectors';
import { getItemImage } from '../../utils';

const Detailed: FC = () => {
  const { cityName } = useParams();
  const dispatch = useAppDispatch();
  const city = useTypedSelector(selectItemFromStore(cityName));

  useEffect(() => {
    if (cityName && !city) {
      dispatch(fetchCityWeatherByName(cityName));
    }
  }, [cityName]);

  return (
    <Container
      sx={{ mt: '20px', display: 'flex', justifyContent: 'space-around' }}
      data-testid='detailedPage'
    >
      {city ? (
        <>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant='h3' component='div'>
              {city.name} <span style={{ color: '#f15f5f' }}>{city.sys.country}</span>
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              {`${city.main.temp.toFixed(1)}°C`} {new Date(city.dt * 1000).toLocaleTimeString()}
            </Typography>
            <Typography variant='body2'>
              <img
                src={getItemImage(city.weather[0].icon, true)}
                alt={city.weather[0].description}
              />
            </Typography>
            <Box>
              <Typography variant='h6'>{city.weather[0].main}</Typography>
              <Typography variant='h6'>({city.weather[0].description})</Typography>
            </Box>
          </Box>
          <Box sx={{ mt: '20px' }}>
            <Typography variant='h6'>Feels like: {city.main.feels_like}°C</Typography>
            <Typography variant='h6'>
              Atmospheric pressure on the ground level: {city.main.grnd_level}
            </Typography>
            <Typography variant='h6'>Humidity: {city.main.humidity}%</Typography>
            <Typography variant='h6'>Pressure: {city.main.pressure}hPa</Typography>
            <Typography variant='h6'>Wind direction: {city.wind.deg}%</Typography>
            <Typography variant='h6'>Wind speed: {city.wind.speed}m/s</Typography>
          </Box>
        </>
      ) : (
        <NotFound />
      )}
    </Container>
  );
};

export default Detailed;
