'use strict';

import React from 'react';

class GuessWord extends React.Component{
     
    render() {
        
        let wordTable = [];
        for(let char of this.props.word){
            if (this.props.guessedCharacters.some(x => x === char)){
                wordTable.push(char);
            } else {
                wordTable.push('_');
            }
        }
        
        return (           
            <div>
                <p>
                    {wordTable.map((x, i) => (<span key={i}> { x } </span>), this)}
                </p>
            </div>
        );
    }
}

export default GuessWord; 