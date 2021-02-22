import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

const GifExpertApp= () => {

    const [categories, setCategories] = useState(['Micho', 'Dragon Ball', 'One Piece'])

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

            <ol>
                {
                    categories.map( (category, id) => {
                        return <li key={ id }> { category } </li>
                    })
                }
            </ol>
        </>
    );
}

export default GifExpertApp;
