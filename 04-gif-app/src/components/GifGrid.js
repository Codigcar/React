// snippet - rafc
import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs( category )
            .then( imgs => setImages(imgs) )
    }, [category])

    

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                {/* <ol> */}
                    {
                        /* images.map( gif => {
                            return <li key={ gif.id }> { gif.title }</li>
                        }) */
                        /* images.map( ({id, title}) => <li key={ id }>{ title }</li> ) */
                        images.map( img => 
                            <GifGridItem 
                                key={ img.id } 
                                img={ img } 
                            />
                        )}
                {/* </ol> */}
            </div>
        </>
    )
}
