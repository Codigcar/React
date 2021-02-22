// snippet - rafc
import React from 'react'

export const GifGrid = ({ category }) => {

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

        console.log(data);
    }

    getGifs();

    return (
        <div>
            <h3>{ category }</h3>
        </div>
    )
}
