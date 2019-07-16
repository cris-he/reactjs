import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './utils/services/serviceWorker';

/* Static CSS */
import './utils/css/main.css';

/* Routes */
import Routes from './routes';

/* Redux */
import { Provider } from 'react-redux';
import configStore from './store/config-store';
const store = configStore();

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>
    , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
