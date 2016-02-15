'use strict';

import React from 'react';
import keydown from 'react-keydown'; 

class Board extends React.Component{
    
    componentWillReceiveProps( { keydown } ) {
        if ( keydown.event ) {
            console.log( keydown.event.which );
        }
    }
    
    render() {
        return (           
            <div>
                <h1 >board</h1>
            </div>
        );
    }
}

export default keydown( Board ); 