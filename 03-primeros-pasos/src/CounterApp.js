import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// functional components

const CounterApp= ( numero ) => {
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{numero.numero}</h2>
        </>
    );
}

CounterApp.propTypes = {
    numero: PropTypes.number.isRequired
}

export default CounterApp;