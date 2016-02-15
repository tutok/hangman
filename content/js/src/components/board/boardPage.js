'use strict';

import React from 'react';
import { connect } from 'react-redux';
import keydown from 'react-keydown';
import Hangman from './hangman'; 

class Board extends React.Component{
    
    componentWillReceiveProps( { keydown } ) {
        if ( keydown.event ) {
            console.log( keydown.event.which );
        }
    }
    
    render() {
        return (           
            <div>
                <h1>board</h1>
                <Hangman state={ this.props.hangmanState } /> 
            </div>
        );
    }
}

export default connect(x => x)(keydown(Board));