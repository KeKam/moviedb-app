import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './components/app/app';
import { AppStateProvider } from './contexts/app.context';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.register();
