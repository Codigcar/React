import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

const GifExpertApp= () => {

    // const categories = ['Micho', 'Dragon Ball', 'One Piece']
    const [categories, setCategories] = useState(['Micho', 'Dragon Ball', 'One Piece'])

    /* const handleAdd = () => {
        // categories.push('Zoro'); -> no funciona
        setCategories([...categories,'Zoro']);
        //setCategories( cats => [...cats,'Zoro']); -> si funciona
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory/>
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
