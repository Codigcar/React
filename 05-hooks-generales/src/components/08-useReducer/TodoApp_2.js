import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer_2';
import './style.css';
import { TodoList } from './TodoList_2';
import { TodoAdd } from './TodoAdd-col-5';

// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false
// }];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [todos]);

    // const handleSubmit = (e) => {
    //     // e.preventDefault();

    //     // if( description.trim().length <= 1 ){
    //     //     return;
    //     // }

    //     const newTodo = {
    //         id: new Date().getTime(),
    //         desc: description,
    //         done: false
    //     };

    //     // action
    //     // const addTodoAction = {
    //     //     type:'add',
    //     //     payload: newTodo
    //     // }

    //     dispatch( addTodoAction );
    //     reset();
    // }

    const handleDelete = ( todoId ) => {
        console.log(todoId);

        // crear la action
        const deleteTodoAction = {
            type: 'delete',
            payload: {
                id: todoId
            }
        }

        // dispatch
        dispatch( deleteTodoAction );
    }

    const handleToggle = ( todoId )=> {
        dispatch({
            type: 'toggle',
            payload: {
                id: todoId
            }
        });
    }

    const handleAddTodo = ( newTodo ) => {
        // action
        const addTodoAction = {
            type:'add',
            payload: newTodo
        }

        dispatch( addTodoAction );
    }


    return (
        <div>
            <h1>TodoApp: { todos.length }</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    < TodoList todos={ todos } handleDelete={ handleDelete } handleToggle={ handleToggle} />
                </div>

                <div className="col-5">
                    <TodoAdd handleAddTodo={ handleAddTodo } />
                </div>
            </div>
        </div>
    )
}
