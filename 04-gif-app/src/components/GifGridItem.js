// snippet - rafc

import React from 'react'

export const GifGridItem = ( {img} ) => {
    console.log(img);
    return (
        <div>
            <img src={ img.url } alt ={ img.title } />
            <p>{ img.title }</p>
        </div>
    )
}
