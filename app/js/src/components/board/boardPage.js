'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { characterMissed, characterGuessed } from '../../actions';
import Hangman from './hangman'; 
import MissedCharacters from './missedCharacters';
import GuesWord from './guessWord';


class Board extends React.Component{
    
    componentDidMount(){
        document.body.addEventListener("keydown", this.handleOnKeydown.bind(this));
    }

    componentWillUnmount() {
        document.body.removeEventListener("keydown", this.handleOnKeydown.bind(this));
    }
    
    handleOnKeydown(event) {
        let character = String.fromCharCode(event.keyCode);
        if (!character){
            return;
        } 
        
        character = character.toLowerCase();
        if (!character.match(/[a-z]/i) || this.props.missedCharacters.some(x=> x == character))
        {
            return;
        }
        
        if (this.props.word.includes(character)) {
            this.props.dispatch(characterGuessed(character));
        } else {
            this.props.dispatch(characterMissed(character, this.props.hangmanState + 1));
        }
    }
    
    render() {       
        return (           
            <div className="container hangman-board">
                <div className="row"> 
                    <div className="column-one-third">
                        <Hangman state={ this.props.hangmanState } />
                    </div>
                    <div className="column-two-third">
                        <MissedCharacters characters={ this.props.missedCharacters }/>
                    </div>
                </div>
                <div className="row"> 
                    <div className="column-whole">
                        <GuesWord word={ this.props.word } guessedCharacters={ this.props.guessedCharacters } />
                    </div>
                </div> 
            </div>
        );
    }
}

export default connect(x => x)(Board);