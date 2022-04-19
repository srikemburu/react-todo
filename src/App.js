// This is Front end React_todo. Works in conjunction with backend express_api
import './App.css';
import './Item.css';
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'
import Todos from "./components/Todos"
import OneTodo from "./components/OneTodo"
import NewTodo from "./components/NewTodo"
import DeleteTodo from './components/DeleteTodo';
import UpdateTodo from './components/UpdateTodo';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Todos/> } /> 
          <Route path="/:id" element={<OneTodo/> } /> 
          <Route path="/new" element={<NewTodo/> } /> 
          <Route path="/delete/:id" element={<DeleteTodo/> } />
          <Route path="/:id/update" element={<UpdateTodo/> } />
        </Routes>
        {/* <nav>
          <Link to='/' > Home</Link>
        </nav> */}
      </Router>     
      
    </div>
  );
}

export default App
