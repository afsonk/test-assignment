import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Statuses } from '../../models';

import { fetchCityWeatherByName } from './requests';
import { selectCityId } from './selectors';
import { ICitiesState } from './types';

const initialState: ICitiesState = {
  data: [],
  status: Statuses.IDLE,
  message: null,
};

const citySlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    deleteCityById(state, { payload }: PayloadAction<number>) {
      state.data = state.data.filter((city) => city.id !== payload);
    },
    resetStatus(state) {
      state.status = Statuses.IDLE;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCityWeatherByName.pending, (state) => {
      state.status = Statuses.LOADING;
    });

    builder.addCase(fetchCityWeatherByName.fulfilled, (state, { payload }) => {
      const cityIndex = selectCityId(state.data, payload.id);

      if (cityIndex !== null) {
        state.data[cityIndex] = payload;
      } else {
        state.data.push(payload);
      }

      state.status = Statuses.IDLE;
    });

    builder.addCase(fetchCityWeatherByName.rejected, (state, { meta }) => {
      state.status = Statuses.ERROR;
      state.message = `${meta.arg} city is not found`;
    });
  },
});

export default citySlice.reducer;
export const { deleteCityById, resetStatus } = citySlice.actions;
