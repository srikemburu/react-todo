
import {getTodos} from '../services/todos-api'
import {Link} from 'react-router-dom'
import NewTodo from './NewTodo'

// import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
// import OneTodo from './OneTodo'

export default function Todos() {
    //save api response into state variable
    const [todos, setTodos] = useState([])

    useEffect(()=>{
        getTodos()
        .then(res => res.json())
        .then(res => setTodos(res))
    },[])

    console.log(todos)

    return (
    <div>
            <h1> To Do List</h1>
        <ul>
            {todos.map((todo,index) => {
               return(
                 <Link to={"/" + todo._id} >    
                    <h3 className={todo.complete ? "completed" : "incomplete"}><span>{todo.description}</span></h3>
                </Link>
               ) 
            })}
        </ul>
        {/* Add create Todo function */}
        <NewTodo />
    </div>
  )
}
