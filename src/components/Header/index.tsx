import { AppBar, Box, Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { Link, useLocation } from 'react-router-dom';

import { RouteNames } from '../../models';

import { SearchBar } from './SearchBar';

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }} data-testid='header'>
      <AppBar position='static'>
        <Toolbar>
          <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}>
            <Typography variant='h6' component='div'>
              Codica Weather App
            </Typography>
          </Link>
          {pathname === RouteNames.HOME && <SearchBar />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
