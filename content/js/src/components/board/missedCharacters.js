'use strict';

import React, { PropTypes } from 'react';

class MissedCharacters extends React.Component{
   
    render() {
        return (           
            <div>
                <p className="" >You missed:</p>
                <p>
                    { this.props.characters.map((x, i) => (<span key={i}> { x } </span>), this) }
                </p>
            </div>
        );
    }
}

MissedCharacters.propTypes = {
    characters: PropTypes.array.isRequired,
};

export default MissedCharacters; 