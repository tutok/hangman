'use strict';

import React, { PropTypes } from 'react';
import { MAX_WORD_LENGTH } from '../../appSettings';

class GuessWord extends React.Component{
     
    render() {
        let leftOffset = MAX_WORD_LENGTH - this.props.word.length;
        let wordTable = Array.from(new Array(leftOffset), () => '_' );
        for(let char of this.props.word){
            if (this.props.guessedCharacters.some(x => x === char)){
                wordTable.push(char);
            } else {
                wordTable.push('_');
            }
        }
        
        return (           
            <div className="gues-word">
                <p>
                    {wordTable.map((x, i) => (<span className={ i < leftOffset ? 'offset' : ''} key={i}> { x } </span>), this)}
                </p>
            </div>
        );
    }
}

GuessWord.propTypes = {
    guessedCharacters: PropTypes.array.isRequired,
    word: PropTypes.string.isRequired,
};

export default GuessWord; 