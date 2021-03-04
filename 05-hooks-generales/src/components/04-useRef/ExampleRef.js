import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const ExampleRef = () => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>ExampleRef</h1>
            <hr />

            { show && <MultipleCustomHooks /> }

            <button className="btn btn-danger mt-5"
                    onClick={ () => {
                      setShow( !show )  
                    }}>Show/Hide</button>

        </div>
    )
}
