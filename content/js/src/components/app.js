'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';

class App extends React.Component{
    render() {
        return (
            <div>
                <p>hangman</p>
               { this.props.children }
            </div>
        );
    }
};

export default App;