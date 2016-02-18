'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { actionTypes } from './actions';

const initialState = {
    word: '',
    guessedCharacters: [],
    missedCharacters: [],
    hangmanState: 0,
    gameNumber: 0
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
                hangmanState: action.payload.hangmanState,
                missedCharacters: [
                    ...state.missedCharacters,
                    action.payload.character
                ]
            });
            
        case actionTypes.NEW_WORD_RECEIVED:
            return Object.assign({}, state, {
                word: action.payload.word, 
            });
            
        case actionTypes.GAME_OVER:
            return Object.assign({}, state, {
                word: '',
                guessedCharacters: [],
                missedCharacters: [],
                hangmanState: 0,
                gameNumber: action.payload.gameNumber
            });

        default:
            return state;
    }
}

let middleWeare = applyMiddleware(thunkMiddleware);

export var store = createStore(reducer, middleWeare);