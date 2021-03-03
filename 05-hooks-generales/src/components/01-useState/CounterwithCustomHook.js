// rafc
import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterwithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(100);

    return (
        <>
            <h1>Counter with Hook: { state }</h1>
            <hr />
            <button onClick = { () => increment(2) }> +2 </button>
            <button onClick = { reset }> Reset </button>
            <button onClick = { decrement }> -1 </button>
        </>
    )
}
