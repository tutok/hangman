"strict mode";

import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { Router, browserHistory } from 'react-router';
import Routes from './routes';
import { appStore } from './store';


let appRootElement = document.getElementById('app');

ReactDOM.render(
    <Provider store={ appStore } >
        <Router history={ browserHistory }>
            {Routes}
        </Router>
    </Provider>,
    appRootElement);