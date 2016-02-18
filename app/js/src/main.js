"strict mode";

import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import Routes from './routes';
import { store } from './store';
import { fetchNewWord } from './actions';

store.dispatch(fetchNewWord());

let appRootElement = document.getElementById('app');

ReactDOM.render(
    <Provider store={ store } >
        <Router history={ browserHistory }>
            {Routes}
        </Router>
    </Provider>,
    appRootElement);