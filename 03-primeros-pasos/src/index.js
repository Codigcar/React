import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraAPP';
import './index.css';
import reactDom from 'react-dom';

import CounterApp from './CounterApp';


const divRoot = document.querySelector('#root');    


//ReactDOM.render(<PrimeraApp msg = "Esta es una comunicación entre components"  />, divRoot);
ReactDOM.render(<CounterApp numero={123} />,divRoot );