'use strict';

//import { Dispatcher } from '../dispatcher/appDispatcher';
//import ActionTypes from '../constants/actionTypes';
//import { actionTypes as AuthorActionsTypes } from '../components/author/actions/actions';
//import { EventEmitter } from 'events';
import { createStore } from 'redux';


const initialState = {
    //authors: []
};

export let appStore = function(state, action) {

    debugger;

    if (typeof state === 'undefined') {
        return initialState;
    }

    switch (action.type) {
//         case AuthorActionsTypes.CREATE_AUTHOR:
//             return Object.assign({}, state, {
//                 authors: [
//                     ...state.authors,
//                     Object.assign({}, action.payload.author)
//                 ]
//             });
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