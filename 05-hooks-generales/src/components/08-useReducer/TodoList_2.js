import React from 'react'
import { TodoListItem } from './TodoListItem_2'

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <ul className="list-group list-group-flush">
            {   
                todos.map( (todo, i) => (
                    // TodoListItem, todo, idexn, handleDelete, handleToggle
                    <TodoListItem key={ todo.id } todo={ todo } index={ i } handleDelete={ handleDelete } handleToggle={ handleToggle } />
                ))
            }
        </ul>
    )
}
