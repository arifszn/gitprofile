import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';
import { LoadingProvider } from './contexts/LoadingContext';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <LoadingProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </LoadingProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
