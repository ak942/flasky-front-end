import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Crystal = ({name,color,powers}) => {
    const [count, setCount] = useState(0); // React.useState()
    const increaseCount = (event) => {
        setCount(count+1)
    };
    return (
        <>
            <h2> {name}</h2>
            <p> {color}</p>
            <p> {powers}</p>
            <p> You've charged the {name} crystal {count} times</p>
            <button onClick={increaseCount}>Charge Crystal</button>
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

