import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

type renderTestAppProps = {
  path?: string;
  store: Store;
};

export function renderTestApp(
  children: ReactNode,
  { path = '/', store = {} as Store }: renderTestAppProps
) {
  return render(
    <MemoryRouter initialEntries={[{ pathname: path }]}>
      <Provider store={store}>{children}</Provider>
    </MemoryRouter>
  );
}

export function renderWithRouter(children: ReactNode, path = '/') {
  return render(<MemoryRouter initialEntries={[{ pathname: path }]}>{children}</MemoryRouter>);
}
