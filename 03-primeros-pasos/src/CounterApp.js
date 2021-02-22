import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// functional components

const CounterApp= ( numero ) => {

    const handleAdd = (e) => {
        console.log(e);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{numero.numero}</h2>
            <button onClick={ e => handleAdd(e) }>+1</button>
        </>
    );
}

CounterApp.propTypes = {
    numero: PropTypes.number.isRequired
}

export default CounterApp;