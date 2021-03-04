// rafc

import React, { useEffect, useRef, useState } from 'react'

export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    const isMounted = useRef(true);

    useEffect(() => {
        console.log('isMounted.current = true');
        console.log(isMounted.current);
        return () => {
            console.log('isMounted.current = false');
            isMounted.current = false;
            console.log(isMounted.current);
        }
    }, [])


    useEffect(() => {
        setState(
            {
                data: null,
                loading: true,
                error: null
            }
        )
        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                    setTimeout(() => {
                        if ( isMounted.current ){
                            setState({
                                data: data,
                                loading: false,
                                error: null
                            }) 
                        } else {
                            console.log('no se llamó');
                        }
                    }, 2000);
                
            });
        
            // return () => {
            //     console.log('isMounted.current = false');
            //     isMounted.current = false;
            //     console.log(isMounted.current);
            // }

    }, [url])

    return state; 
}
