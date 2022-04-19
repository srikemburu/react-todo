
import {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getOneTodo, updateTodo } from '../services/todos-api'

export default function UpdateTodo() { 
    const {id} = useParams()
    const nav = useNavigate()
    const [todo,setData] = useState({})

    useEffect(() => {
        getOneTodo(id)
        .then(res => res.json())
        .then(res => setData(res))
    },[])

    const updateTheTodo = e => {
        e.preventDefault()
        const updatedTodo = {description: e.target.description.value, complete: e.target.complete.checked}
        updateTodo(updatedTodo,id)
        nav(`/${id}`)
        }

        return(
            <div>
                <h1>Edit Todo</h1>
                <form onSubmit={updateTheTodo}>
                    <input type='text' name='description' defaultValue={todo.description}/>
                    Complete: <input type='checkbox' name='complete' defaultChecked={todo.complete} />
                    <input type='submit' />
                </form>
            </div>
        ) 
}




