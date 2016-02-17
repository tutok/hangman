'use strict';

import React from 'react';
import { Router, Route, IndexRoute, Link, Redirect } from 'react-router';
import App from './components/app';
import BoardPage from './components/board/boardPage';


let Routes = (
    <Route path="/" component={ App } >
        <IndexRoute component={ BoardPage } /> 
    </Route>
);

//<Route path="*" component={NotFoundPage}/>

export default Routes;