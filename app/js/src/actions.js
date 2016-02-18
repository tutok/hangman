'use strict';
import fetch from 'isomorphic-fetch';

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








export function fetchNewWord() {
    return dispatch => {
        dispatch(requestingNewWord());
        
        
        
        let wordnikRandomEndpointUrl = 'http://api.wordnik.com:80/v4/words.json/randomWord';
        let query = {
            hasDictionaryDef: false,
            minCorpusCount: 0,
            maxCorpusCount: -1,
            minDictionaryCount: 1,
            maxDictionaryCount:-1,
            minLength: 5,
            maxLength: 11,
            api_key: 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
        }
        var params = Object.keys(query)
                        .map(x => encodeURIComponent(x) + '=' + encodeURIComponent(query[x]))
                        .join('&')
                        .replace(/%20/g, '+');
                        
    return  fetch(wordnikRandomEndpointUrl + '?' + params)        
            .then(function(response) {
                debugger;
                return response.json();
            })
            .then(function(json) {
                debugger;
                dispatch(newWordReceived(json))
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
    return {
        type: actionTypes.NEW_WORD_RECEIVED,
        payload: {
            word: wordnikJsonResponse.word
        }
    }
}