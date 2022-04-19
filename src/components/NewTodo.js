import React from 'react';
import { useNavigate} from "react-router-dom";
// import api endpoint
import { createTodo } from '../services/todos-api'

export default function NewTodo() { 
    const nav = useNavigate()

    const newTodo = e => {
        // e.preventDefault()
        const todo = {description: document.querySelector('#desc').value, complete: false}
        createTodo(todo)
        nav('/')
    }   
        return (
            <div>
                <h1> Create Todo </h1>
                <form onSubmit={newTodo}>
                    <input type='text' name='description' id='desc' />
                    <input type='submit' />
                </form>
            </div>
        )
}
