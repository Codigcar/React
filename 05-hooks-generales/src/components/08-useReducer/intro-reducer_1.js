import React from 'react'

export const IntroReducer = () => {

    const initialState = [{
        id: 1,
        todo: 'Comprar manzanas',
        done: false
    }];

    const todoReducer = ( state = initialState, action ) => {
        if ( action?.type === 'agregar') {
            return [...state, action.payload];
        }

        return state;
    }

    let todos = todoReducer();

    const newTodo = {
        id:2,
        todo: 'Comprar manzanas2',
        done: false
    }

    const agregarTodoAction = {
        type: 'agregar',
        payload: newTodo
    }

    todos = todoReducer( todos,agregarTodoAction );
    console.log(todos);

    return (
        <div>
            
        </div>
    )
}
