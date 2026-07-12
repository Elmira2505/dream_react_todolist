
import './App.css'
import TodoList from "./components/Todolist";
import TodoForm from './components/TodoForm'

function App() {



  return (
    <div className='container'>
      <h1 className='header'>My Todos</h1> 
      
      <TodoForm className='form'/>
      <TodoList classname='listItem'/>
    </div>
  )
}

export default App
