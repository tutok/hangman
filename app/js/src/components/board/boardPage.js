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
        //onKeydown={ this.handleOnKeydown } onClick={ this.handleOnKeydown }
        
        let style = {
            width: '300px',
            height: '300px',
            backgroundColor: 'blue'
        }
        
        return (           
            <div style={ style }>
                <h1>board</h1>
                <MissedCharacters characters={ this.props.missedCharacters }/>
                <Hangman state={ this.props.hangmanState } />
                
                <GuesWord word={ this.props.word } guessedCharacters={ this.props.guessedCharacters } /> 
            </div>
        );
    }
}

export default connect(x => x)(Board);