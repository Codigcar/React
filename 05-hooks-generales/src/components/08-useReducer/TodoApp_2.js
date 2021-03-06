import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer_2';
import './style.css';
import { useForm } from '../../hooks/useForm';

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


    return (
        <div>
            <h1>TodoApp: { todos.length }</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {   
                            todos.map( (todo, i) => (
                                <li key={todo.id} className="list-group-item">
                                    <p className="text-center complete"> { i + 1}. { todo.desc }</p>
                                    <button className="btn btn-danger" onClick={ () => handleDelete( todo.id )}>Borrar</button>
                                </li>
                            ))
                        }
                    </ul>
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
