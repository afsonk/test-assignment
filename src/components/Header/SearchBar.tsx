import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { ChangeEvent, FC, FormEvent, useState } from 'react';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Statuses } from '../../models';
import { useAppDispatch } from '../../store';
import { resetStatus } from '../../store/citiesSlice';
import { fetchCityWeatherByName } from '../../store/citiesSlice/requests';

import { Search, SearchIconWrapper, StyledInputBase } from './styles';

export const SearchBar: FC = () => {
  const [query, setQuery] = useState('');
  const { status } = useTypedSelector((state) => state.cities);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchCityWeatherByName(query));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);

    if (status === Statuses.ERROR) {
      dispatch(resetStatus());
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginLeft: 'auto' }} data-testid='searchBar'>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder='Search…'
          inputProps={{ 'aria-label': 'search' }}
          value={query}
          onChange={handleChange}
        />
        <Button type='submit' variant='contained' disabled={!query} data-testid='submitButton'>
          Add
        </Button>
      </Search>
    </form>
  );
};
