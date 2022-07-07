import { IWeather } from '../../models';

export const cityMockList: Array<IWeather> = [
  {
    base: 'stations',
    clouds: { all: 0 },
    cod: 200,
    coord: { lon: 36.25, lat: 50 },
    dt: 1657218789,
    id: 706483,
    main: {
      temp: 22.19,
      feels_like: 22.24,
      temp_min: 22.19,
      temp_max: 22.19,
      pressure: 1014,
      humidity: 68,
      sea_level: 1014,
      grnd_level: 100,
    },
    name: 'Kharkiv',
    sys: { country: 'UA', sunrise: 1657157652, sunset: 1657215909, id: 100, type: 22 },
    timezone: 10800,
    visibility: 10000,
    weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }],
    wind: { speed: 5.02, deg: 17, gust: 10.22 },
  },
  {
    coord: {
      lon: 30.5167,
      lat: 50.4333,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    base: 'stations',
    main: {
      temp: 22.19,
      feels_like: 22.24,
      temp_min: 22.19,
      temp_max: 22.19,
      pressure: 1014,
      humidity: 68,
      sea_level: 1014,
      grnd_level: 100,
    },
    visibility: 10000,
    wind: {
      speed: 4.24,
      deg: 350,
      gust: 8.66,
    },
    clouds: {
      all: 99,
    },
    dt: 1657219697,
    sys: {
      type: 2,
      id: 2003742,
      country: 'UA',
      sunrise: 1657158902,
      sunset: 1657217412,
    },
    timezone: 10800,
    id: 703448,
    name: 'Kyiv',
    cod: 200,
  },
];
