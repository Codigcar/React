import React, {useState} from 'react'

// snippet - rafc
export const AddCategory = () => {
    
    const [inputValue, setInputValue] = useState('Mensage');

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit hecho');
    }
    
    return (
        <form onSubmit={ handleSubmit }>
            <h1>{inputValue}</h1>
            <input type="text" value={inputValue} onChange={handleInputChange} />
        </form>
    )
}
