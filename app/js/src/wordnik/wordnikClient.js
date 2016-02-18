'strict mode';

import fetch from 'isomorphic-fetch';
import { WORD_MAX_LENGTH, WORDNIK_API_URL, WORDNIK_API_KEY } from '../appSettings';


class WordnikClient {
    fetchRandomWord(){
        let query = {
            hasDictionaryDef: false,
            minCorpusCount: 0,
            maxCorpusCount: -1,
            minDictionaryCount: 1,
            maxDictionaryCount:-1,
            minLength: 5,
            maxLength: WORD_MAX_LENGTH,
            api_key: WORDNIK_API_KEY
        }
        let url = WORDNIK_API_URL + 'randomWord' + '?' + objectAsQueryStringParams(query);
                            
        return fetch(url)
                .then(processStatus);    
    }    
}
let wordnikClient = new WordnikClient();
export default wordnikClient; 

function processStatus(response) {
    if (response.status === 200) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
};

function objectAsQueryStringParams(object){
    var queryStringParams = Object.keys(object)
                        .map(x => encodeURIComponent(x) + '=' + encodeURIComponent(object[x]))
                        .join('&')
                        .replace(/%20/g, '+');
                        
    return queryStringParams;
}