import React from 'react'

export const Small = React.memo(( { value } ) => {

    console.log('componente Small llamado');

    return (
        <small>
            { value }
        </small>
    )
})
