import React, {useState} from 'react'
import PropTypes from 'prop-types';

// snippet - rafc
export const AddCategory = ( {setCategories} ) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit hecho');

        if ( inputValue.trim().length > 2) {
            setCategories(cats => [...cats, inputValue]);
            setInputValue('')
        }

    }
    
    return (
        <form onSubmit={ handleSubmit }>
            <h1>{inputValue}</h1>
            <input type="text" value={inputValue} onChange={handleInputChange} />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}