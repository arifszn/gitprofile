import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <HelmetProvider>
                <App/>
            </HelmetProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
