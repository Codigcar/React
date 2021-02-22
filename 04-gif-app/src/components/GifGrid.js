// snippet - rafc
import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async() => {
        
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=G3IaW6wzWfsErWvMF8Gy2dnRTmBm0ejv&q=Rick+and+Morty&limit=10'; 
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        // console.log(gifs);
        setImages(gifs);
    }

    // getGifs();

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
