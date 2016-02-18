'use strict';

import React, { PropTypes } from 'react';


const STATE_MAP = ['bar', 'head', 'neck', 'corpus', 'right-arm', 'left-arm', 'right-hand', 'left-hand', 'right-leg', 'left-leg', 'right-foot', 'left-foot'];

class Hangman extends React.Component{

    render() {
        let className = `hangmanState${this.props.state}`;
        let bodyElements = [];
        for(let i = 0; i <= this.props.state; i++){
            bodyElements.push(<span key={i} className={ 'hangman-' + STATE_MAP[i] }></span>);        
        }
                
        return (           
            <div className="hangman-body">
                {bodyElements}
            </div>
        );
    }
}

Hangman.propTypes = {
    state: PropTypes.number.isRequired,
};

export default Hangman; 