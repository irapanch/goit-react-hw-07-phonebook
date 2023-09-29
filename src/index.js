import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import 'modern-normalize';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Global } from './styles/Global';
import { Provider } from 'react-redux';
import { store } from 'redux/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
    <Global />
  </ThemeProvider>
);
