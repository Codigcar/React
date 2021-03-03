import React, { useState } from 'react'

export const CounterApp = () => {
    
    // const [counter, setCounter] = useState(10);
    const [counters, setCounters] = useState( { counter1: 10, counter2: 20 } );
    const { counter1, counter2 } = counters;
    console.log(counters);

    return (
        <>
            {/* <h1>Counter: { counter } </h1> */}
            {/* <button onClick={ () => setCounter( counter + 1) }  >+1 Counter2</button> */}
            <h1>Counter1: { counter1 }</h1>
            <h1>Counter2: { counter2 }</h1>
            <hr/>
            <button onClick={ () => { 
                setCounters( {
                        ...counters,
                        counter1: counter1 + 1  
                    });
                }} 
            >
                +1 Counter1
            </button>
            <button onClick={
                () => {
                    setCounters({
                        ...counters,
                        counter1: counter1 - 1
                    });
                }
            }>
                -1 Counter1
            </button>
        </>
    )
}
