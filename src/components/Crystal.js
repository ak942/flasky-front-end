import React from 'react';
import PropTypes from 'prop-types';

const Crystal = ({id, name,color,powers,charges, increaseCharge, removeCrystal}) => {
    // const [count, setCount] = useState(0); // React.useState()
    // const increaseCount = (event) => {
    //     setCount(count+1)
    // };


    return (
        <>
            <h2> {name}</h2>
            <p> {color}</p>
            <p> {powers}</p>
            <button onClick={() => increaseCharge(id)}>Charge Crystal</button>
            <p> You've charged the {name} crystal {charges} times</p>
            <button onClick={()=> removeCrystal(id)}>Remove Crystal</button>
        </>
    );
};

//helps other developrs know how this component is suppos to work 
Crystal.propTypes= {
    name : PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    powers: PropTypes.string.isRequired,
    charges: PropTypes.number.isRequired
}

export default Crystal

