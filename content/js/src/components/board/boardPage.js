'use strict';

import React from 'react';
import { connect } from 'react-redux';
import Hangman from './hangman'; 
import { characterMissed, characterGuessed } from '../../actions';

class Board extends React.Component{
    
    componentDidMount(){
        debugger
        document.body.addEventListener("keydown", this.handleOnKeydown.bind(this));
    }

    componentWillUnmount() {
        debugger
        document.body.removeEventListener("keydown", this.handleOnKeydown.bind(this));
    }
    
    handleOnKeydown(event) {
       console.log(event);
       
        if (!event) {
            return;
        }
        
        let character = String.fromCharCode(event.keyCode);
        if (!character){
            return;
        } 
        
        debugger
        
        if (this.props.word.includes(character)){
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
                <Hangman state={ this.props.hangmanState } /> 
            </div>
        );
    }
}

export default connect(x => x)(Board);