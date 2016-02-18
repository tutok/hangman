'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { actionTypes } from './actions';

const initialState = {
    word: 'marcin',
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
// 
//         case AuthorActionsTypes.UPDATE_AUTHOR:
//             let existingAuthor = state.authors.find(x => x.id === action.payload.author.id);
//             let existingAuthorIndex = state.authors.indexOf(existingAuthor);
// 
//             return Object.assign({}, state, {
//                 authors: [
//                     ...state.authors.slice(0, existingAuthorIndex),
//                     Object.assign({}, state.authors[existingAuthorIndex], {
//                         firstName: action.payload.author.firstName,
//                         lastName: action.payload.author.lastName,
//                     }),
//                     ...state.authors.slice(existingAuthorIndex + 1)
//                 ]
//             });
// 
//         case AuthorActionsTypes.DELETE_AUTHOR:
//             debugger;
//             let authorToDelete = state.authors.find(x => x.id === action.payload.id);
//             let authors = state.authors.filter(x => x !== authorToDelete);
// 
//             return Object.assign({}, state, {
//                 authors: [...authors]
//             });

        default:
            return state;
    }
}

export const store = createStore(reducer,
                                 applyMiddleware(thunkMiddleware));