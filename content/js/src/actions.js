'use strict';
import fetch from 'isomorphic-fetch';

export const actionTypes = {
    //CHECK_CHARACTER: 'CHECK_CHARACTER',
    CHARACTER_MISSED: 'CHARACTER_MISSED',
    CHARACTER_GUESSED: 'CHARACTER_GUESSED',
};

export function characterMissed(character, hangmanNewState) {
    return {
        type: actionTypes.CHARACTER_MISSED,
        payload: {
            character,
            hangmanNewState
        }
    };
};

export function characterGuessed(character) {
    return {
        type: actionTypes.CHARACTER_GUESSED,
        payload: {
            character
        }
    };
};