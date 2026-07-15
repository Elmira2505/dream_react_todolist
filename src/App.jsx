
//import './App.css'
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx'

function App() {

  return (
    <div>
   { /*<div className="container"></div>
      <h1 className="header">Todo List</h1>
     */}
  
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App
