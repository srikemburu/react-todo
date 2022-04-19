import {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getOneTodo, deleteTodo } from '../services/todos-api'

function DeleteTodo() {
    const nav = useNavigate()
    const { id } = useParams()
    const [todo, setTodo] = useState({})

    // The second parameter to the useEffect React hook is an array of dependencies that determines when the hook is run, passing an empty array causes the hook to only be run once when the component first loads
    useEffect(() => {getOneTodo(id)
        .then (res => res.json())
        .then(res => setTodo(res))
    },[]) 
    
    const deleteTheTodo = () => {
        deleteTodo(id)
        nav('/')
    }

    return(
        <div>
            <h1>Todo: </h1>
            <h3>{todo.description}</h3>
            <button onClick={deleteTheTodo}>Delete</button>
        </div>
    )

}

export default DeleteTodo

