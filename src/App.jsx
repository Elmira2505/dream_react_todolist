
import './App.css'
import TodoList from "./Todolist";
import TodoForm from './TodoForm'

function App() {



  return (
    <div className="container">
      <h1 className="header">Todo List</h1>

      <TodoForm className="form" />
      <TodoList classname="listItem" />
    </div>
  );
}

export default App
