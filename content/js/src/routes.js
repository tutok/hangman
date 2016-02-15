'use strict';

import React from 'react';
import { Router, Route, IndexRoute, Link, Redirect } from 'react-router';
import App from './components/app';
import HomePage from './components/home/homePage';


let Routes = (
    <Route path="/" component={ App } >
        <IndexRoute component={ HomePage } /> 
    </Route>
);

//<Route path="*" component={NotFoundPage}/>

export default Routes;