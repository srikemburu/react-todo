// Get one document from database
import {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import api endpoint
import { getOneTodo, deleteTodo  } from '../services/todos-api'

export default function OneTodo() {
    // Object destructuring
    const { id } = useParams();
    const nav = useNavigate()

    console.log(useParams())
    console.log(id)
    const [oneTodo, setOneTodo] = useState({})
   
    useEffect(()=>{
        getOneTodo(id)
        .then(res => res.json())
        .then(res => setOneTodo(res))
    },[])

    const deleteTheTodo = () => {
        deleteTodo(id)
        nav('/')
    }

    console.log(oneTodo.complete)
    console.log("_id = ", oneTodo._id)
    return(    
        <div>
            <h3>{oneTodo.description}</h3>
            <h3>complete: {JSON.stringify(oneTodo.complete)}</h3>
            <button onClick={() => {
                nav("/")
            }}>Index Page</button><br/><br/>


            Completed: <input type='checkbox' checked={oneTodo.complete} />
            <br/>
            <button onClick={() => {nav(`/${id}/update`)}}>Edit</button>
            <button onClick={deleteTheTodo}>Delete</button>
        </div>
    )
}
