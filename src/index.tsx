import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { App } from './components';

const element = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(element);

root.render(<App />);
