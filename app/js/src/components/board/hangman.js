'use strict';

import React, { PropTypes } from 'react';

class Hangman extends React.Component{
   
    render() {
        let className = `hangmanState${this.props.state }`;
        return (           
            <div className="{className}">
                <p>hangman state: { this.props.state }</p>
            </div>
        );
    }
}

Hangman.propTypes = {
    state: PropTypes.number.isRequired,
};

export default Hangman; 