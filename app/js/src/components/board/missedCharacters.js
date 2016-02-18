'use strict';

import React, { PropTypes } from 'react';

class MissedCharacters extends React.Component{
   
    render() {
        return (           
            <div className="missed-characters">
                <p className="header">You missed:</p>
                <p className="character-list">
                    { this.props.characters.map((x, i) => (<span key={i}>{x}</span>), this) }
                </p>
            </div>
        );
    }
}

MissedCharacters.propTypes = {
    characters: PropTypes.array.isRequired,
};

export default MissedCharacters; 