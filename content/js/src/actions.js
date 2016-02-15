'use strict';

export const actionTypes = {
    //CHECK_CHARACTER: 'CHECK_CHARACTER',
    CHARACTER_MISSED: 'CHARACTER_MISSED',
    CHARACTER_GUESSED: 'CHARACTER_GUESSED',
};

// export function checkCharacter(character) {
//     let newAuthor = AuthorsApi.saveAuthor(author);
// 
//     return {
//         type: actionTypes.CHECK_CHARACTER,
//         payload: {
//             character: character
//         }
//     };
// };

export function characterMissed(author) {
    return {
        type: actionTypes.CHARACTER_MISSED,
        payload: {
            character: character
        }
    };
};

export function characterGuessed(id) {
    return {
        type: actionTypes.CHARACTER_GUESSED,
        payload: {
            character: character
        }
    };
};