// rafc
import React from 'react'
import { CounterApp } from './components/CounterApp'
import { CounterwithCustomHook } from './components/CounterwithCustomHook'

export const HookApp = () => {
    return (
        <div>
            <h1>Hola</h1>
        {/* <CounterApp />, */}
        <CounterwithCustomHook />,

        </div>
    )
}
