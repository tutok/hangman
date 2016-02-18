'use strict';

import fetch from 'isomorphic-fetch';
import wordnikClient from './wordnik/wordnikClient';

export const actionTypes = {};

actionTypes.CHARACTER_MISSED = 'CHARACTER_MISSED';
export function characterMissed(character, hangmanNewState) {
    return {
        type: actionTypes.CHARACTER_MISSED,
        payload: {
            character,
            hangmanNewState
        }
    };
};

actionTypes.CHARACTER_GUESSED = 'CHARACTER_GUESSED';
export function characterGuessed(character) {
    return {
        type: actionTypes.CHARACTER_GUESSED,
        payload: {
            character
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
    let word = wordnikJsonResponse.word;
    console.log(word);
      
    return {
        type: actionTypes.NEW_WORD_RECEIVED,
        payload: {
            word: word
        }
    }
}