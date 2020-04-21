import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { AppStateProvider } from './contexts/app.context';

ReactDOM.render(
  <BrowserRouter>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
