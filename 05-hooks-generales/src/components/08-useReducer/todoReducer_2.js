

import React from 'react'

export const todoReducer = (state = [], action) => {
    
    switch ( action.type ) {
        case 'add':
            return [...state, action.payload];
    
        case 'delete':
            return state.filter( todo => todo.id !== action.payload.id );

        case 'toggle':
            return state.map( todo => ( todo.id === action.payload.id ) ? 
                                                            {...todo, done : !todo.done}
                                                            : todo
                            );

        case 'toggle-old':
            return state.map( todo => {
                if ( todo.id === action.payload.id ){
                    return {
                        ...todo,
                        done: !todo.done
                    } 
                }else {
                    return todo;
                }
            })

        default:
            return state;
    }
}
