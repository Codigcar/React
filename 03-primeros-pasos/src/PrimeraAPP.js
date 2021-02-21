import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// functional components

const PrimeraApp = ( {msg = "Mensaje x default"} ) => {


    const saludo = 'Hola mundo';
    const numeros = [1,2,3,4]
    const persona = {
        nombre: 'Carlos',
        edad: '50'
    };

    return (
        /* <Fragment>
            <h1> Hola mundo </h1>
            <p>Mi primera app</p>
        </Fragment> */
        /* <div>
            <h1> Hola mundo </h1>
            <p>Mi primera app</p>
        </div>
         */

        <>
            <h1> {msg} </h1>
            <h1> {saludo} </h1>
            <p>{numeros}</p>
            <p>{ JSON.stringify(persona)}</p>
            <pre>{ JSON.stringify(persona, null, 3)}</pre>
        </>

        
    );
}

PrimeraApp.propTypes = {
    msg: PropTypes.string.isRequired
}

export default PrimeraApp;