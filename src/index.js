import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import { LoadingProvider } from './contexts/LoadingContext';
import { setupHotjar } from './helpers/utils';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <LoadingProvider>
                <HelmetProvider>
                    <App/>
                </HelmetProvider>
            </LoadingProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
setupHotjar();
