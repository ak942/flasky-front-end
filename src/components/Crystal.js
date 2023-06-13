import React from 'react';
import PropTypes from 'prop-types';

const Crystal = ({name,color,powers}) => {
    return (
        <>
            <h2> {name}</h2>
            <p> {color}</p>
            <p> {powers}</p>
            <button>Charge Crystal</button>
        </>
    );
};

//helps other developrs know how this component is suppos to work 
Crystal.propTypes= {
    name : PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    powers: PropTypes.string.isRequired,
}

export default Crystal

