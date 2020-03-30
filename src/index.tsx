import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App/App';
import { AppStateProvider } from './contexts/app.context';

ReactDOM.render(
  <AppStateProvider>
    <App />
  </AppStateProvider>,
  document.getElementById('root')
);
