'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { actionTypes } from './actions';

const initialState = {
    word: '',
    guessedCharacters: [],
    missedCharacters: [],
    hangmanState: 0,
};

let reducer = function(state, action) {

    if (typeof state === 'undefined') {
        return initialState;
    }

    switch (action.type) {
        case actionTypes.CHARACTER_GUESSED:
            return Object.assign({}, state, {
                guessedCharacters: [
                    ...state.guessedCharacters,
                    action.payload.character
                ]
            });
            
        case actionTypes.CHARACTER_MISSED:
            return Object.assign({}, state, {
                hangmanState: action.payload.hangmanNewState, 
                missedCharacters: [
                    ...state.missedCharacters,
                    action.payload.character
                ]
            });
            
            
            
        case actionTypes.NEW_WORD_RECEIVED:
            return Object.assign({}, state, {
                word: action.payload.word, 
            }); 

        default:
            return state;
    }
}

let middleWeare = applyMiddleware(thunkMiddleware);

export var store = createStore(reducer, middleWeare);