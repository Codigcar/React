import React, { useState } from 'react';
import PropTypes from 'prop-types';

// functional components

const CounterApp= ( numero ) => {

    /* const state = useState('Goku');
    console.log(state); */
   
    /*  const [nombre, setNombre] = useState('Goku');
    console.log(nombre);
    console.log(setNombre); */

    const [counter, setCounter] = useState(10); // retorna un arreglo con 2 valores


    const handleAdd = () => {
         setCounter( counter + 1);
        // setCounter( c => c + 1);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={ e => handleAdd(e) }>+1</button>
        </>
    );
}

CounterApp.propTypes = {
    numero: PropTypes.number.isRequired
}

export default CounterApp;