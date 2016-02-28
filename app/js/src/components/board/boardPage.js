'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { characterMissed, characterGuessed } from '../../actions';
import Hangman from './hangman'; 
import MissedCharacters from './missedCharacters';
import GuesWord from './guessWord';


class Board extends React.Component{
    
    constructor() {
        super();
        
        this.handleOnKeydown = this.handleOnKeydown.bind(this);
    }
    
    componentDidMount() {
        document.body.addEventListener("keydown", this.handleOnKeydown);
    }

    componentWillUnmount() {
        document.body.removeEventListener("keydown", this.handleOnKeydown);
    }
    
    handleOnKeydown(event) {     
        debugger;
        
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
            this.props.dispatch(characterMissed(character, this.props.hangmanState));
        }
    }
    
    render() {       
        return (           
            <div className="container hangman-board">
                <div className="inner">
                    <div className="row"> 
                        <div className="column-left">
                            <Hangman state={ this.props.hangmanState } />
                        </div>
                        <div className="column-right">
                            <MissedCharacters characters={ this.props.missedCharacters }/>
                        </div>
                    </div>
                    <div className="row"> 
                        <div className="column-whole">
                            <GuesWord word={ this.props.word } guessedCharacters={ this.props.guessedCharacters } />
                        </div>
                    </div>
                </div>
                <div className="corner-triangle"></div>
            </div>
        );
    }
}

export default connect(x => x)(Board);