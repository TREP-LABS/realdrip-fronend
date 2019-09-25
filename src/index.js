import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './components/routes';
import configureStore from './configureStore';
import './styles.css';

const store = configureStore();

render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);
