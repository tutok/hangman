'use strict';

import React from 'react';

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

export default Hangman; 