import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

export const MultipleCustomHooks = () => {

    const { state: counter, increment } = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // si hay data traeme data[0]
    const { author, quote } = !!data && data[0];
    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                loading ? 
                (
                    <div className="alert alert-info text-center">
                    Loading...
                    </div>
                )
                :
                (
                    <blockquote className="blockquote text-left">
                        <p className="mb-3">{ quote }</p>
                        <footer className="blockquote-footer">{ author } </footer>
                    </blockquote>
                )
            }

            <button className="btn btn-primary" onClick={ increment }>
                Siguiente quiote
            </button>
            

            
        </div>
    )
}
