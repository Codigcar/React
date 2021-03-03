import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        console.log('componente montado Message');
        return () => {
            console.log('comoponente desmontado Message');
        }
    }, [])

    return (
        <div>
            <h3>Mensage...</h3>
        </div>
    )
}
