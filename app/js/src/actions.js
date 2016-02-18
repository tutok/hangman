'use strict';

import fetch from 'isomorphic-fetch';
import wordnikClient from './wordnik/wordnikClient';

export const actionTypes = {};

actionTypes.CHARACTER_GUESSED = 'CHARACTER_GUESSED';
export function characterGuessed(character) {
    return {
        type: actionTypes.CHARACTER_GUESSED,
        payload: {
            character
        }
    };
};

actionTypes.CHARACTER_MISSED = 'CHARACTER_MISSED';
export function characterMissed(character, hangmanState) {
    hangmanState += 1;
    if (hangmanState >= 11){
        debugger;
        return (dispatch, getState) => {
            dispatch(gameOver(getState().gameNumber));
            dispatch(fetchNewWord());
        }    
    }
      
    return {
        type: actionTypes.CHARACTER_MISSED,
        payload: {
            character,
            hangmanState
        }
    };
};

actionTypes.GAME_OVER = 'GAME_OVER';
export function gameOver(gameNumber) {
    debugger;
    return {
        type: actionTypes.GAME_OVER,
        payload: {
            gameNumber: gameNumber + 1
        }
    };
};



//TODO: move to separate file
export function fetchNewWord() {
    return dispatch => {
        dispatch(requestingNewWord());
        
         wordnikClient.fetchRandomWord()       
            .then(response => response.json())
            .then(json =>  dispatch(newWordReceived(json)))
            .catch(error => {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                alert('There has been a problem with application, please try again later.');
            });
    }
}

actionTypes.REQUESTING_NEW_WORD = 'REQUESTING_NEW_WORD';
function requestingNewWord() {
    return {
        type: actionTypes.REQUESTING_NEW_WORD,
    };
}

actionTypes.NEW_WORD_RECEIVED = 'NEW_WORD_RECEIVED';
function newWordReceived(wordnikJsonResponse) {
    let word = wordnikJsonResponse.word.toLowerCase();
    console.log(word);
      
    return {
        type: actionTypes.NEW_WORD_RECEIVED,
        payload: {
            word: word
        }
    }
}