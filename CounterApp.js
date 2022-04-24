import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({defaultValue}) => {

    let [value, setValue] = useState(defaultValue);

    const handleAdd = () => {
        setValue(value++);
    }

    const handleSubstract = () => {
        setValue(value-1);
    }

    const handleReset = () => {
        setValue(defaultValue);
    }

    return( <>
        <h1>CounterApp</h1>
        <h2> { value } </h2>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSubstract}>-1</button>
        </>
    )
}

CounterApp.propTypes = { 
    defaultValue: PropTypes.number,
}

export default CounterApp;