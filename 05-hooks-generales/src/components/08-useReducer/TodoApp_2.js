import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer_2';
import './style.css';
import { useForm } from '../../hooks/useForm';
import { TodoList } from './TodoList_2';

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

    const [ { description }, handleInputChange, reset ] = useForm({description:''});
    console.log(description);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [todos]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if( description.trim().length <= 1 ){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        // action
        const addTodoAction = {
            type:'add',
            payload: newTodo
        }

        dispatch( addTodoAction );
        reset();
    }

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


    return (
        <div>
            <h1>TodoApp: { todos.length }</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/* todos, handleDelete, handleToggle */}
                    < TodoList todos={ todos } handleDelete={ handleDelete } handleToggle={ handleToggle} />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>
                        <input value={ description } onChange={handleInputChange} className="form-control" type="text" name="description" placeholder="Aprender ...." autoComplete="off" />
                        <button type="submit" className="btn btn-outline-primary mt-1 boton-todo"> Agregar </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
