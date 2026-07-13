
import './App.css'
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx'

function App() {

  return (
    <div className="container">
      <h1 className="header">Todo List</h1>

      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App
