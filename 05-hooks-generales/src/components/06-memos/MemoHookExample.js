import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';

export const MemoHookExample = () => {

    const {state:counter, increment} = useCounter(10);
    const [show, setShow] = useState(true)

    const procesoPesado = ( iteraciones ) => {
        for (let i = 0; i < iteraciones; i++) {
            console.log('iteraciones');
        }
        return `${ iteraciones } iteraciones realizadas`;
    }

    const memoProcesoPesado = useMemo(() => procesoPesado(30), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <hr />

            {/* <p>{ procesoPesado(20) }</p> */}
            <p>{ memoProcesoPesado } </p>

            <h3>Counter: <small>{ counter }</small> </h3>
            <button className="btn btn-primary" onClick={ increment }>+1</button>
            <button className="btn btn-outline-primary ml-3" onClick={ () => { setShow( !show ); }}> Show Hidde { JSON.stringify(show) } </button>

        </div>
    )
}
