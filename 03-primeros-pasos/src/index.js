import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraAPP';
import './index.css';


/* const saludo = <h1> Hola mundo </h1>; */

const divRoot = document.querySelector('#root');    

//console.log(divRoot);

ReactDOM.render(<PrimeraApp msg = "Esta es una comunicación entre components"  />, divRoot);